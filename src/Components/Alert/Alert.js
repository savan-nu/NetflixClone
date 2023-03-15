import React from "react";
import classes from "./Alert.module.css"
export default function Alert({ setIsalert,failed , failedMessage }) {
  const handleClick = () => {
    console.log("Click");
    setIsalert(false);
  };
  return (
    <div className={`${classes.alert} ${classes.alertDanger} ${classes.alertDismissible} ${classes.alertBoxs}`}>
      <button className={classes.close} onClick={handleClick}>
        &times;
      </button>
      <strong>{failed} </strong> {failedMessage}
    </div>
  );
}

