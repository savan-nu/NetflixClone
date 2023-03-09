import React from "react";
import classes from "./Nav.module.css";

export default function Nav() {
  return (
    <div className={classes.nav}>
      <img
        className={classes.logo}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-V9ycLxcoikE3W2u6UI3ZCjuEbnVuxFud1AGrpFqL&s"
        alt="Netflix Logo"
      />
      <img
        className={classes.user}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7HpxXmR6W_RGmUThfLgu5XKtr0gKrGSjw4eiGuelffjwI8KS9rayzUkoRxj5vLSG7lzHOGDuj4Kw&usqp=CAU&ec=48600112"
        alt="userPhoto"
      />
    </div>
  );
}
