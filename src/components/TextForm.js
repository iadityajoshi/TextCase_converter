//How to change color of cursor when hover inside text area but not clicked yet? 

import React, {useState} from "react";

export default function TextForm(props) {
    const [text, setText] = useState('Enter your text here'); //array destructuring used here

    const handleUpClick= () => {
        // console.log('button was clicked');
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLoClick= () => {
      // console.log('button was clicked');
      let newText = text.toLowerCase();
      setText(newText);
  }

    const handleOnChange = (event) =>{
        // console.log('on change');
        setText(event.target.value);
    }

    const handleClear = () => {
      let newText = 'Enter text here';
      setText(newText);
    }
    let words = text.split(" ").length;

    return (
    <div className="container" style={{color: props.mode==='dark' ? 'white' : '#282626'}} >
      <h3>{props.heading}</h3>
      <div className="mb-3">
        <textarea  
        style={{backgroundColor: props.mode==='dark' ? 'grey' : 'white' , color: props.mode==='dark' ? 'white' : '#282626', caretColor: props.mode==='dark' ? 'red' : 'black' }} 
        className="form-control" id="myBox" value={text} onChange={handleOnChange} rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary" onClick={handleClear}>Reset</button>
      
      <div className="container my-3">
      <h5>Summary of text entered:</h5>
      <p>Text contains <b>{words} words</b> and <b>{text.length} characters</b> <br></br>
      Avg time to read: {Math.round(words * 0.008)} minutes
      </p>
      </div>
    </div>
  );
}
