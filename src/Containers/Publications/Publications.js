import React, { useState, useEffect } from "react";

import List from "../../Components/Publication/List/List";
import { publicationService } from "../../services/publications";

function Publications() {
  const [data, setData] = useState([]);
  

  useEffect(() => {
    const apiEndpoint = process.env.REACT_APP_API_URL + process.env.REACT_APP_PUBLICATION;
    publicationService.getPublications(apiEndpoint).then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
      <div>
        <List data={data}/>
      </div>
  );
}

export default Publications;
