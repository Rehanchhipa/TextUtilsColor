
import "./App.css";
import Navbar from "./component/Navbar"
import Textform from "./component/Textform"
import Alert from "./component/Alert"
import React, {useState} from 'react'
import About from "./component/About";
import { Routes, Route } from "react-router";



function App() {


  const [alert, setalert] = useState(null)

  const showalert = (type, message) => {
    setalert({
      typ: type,
      msg: message,
    })
   setTimeout(() => {
    setalert(null)
   }, 1500);
  }

  const [mode, setmode] = useState("light")

 const primary = () => {
  setmode("primary")
  document.body.style.backgroundColor = "#5292d5"
  setbg("#5292d5")
  setbghi("#0d6efd")
  setclr("white")
  setmodenav("dark")
  showalert("success", "Primary mode enable")
  setaboutclr({backgroundColor: "#0d6efd", color: "white", borderColor: "white"})
 
  setInterval(() => {
    document.title = "TextUtils-primary"
    setInterval(() => {
      document.title = "TextUtils-Home"
    }, 500);
  }, 1000);
 
 }  
 const dark = () => {
  setmode("dark")
  document.body.style.backgroundColor = "#343333"
  setbg("#343333")
  setbghi("#212529")
  setclr("white")
  setmodenav("dark")
  showalert("success", "dark mode enable")
  document.title = "TextUtils-dark"
  setaboutclr({backgroundColor: "#212529", color: "white", borderColor: "white"})
 
 }
 const warning = () => {
  setmode("warning")
  document.body.style.backgroundColor = "#e9b828"
  setbg("#ffd65c")
  setbghi("#ffc107")
  setclr("black")
  setmodenav("light")
  showalert("success", "warning mode enable")
  document.title = "TextUtils-warning"
  setaboutclr({backgroundColor: "#ffc107", color: "black", borderColor: "black"})
 
 }
 const light = () => {
  setmode("light")
  document.body.style.backgroundColor = "white"
  setbg("white")
  setbghi("#f8f9fa")
  setclr("black")
  setmodenav("light")
  showalert("success", "light mode enable")
  document.title = "TextUtils-Home"
  setaboutclr({backgroundColor: "#f8f9fa", color: "black", borderColor: "black"})
 
 }  

 const [bg, setbg] = useState("white")
 const [clr, setclr] = useState("black")
 const [bghi, setbghi] = useState("#f8f9fa")
 const [modenav, setmodenav] = useState("light")
 const [aboutclr, setaboutclr] = useState({backgroundColor: "white", color: "black", borderColor: "black"})


  return (
    <>
    <Navbar title= "TextUtils" about="About Us" mode={mode} clr={clr} modenav={modenav}
    primary={primary} dark={dark} warning={warning} light={light} />

    <Alert alert={alert}/>
    <Routes>
      <Route path='/' element={<Textform showalert={showalert} bg={bg} clr={clr} mode={mode} bghi={bghi}/>}/>
      <Route path='/about' element={<About aboutclr={aboutclr} clr={clr}/>} />

    </Routes>
    
    
    
    </>
  );
}

export default App;
