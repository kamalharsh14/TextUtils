import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      <Navbar
      title = "TextUtils"
      link1 = "Home"
      link2 = "About"
      link3 = "Github"
      />
      <TextBox
      heading = "Enter Text"
      />
    </>
  );
}

export default App;
