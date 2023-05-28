import "./Image.css";

import React from "react";

const Image = (props) => {
  return (
    <div className="contenedorDeImagenesCss">
      <img
        src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1685270523/Prueba-foto-Carlos_kc9luy.jpg"
        alt="imagen del blog"
        {...props.image}
      />
    </div>
  );
};

export default Image;
