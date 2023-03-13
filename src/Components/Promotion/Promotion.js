import React from "react";
import classes from "./Promotion.module.css";
export default function Promotion({title,subtitle,url ,isreverse = false}) {
  return (
    <div className={classes.box} style = {{flexDirection : isreverse ? "row-reverse" : "row"}}>
      <div className={classes.text} ><h1>{title}</h1> <h2>{subtitle}</h2></div>
      <div className={classes.image}>
        {" "}
        <img
          src={url}
          alt=""
        />{" "}
      </div>
     
     
    </div>
  );
}
