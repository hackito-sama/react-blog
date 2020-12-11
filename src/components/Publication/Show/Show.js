import React, { useContext } from "react";
import { EditingContext } from "../../../Containers/Detail/Detail";

import Comments from "../../../Containers/Comments/Comments";

const Show = () => {
  const { isEdit, setIsEdit, pub } = useContext(EditingContext);

  const flagEdit = () => {
    if (isEdit === true) {
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  };

  return (
    <div>
      <div className="header">
        <h3>{pub.title}</h3>
        <span>{pub.id}</span> <br />
        <span>{pub.createat}</span>
        <button onClick={flagEdit}>Editar Publicación</button>
      </div>
      <div>
        <p>{pub.description}</p>
      </div>
      <div>
        <Comments />
      </div>
    </div>
  );
};
export default Show;
