import React, { useContext } from "react";
import moment from "moment";
import { Link } from 'react-router-dom'

import { BlogContext } from "../../../Containers/Publications/Publications";

import "./List.css";

//component
const List = () => {
  const { data } = useContext(BlogContext);

  return (
    <div className="list-container">
      <h2>Publicaciones</h2>
      
      {data.map((pub) => (
        <div key={pub.id} className="card">
          
          <Link to={ `/publication/detail/${pub.id}`}>
          <h3>{pub.title}</h3>
          </Link>
          <span>{moment(pub.createat).format('DD/MM/YYYY')}</span>
          <p>{pub.description}</p>

        </div>
      ))}

    </div>
  );
};

export default List;
