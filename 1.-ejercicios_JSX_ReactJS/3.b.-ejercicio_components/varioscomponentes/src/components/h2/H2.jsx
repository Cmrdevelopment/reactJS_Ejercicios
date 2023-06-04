import "./H2.css";

import React from "react";

const H2 = (props) => {
  return (
    <div>
      Crea un componente que retorne un "h2" con un texto recibido por props
      {props.subtitle}
    </div>
  );
};

export default H2;
