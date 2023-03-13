import React, { useState } from "react";
import classes from "./FAQ.module.css";
import Question from "./Question";
import { quetions } from "../../Data/constant";

export default function FAQ() {
  

  return (
    <div>
      <div className={classes.heading}>
        <h1>Frequently Asked Questions</h1>
      </div>

      {quetions.map((quetion, index) => (
         <Question
          tittle={quetion.tittle}
          description={quetion.description}
          subdesc={quetion.subdesc}
          key={index}
          isOpen={index}
        />
      ))}
    </div>
  );
}
