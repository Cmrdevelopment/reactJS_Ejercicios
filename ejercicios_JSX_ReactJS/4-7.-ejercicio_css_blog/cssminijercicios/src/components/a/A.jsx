import "./A.css";

import React from "react";

const A = (props) => {
  return (
    <div className="parrafoBlog">
      Tras más de 18 años en el mundo de los mercados financieros, he comprobado
      que la mayoría de las personas comenten el mismo error: invierten en la
      bolsa sin conocimientos o con conocimientos básicos sin comprender como se
      mueve y porque el mercado. Aquellos que se dan cuenta del problema, leen
      libros, ven tutoriales y un sin fin de acciones «free» en la red, algunos
      hacen cursos de un fin de semana o empaquetados y ni así consiguen
      entender porque el mercado actúa o se mueve de una u otra manera.
      {props.texto}
    </div>
  );
};

export default A;
