import React from "react";
import "./App.css";
import Header from "./Components/Header";
import Display from "./Components/Display";
import backgroundImage from "./Components/images/stadium.jpg";

function App() {
  const inlineStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    <div style={inlineStyles}>
      <Header />
      <Display />
    </div>
  );
}

export default App;
