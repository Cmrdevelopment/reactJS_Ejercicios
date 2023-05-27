import "./H1.css";

import React from "react";

const H1 = (props) => {
  return (
    <div>
      Crea un componente Title que retorne un "h1" con un texto recibido por
      props {props.title}
    </div>
  );
};

export default H1;
