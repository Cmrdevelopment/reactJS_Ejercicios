import "./Image.css";

import React from "react";

const Image = (props) => {
  return (
    <div className="contenedorDeImagenes">
      <img
        src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683025870/Games-Center-sin_fondo_f9z9bu.png"
        alt="Logo de circulos redondos y colores"
        {...props.image}
      />
    </div>
  );
};

export default Image;
