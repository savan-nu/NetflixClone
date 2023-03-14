import React, { useState , useEffect } from "react";
import classes from "./FAQ.module.css";
import Question from "./Question";
import { quetions } from "../../Data/quetion";
import cloneDeep from 'lodash/cloneDeep';
const que = cloneDeep(quetions)
export default function FAQ() {
  const [newQuetion, setnewQuetion] = useState();
  const [renderQuetion,setRenderQuetion] = useState(que);
  const quetionKeys = quetions.map((quetion) => quetion.key);

  console.log(quetions);
  const reset = () => {
    const quet = renderQuetion.map(quetion => {
      if(quetion.key === newQuetion){
        console.log("inside");
        quetion.render = !quetion.render;
      }
      else{
        quetion.render = false;
      }
      return quetion
    });
    console.log(quet);
    setRenderQuetion(quet);
  }
  const handleClick = (qkey) => {
    console.log("helo"); 
    // console.log(qkey);
    // const qke = cloneDeep(qkey)
    setnewQuetion (qkey);
   
    setRenderQuetion(que);
    

    // const quet = renderQuetion.map(quetion => {
    //   if(quetion.key === newQuetion){
    //     console.log("inside");
    //     quetion.render = !quetion.render;
    //   }
    //   else{
    //     quetion.render = false;
    //   }
    //   return quetion
    // });
    // console.log(quet);
    // setRenderQuetion(quet);
    reset();
  }
  useEffect(()=>{
    console.log(newQuetion);
    reset()
  }, [newQuetion])
  // console.log(quetionKeys);
  return (
    <div>
      <div className={classes.heading}>
        <h1>Frequently Asked Questions</h1>
      </div>
      
      {renderQuetion.map((quetion, index) => (
         <Question
          tittle={quetion.tittle}
          description={quetion.description}
          subdesc={quetion.subdesc}
          qkey={quetion.key}
          onClick = {handleClick}
          isOpen={quetion.render}
        />
      ))}
    </div>
  );
}
