import React from "react";
import classes from "./SignUpForm.module.css";
import { useEffect ,useContext } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from '../../../Context/AuthContext';
export default function SingUpForm() {
  const nevigate = useNavigate();
  const {setIsLogin} = useContext(AuthContext);
 
  useEffect(() => {
     
    setIsLogin(false);
    
  },[setIsLogin]);
  const handleSubmit = (event) => {
    
    event.preventDefault();
    
    nevigate("/signup",{replace : true});
    
  };
 
  return (
    <form className={classes.singUpForm} onSubmit={handleSubmit}>
      <input
        placeholder="Email Address"
        type="text"
        required
        title="Please Enter the email"
      />
      <button> Let's Start </button>
    </form>
  );
}
