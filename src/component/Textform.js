import React, {useState} from "react";

export default function Textform(props) {

    const [text, settext] = useState("")

    const changeText = (event) => {
        settext(event.target.value)
    }

    const handleUpperCase = () => {
        settext(text.toUpperCase())
        props.showalert("success", "Convert to uppercase")
    }

    const handleLowerCase = () => {
        settext(text.toLowerCase())
        props.showalert("success", "Convert to lower case")
    }

    const handleClearText = () => {
        settext("")
        props.showalert("success", "Clear text")
    }

    const handleCopyText = () => {
        let newtext = document.getElementById("textBox")
        newtext.select()
        navigator.clipboard.writeText(newtext.value)
        document.getSelection().removeAllRanges()
        props.showalert("success", "Copy Text")
    }

    const handleRemoveSpace = () => {
        let newtext = text.split(/[ ]+/)
        settext(newtext.join(" "))
        props.showalert("success", "Remove extra spaces")
    }

  return (
    <>
      <div className="container mb-3 my-3" style={{color: props.clr}}>
        <h1>Enter the text to analyze below</h1>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={text}
          onChange={changeText}
          style={{backgroundColor: props.bghi,
                  color: props.clr, border: `2px solid ${props.clr}`}}

        ></textarea>
      </div>
      <div className="container" style={{color: props.clr}}>
        <button disabled={text.length === 0} className={`btn btn-${props.mode} my-2 me-2`} style={{border: `1px solid ${props.clr}`}}
         onClick={handleUpperCase}>Convert To Upper Case</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode} my-2 me-2`} style={{border: `1px solid ${props.clr}`}}
         onClick={handleLowerCase}>Convert To Lower Case</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode} my-2 me-2`} style={{border: `1px solid ${props.clr}`}}
         onClick={handleClearText}>Clear Clipboard</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode} my-2 me-2`} style={{border: `1px solid ${props.clr}`}}
         onClick={handleCopyText}>Copy Text</button>
        <button disabled={text.length === 0} className={`btn btn-${props.mode} my-2 me-2`} style={{border: `1px solid ${props.clr}`}}
         onClick={handleRemoveSpace}>Remove Exter Space</button>
      </div>
      <div className="container" style={{color: props.clr}}>
        <p><b>{text.split(/[ ]+/).filter((text) => text).length}</b> Word and <b>{text.length}</b> Character</p>
        <p><b>{0.008 * text.split(/[ ]+/).filter((text) => text).length }</b> Minutes Read</p>
        <h3>preview</h3>
        <h6>{text.length >0 ? text : "Enter somethings in the textbox above to preview it here"}</h6>
      </div>
    </>
  );
}
