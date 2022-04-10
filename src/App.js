import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState(`light`);
  
  const toggleMode = () => {
    if(Mode === 'light'){
      setMode(`dark`);
      document.body.style.backgroundColor = '#282626';
    }
    else{
      setMode(`light`);
      document.body.style.backgroundColor = 'white';
    }
  }

  return (
    <>
      <Navbar
        toggleMode = {toggleMode}
        mode = {Mode}
        title="TextUtils"
        about="About"  
      />
      <div className="container">
        <TextForm heading="Enter text below"
        mode = {Mode} 
        />
      </div>
    </>
  );
}

export default App;
