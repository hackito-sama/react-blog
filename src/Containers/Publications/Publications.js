import React, { useState, useEffect } from "react";

import List from "../../Components/Publication/List/List";
import { publicationService } from "../../services/publications";


export const BlogContext = React.createContext(); //se crea el contexto

function Publications() {
  const [data, setData] = useState([]);

  useEffect(() => {
    publicationService.getPublications().then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <BlogContext.Provider
      value={{
        data,
        setData,
      }}>
      <div>
        <List />
      </div>
    </BlogContext.Provider>
  );
}

export default Publications;
