import React from "react";
import classes from "./SingUpForm.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function SingUpForm() {
    const nevigate = useNavigate();
const [email, setEmail] = useState("");
  const handleSubmit = (event) => {
    // console.log(event);
    event.preventDefault();
    
    // console.log(event);
    nevigate("/movie");
  };
  const handlechange = (event) => {
    
        setEmail(event.target.value)
  }
  return (
    <form className={classes.singUpForm} onSubmit={handleSubmit}>
      <input placeholder="Email Address" type="text" onChange={handlechange} required title="Please Enter the email"/>
      <button> Let's Start </button>
    </form>
  );
}
