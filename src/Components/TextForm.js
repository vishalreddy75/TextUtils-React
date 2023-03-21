import React,{useState} from 'react'


export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  }
  const handleUpClick = () =>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert("Converted to Uppercase","success");
  }
  const handleLowClick = () =>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert("Converted to Lowercase","success");
  }
  const handleDownloadClick = () =>{
    //if(text.length > 0){
    const element = document.createElement("a");
    const file = new Blob([text], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "text.txt";
    document.body.appendChild(element);
    element.click();
    //}
    /*else{
      props.showalert("First enter some text to download","warning");
    }*/

  }
  const copyText = () => {
    navigator.clipboard.writeText(text);
    props.showalert("Copied to Clipboard","success");

  }
  const RemoveSpacesClick = () =>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showalert("Extra spaces are removed","success");
  }
  const clearText = () =>{
    setText('');
    props.showalert("Text has been Cleared","success");
  }
  const[text,setText] = useState("");

  return (
    <>
      <div className="container" style={{color: props.mode === "light"?"black":"white"}}>
          <h3 className = "mb-2">{props.heading}</h3>
          <textarea className="form-control" id="mytext" rows="8" style={{backgroundColor: props.mode === "light"?"white":"#121212",color:props.mode === "light"?"black":"white" }}value={text} onChange={handleOnChange}></textarea>
          <button disabled={text.length === 0} className="btn btn-primary  m-2" onClick={handleUpClick}>Convert to Uppercase</button>
          <button disabled={text.length === 0} className="btn btn-primary  m-2" onClick={handleLowClick}>Convert to Lowercase</button>
          <button disabled={text.length === 0} className="btn btn-primary  m-2" onClick={handleDownloadClick}>Download the text</button>
          <button disabled={text.length === 0} className="btn btn-primary  m-2" onClick={RemoveSpacesClick}>Remove the Extra Spaces</button>
          <button disabled={text.length === 0} className="btn btn-primary  m-2" onClick={clearText}>Clear the text</button>
          <button disabled={text.length === 0} className="btn btn-primary  m-2" onClick={copyText}>Copy the Text</button>
      </div>
      <div className="container" style={{color: props.mode === "light"?"black":"white"}}>
        <h2>Text Summary</h2>
        <p><b>{(text.split(/\s+/).filter((element) => {return element.length !== 0})).length}</b> words and <b>{text.length}</b> characters</p>
        <p><b>{(text.split(/\s+/).filter((element) => {return element.length !== 0})).length * 0.008}</b> minutes read</p>
        <h2>Preview</h2>
        <p><em>{text.length > 0?text:"Nothing to Preview"}</em></p>
      </div>
    </>
      

  )
}

