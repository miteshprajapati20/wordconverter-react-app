import React, { useState } from 'react'

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log('clicked button');
    const newText = text.toUpperCase()
    setText(newText)
  }
  const handleLoClick = () => {
    console.log('clicked button');
    const newText = text.toLowerCase()
    setText(newText)
  }
  const handleClear = () => {
    console.log('clicked button');
    const newText = text.replace(text, " ");
    setText(newText)
  }
  const handleCopy = () => {
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);

  }
  const handleExtraSpaces = () => {
    console.log('clicked button');
    const newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }
  const handleonChange = (event) => {
    console.log('onchange');
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  return (
    <>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="myBox" style={{background:props.mode==='light'?'dark':'light'}} onChange={handleonChange} value={text} cols="50" rows="10"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClear}>Clear text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy text</button>
        <button className="btn btn-primary" onClick={handleExtraSpaces }>Remove extra spaces</button>
      </div>
      <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
        <h1 >Your summry have</h1>
        <p>{text.split(" ").length-1} words and {text.length} Character</p>
        <p>{Math.round(0.008*text.split(" ").length*100)/100}minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>

  )
}
