import React from "react";
import './Navbar.css'

export default function Alert(props) {

  let capatilize = (word) => {
    // let word1 = word.toUpperCase()
    // console.log(word1)
    // return word1.charAt(0) + word1.toLowerCase().slice(1)
   return word.charAt(0).toUpperCase() + word.slice(1) 
  }

  return (
      props.alert && <div
        className={`alert alert-${props.alert.typ} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capatilize(props.alert.typ)} :</strong> {props.alert.msg}
      </div>
  
  );
}
