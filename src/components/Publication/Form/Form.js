import React, { useState } from "react";
import moment from "moment";

import { publicationService } from "../../../services/publications";

import "./Form.css";

const Form = ({ history }) => {
  let currentDate = moment().format("YYYY-MM-DD");

  const [title, setTitle] = useState();
  const [description, setDescription] = useState();


  const onSubmitHandler = (e) => {
    e.preventDefault();
    let obj = {
      title: title,
      description: description,
      image: null,
      createat: currentDate,
    };
    let res = {};

    publicationService
      .addPublications("", obj)
      .then((response) => {
        res = response.data.data;
        //setData([...data, res]);
        console.log(res);
        history.push("/");
      })
      .catch((err) => {
        res = null;
        console.log("Ha ocurrido un error! => ", err);
      });
  };
  const onChangeHandler = (e) => {
    switch (e.target.name) {
      case "title":
        setTitle(e.target.value);
        break;
      case "description":
        setDescription(e.target.value);
        break;

      default:
        return null;
    }
  };

  return (
    <div className="form">
      <h2>Agregar Publicación</h2>
      <form onSubmit={onSubmitHandler}>
        <div className="inputs">
          <input
            type="text"
            placeholder="Titulo"
            name="title"
            onChange={onChangeHandler}
            className="textInput"
          />
        </div>
        <div className="inputs">
          <textarea
            placeholder="Ingrese una descripcion"
            name="description"
            onChange={onChangeHandler}
            className="textArea"
          ></textarea>
        </div>
        <div className="inputs">
          <input type="submit" value="Agregar Publicacion" className="button" />
        </div>
      </form>
    </div>
  );
};

export default Form;
