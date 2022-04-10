import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const [btnText1, setbtnText1] = useState("Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "black") {
      setMyStyle({
        color: "white",
        backgroundColor: "black",
        border: "1px solid white",
      });
      setbtnText1("Light Mode");
    } 
    else {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setbtnText1("Dark Mode");
    }
  };

  return (
    <>
      <Navbar
        style={myStyle}
        title="TextUtils"
        about="About"
        btnText={btnText1}
        function={toggleStyle}
      />
      <div style={myStyle} className="container">
        <TextForm heading="Enter text below" />
      </div>
    </>
  );
}

export default App;
