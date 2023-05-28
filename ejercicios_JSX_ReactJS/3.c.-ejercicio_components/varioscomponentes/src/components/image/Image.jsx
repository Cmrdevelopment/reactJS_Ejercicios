import "./Image.css";

import React from "react";

const Image = (props) => {
  return (
    <div className="containerImage">
      <img
        src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1683726544/lindo-pequeno-topo-caricatura-sentado_188253-4210-removebg-preview_ur8crq_1_quhoty.png"
        alt="Lindo Topo"
        {...props.image}
      />
    </div>
  );
};

export default Image;
