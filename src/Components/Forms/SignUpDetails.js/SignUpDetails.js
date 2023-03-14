import React, { useState } from "react";
import classes from "./SignUpDetails.module.css";
import { useNavigate } from "react-router-dom";
export default function SignUpDetails() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [conformPassword, setconformPassword] = useState("");
  const [isalert, setIsalert] = useState("");
  const nevigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (password !== conformPassword) {
      alert("Password and Conform Password should match");
    } else {
      const data = { ...localStorage };

      let inital = Object.values(data).map((exp) => JSON.parse(exp));
      let isValid = true;
      inital.map((data) => {
        // console.log(data.email.email, email, "Savan");
        if (data.email.email === email) {
          isValid = false;
          setIsalert(true);
        }
        return isValid;
        
      });
      if(isValid){
        const userDetails = {
          id: new Date().getTime().toString(),
          email: { email },
          password: { password },
        };
        localStorage.setItem(userDetails.id, JSON.stringify(userDetails));
        setIsalert(false)
        nevigate("/");

      }
    }
  };
  const handlechangeEmail = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handlechangePassword = (event) => {
    setPassword(event.target.value);
  };
  const handlechangeConformPassword = (event) => {
    setconformPassword(event.target.value);
  };
  return (
    <div className={classes.overflowHandle}>
      {isalert && (
        <div className="alert alert-danger alert-dismissible alert-boxs">
          <button type="button" class="close" data-dismiss="alert">
            &times;
          </button>
          <strong>SignUp Faild !! </strong> Email is already register
        </div>
      )}
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
        className={classes.blur}
      />
      <div className={classes.bg}>
        <div className={classes.signUpDetails}>
          <h1>Sign Up</h1>
          <form className={classes.singUpDetailForm} onSubmit={handleSubmit}>
            <input
              placeholder="Email or Phone number"
              type="text"
              onChange={handlechangeEmail}
              required
            />
            <input
              placeholder="password"
              type="password"
              onChange={handlechangePassword}
              required
            />
            <input
              placeholder="conform Password"
              type="password"
              onChange={handlechangeConformPassword}
              required
            />
            <button> Sign In </button>
          </form>
        </div>
      </div>
    </div>
  );
}
