import React from "react";
import classes from "./SignUpForm.module.css";
import { useState, useEffect ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../../Context/AuthContext';
export default function SingUpForm() {
  const nevigate = useNavigate();
  const {isLogin, setIsLogin} = useContext(AuthContext);
  const [email, setEmail] = useState("");
  useEffect(() => {
     
    setIsLogin(false);
    
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
