import React, { useState, useEffect } from "react";
import { publicationService } from "../../services/publications";

import Edit from "../../Components/Publication/Edit/Edit";
import Show from "../../Components/Publication/Show/Show";

export const EditingContext = React.createContext();

const Detail = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [pub, setPub] = useState([]);
  const id = match.params.id;
  const url =
    process.env.REACT_APP_API_URL + process.env.REACT_APP_PUBLICATION + `${id}`;

  useEffect(() => {
    publicationService
      .getPublication(url)
      .then((response) => {
        setPub(response.data);
      })
      .catch((err) => console.log(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <EditingContext.Provider value={{ isEdit, setIsEdit, pub, setPub }}>
      {isEdit ? <Edit /> : <Show />}
    </EditingContext.Provider>
  );
};

export default Detail;
