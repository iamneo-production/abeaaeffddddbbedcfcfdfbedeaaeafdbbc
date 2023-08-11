import { useState } from "react";
import Button from "../Button/Button";
import styles from "./Card.module.css";

const Card = (props) => {
  
  const getSelectedValue = (option) => {
    if (props.value.correctAnswer === option) {
      props.setCountCorrectAnswers(props.countCorrectAnswers + 1);
    }
  };

  return (
    <div>
      <div><h4>{props.value.Question}</h4></div>
      <div className={styles.options}>
        {props.value.options.map((option, index) => {
          return (
            <div key={index} onClick={() => getSelectedValue(option)}>
              <Button>{option}</Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;