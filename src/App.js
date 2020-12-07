import React, {useState, useEffect} from "react";

import Form from "./components/Publication/Form/Form";
import List from "./components/Publication/List/List";
import { publicationService } from "./services/publications";

import "./App.css";

export const BlogContext = React.createContext() //se crea el contexto

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    publicationService.getPublications().then((response) => {
      setData(response.data.data);
    });
  }, []);

  return (
    <BlogContext.Provider value={{
      data,
      setData
    }}>
      <div>
        <List />
        <Form />
      </div>
    </BlogContext.Provider>
  );
}

export default App;
