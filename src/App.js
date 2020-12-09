import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Navigation from "./Components/NavigationBar/Navigation";
import Publications from "./Containers/Publications/Publications";
import Form from "./Components/Publication/Form/Form";
import Detail from "./Components/Publication/Detail/Detail";

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <Route path="/" exact component={Publications} />
      <Route path="/publication/detail/:id?" component={Detail} />
      <Route path="/publication/add" component={Form} />
      <Route path="/publication/edit/:id?" component={Form} />
    </BrowserRouter>
  );
}

export default App;
