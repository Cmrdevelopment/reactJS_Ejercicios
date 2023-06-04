import "./App.css";
import Footer from "./componets/footer/Footer";
import Header from "./componets/header/Header";
import Image from "./componets/image/Image";
import Paragraph from "./componets/paragraph/Paragraph";
import Subtitle from "./componets/subtitle/subtitle";
import Title from "./componets/title/Title";

const App = () => {
  return (
    <>
      <header>{<Title>title</Title>}</header>
      <main>
        {<Subtitle>subtitle</Subtitle>} {<Image>image</Image>}
      </main>
      <footer>{<Paragraph>paragraph</Paragraph>}</footer>
    </>
  );
};

export default App;

{
  /* <Image>image</Image>
<Title>title</Title>
<Subtitle>subtitle</Subtitle>
<Paragraph>paragraph</Paragraph> */
}
