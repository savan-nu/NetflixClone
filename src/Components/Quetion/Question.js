import React from "react";
import { useState } from "react";
import { AiOutlinePlus , AiOutlineClose} from "react-icons/ai";
import classes from "./Quetion.module.css";
export default function Question({tittle , description,subdesc = ""}) {
  const [isViewed, setisViewed] = useState(false);

  const handleClick = () => {
    console.log("hello");
    setisViewed(prevState => !prevState);
  };
  
  return (
    <div>
      <div className={classes.que} onClick={handleClick}>
        <div className={classes.question}>
          <h1 style={{fontWeight : "normal"}}>{tittle}</h1>{" "}
          <button>

            {!isViewed ? <AiOutlinePlus
              size={40}
              style={{ backgroundColor: "rgb(48,48,48)", color: "white" }}
            ></AiOutlinePlus> : <AiOutlineClose size={40}
              style={{ backgroundColor: "rgb(48,48,48)", color: "white" ,border : "0" }}/>}
          </button>
        </div>
      </div>
      {isViewed && ( 
        <>
        <hr style={{width : "60%"}} />
        <div  className = {classes.desc}>
          <h2>{description}</h2>
          { subdesc !== "" ? <><br/> <h2>{subdesc}</h2></>  : <></>} 
          
        </div>
        </>
      )}
    </div>
  );
}
