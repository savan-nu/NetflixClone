import React, { useState ,useContext} from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import classes from "./SignIn.module.css";
import "./SignIn.module.css";
import Alert from "../../Alert/Alert";
import AuthContext from '../../../Context/AuthContext';

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isalert, setIsalert] = useState("");
  const {isLogin, setIsLogin} = useContext(AuthContext);
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
        setIsalert(false);
      }
      return isValid;
    });

    if (isValid) {
      setIsLogin(true);
      nevigate("/user/movie", { replace: true });
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
  const handleClick = () => {
    setIsalert(false);
  };
  return (
    <>
      {isalert && <Alert setIsalert={setIsalert} failed = "Sign Failed !!" failedMessage = "Please Register First" />}
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
