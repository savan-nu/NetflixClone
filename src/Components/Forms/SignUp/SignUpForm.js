import React from "react";
import classes from "./SignUpForm.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function SingUpForm() {
  const nevigate = useNavigate();
  
  const [email, setEmail] = useState("");
  const [allEmail , setAllEmail] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
        const res = await fetch("https://dummyjson.com/users");
        const data = await res.json();
        console.log(data.users);
        const emails = data.users.map(user => user.email)
        setAllEmail(emails);
    }

    getUsers();
  },[]);
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    nevigate("/signup",{replace : true});
    
  };
  const handlechange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <form className={classes.singUpForm} onSubmit={handleSubmit}>
      <input
        placeholder="Email Address"
        type="text"
        onChange={handlechange}
        required
        title="Please Enter the email"
      />
      <button> Let's Start </button>
    </form>
  );
}
