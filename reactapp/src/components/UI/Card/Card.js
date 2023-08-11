import { useState } from "react";

const Card = (props) => {
  
  const getSelectedValue = (option) => {
    if (props.answer === option) {
      return <></>
    }
  };

  return (
    <div>
      <div><h4>{props.question}</h4></div>
      <div>
        {props.options.map((option) => {
          return (
            <div key={props.key} onClick={() => getSelectedValue(option)}>
              <Button>{option}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;