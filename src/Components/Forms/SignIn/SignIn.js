import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import ReactDOM from "react-dom";
import "./SignIn.module.css";
import "./alertbox.css"

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isalert,setIsalert] = useState("");
  const nevigate = useNavigate();

  const handleSubmit = (event) => {
    // console.log(event);

    event.preventDefault();
    const data = { ...localStorage };

    let inital = Object.values(data).map((exp) => JSON.parse(exp));

    let isValid = false;
    inital.map((data) => {
      // console.log(data.email.email, email, "Savan");
      if (data.email.email === email && data.password.password === password) {
        isValid = true;
        setIsalert(false)
      }
      return isValid;
      
    });

    if (isValid) {
      nevigate("/movie" , {replace : true});
    } else {
      
       setIsalert(true);
       
    }
  };
  const handlechangeEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlechangePassword = (event) => {
    setPassword(event.target.value);
  };
  return (
    <>
    {isalert && <div className="alert alert-danger alert-dismissible alert-boxs">
        <button type="button" class="close" data-dismiss="alert">
          &times;
        </button>
        <strong>SignIn Faild !! </strong> Please SignUp First
     </div>}
    <div className={`${classes.highlights} ${classes.bg}`}>
      
      <div className={classes.header}></div>
      <img
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5523db5a-e2b2-497f-a88b-61f175c3dbad/eb90437e-a876-47c3-a138-ca27772a4d2a/IN-en-20230306-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      <div className={classes.textOverlay}>
        <h1>Sign In</h1>
        <form className={classes.singInForm} onSubmit={handleSubmit}>
          <input
            placeholder="Email "
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
          <button> Sign In </button>
        </form>
        <div>
          <input type="checkbox" className={classes.rememberMe} />
          <label for="vehicle1">Remember me</label>
          <Link
            to="/"
            className={`${classes.removeDecoration} ${classes.help}`}
          >
            Need Help
          </Link>
        </div>
        <div className={classes.singinFooter}>
          <p>
            New to Netflix ?{" "}
            <Link
              to="/"
              className={classes.removeDecoration}
              style={{ color: "white" }}
            >
              Sign Up Now
            </Link>
          </p>
        </div>
        <p style={{ color: "#615b5b", marginLeft: "11%" }}>
          This Page is protected by Google reCAPTCHA to<br></br> ensure you're
          not a bot.{" "}
        </p>
      </div>
    </div>
    </>
  );
}
