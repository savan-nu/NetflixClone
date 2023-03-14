import React from "react";
import { useState } from "react";
import { AiOutlinePlus, AiOutlineClose } from "react-icons/ai";
import classes from "./Quetion.module.css";
import { CSSTransition } from "react-transition-group";

export default function Question({
  tittle,
  description,
  subdesc = "",
  qkey,
  isOpen,
  onClick,
}) {
  const [isViewed, setisViewed] = useState(false);
  console.log(isOpen);
  // const handleClick = () => {
  //    onClick(qkey) ;
  //    setisViewed(isOpen)
  // };
  // const handleClick = () =>{
  //   setisViewed(prevState => !prevState)
  // }
  return (
    <div>
      <div
        className={classes.que}
        onClick={() => {
          onClick(qkey);
        }}
      >
        <div className={classes.question}>
          <h1 style={{ fontWeight: "normal" }}>{tittle}</h1>{" "}
          <button>
            {!isOpen ? (
              <AiOutlinePlus
                size={40}
                style={{ backgroundColor: "rgb(48,48,48)", color: "white" }}
              ></AiOutlinePlus>
            ) : (
              <AiOutlineClose
                size={40}
                style={{
                  backgroundColor: "rgb(48,48,48)",
                  color: "white",
                  border: "0",
                }}
              />
            )}
          </button>
        </div>
      </div>
      <CSSTransition in={isOpen} timeout={400} unmountOnExit>
        <>
          <hr style={{ width: "60%" }} />
          <div className={classes.desc}>
            <h2>{description}</h2>
            {subdesc !== "" ? (
              <>
                <br /> <h2>{subdesc}</h2>
              </>
            ) : (
              <></>
            )}
          </div>
        </>
      </CSSTransition>
    </div>
  );
}
