import React, { useState, useEffect } from "react";
import { publicationService } from "../../../services/publications";

const Detail = ({ match }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [pub, setPub] = useState([]);
  const id = match.params.id;
  const url =
    process.env.REACT_APP_API_URL + process.env.REACT_APP_PUBLICATION + `${id}`;

  useEffect(() => {
    publicationService.getPublication(url).then((response) => {
      setPub(response.data);
      console.log(pub);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  const changeEdit = () => {
    if (isEdit === true) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  if (isEdit) {
    return (
      <div>
        <div>
          <input type="text" value={pub.title} />
          <textarea>{pub.description}</textarea>
          <button onClick={changeEdit}>Guardar</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="header">
        <h3>{pub.title}</h3>
        <span>{pub.createat}</span>
        <button onClick={changeEdit}>Editar</button>
      </div>
      <div>
        <p>{pub.description}</p>
      </div>
    </div>
  );
};

export default Detail;
