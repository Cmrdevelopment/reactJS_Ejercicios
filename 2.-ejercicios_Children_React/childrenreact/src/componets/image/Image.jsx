import "./Image.css";

const Image = (props) => {
  return (
    <div className="containerimg">
      <img
        src="https://res.cloudinary.com/dwdznuzaz/image/upload/v1685725002/NASA_logo.svg_c16krg.png"
        alt="imagen de la nasa"
        {...props.image}
      />
    </div>
  );
};

export default Image;
