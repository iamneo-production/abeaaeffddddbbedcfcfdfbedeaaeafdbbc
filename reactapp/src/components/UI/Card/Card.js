import { useState } from "react";

const Card = (props) => {
  
  const getSelectedValue = (option) => {
    if (props.answer === option) {
      return option
    }
    return option
  };

  return (
    <div>
      <div key={props.key}><h4>{props.question}</h4></div>
            <div onClick={() => getSelectedValue(props.options.option1)}>
              <button>{props.options.option1}</button>
            </div>
            <div onClick={() => getSelectedValue(props.options.option2)}>
              <button>{props.options.option2}</button>
            </div>
            <div onClick={() => getSelectedValue(props.options.option3)}>
              <button>{props.options.option3}</button>
            </div>
            <div onClick={() => getSelectedValue(props.options.option4)}>
              <button>{props.options.option4}</button>
            </div>
          
      </div>
  );
};

export default Card;