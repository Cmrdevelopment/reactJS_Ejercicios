import "./Paragraph.css";

const Paragraph = (props) => {
  return (
    <div>
      Desgranando la esencia del mercado, un libro escrito, después de más de 17
      años en este mundo, con mucha pasión durante más de año y medio, con más
      de 260 páginas y más de 100 gráficos para introducirnos en la comprensión
      de como se mueven los mercados incluyendo la experiencia personal sobre
      como actúan los «gurús».{props.paragraph}
    </div>
  );
};

export default Paragraph;
