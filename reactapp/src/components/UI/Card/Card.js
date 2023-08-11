import { useState } from "react";

const Card = (props) => {
  
  const getSelectedValue = (option) => {
    if (props.answer === option) {
      return <></>
    }
  };

  return (
    <div>
      <div key={props.key}><h4>{props.question}</h4></div>
        <div onClick={() => getSelectedValue(props.options.option1)}>
              <Button>{props.options.option1}</Button>
            </div>
          
      </div>
  );
};

export default Card;