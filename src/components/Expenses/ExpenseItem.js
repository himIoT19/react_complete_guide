import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  // array destructuring
  const [title, setTitle] = useState(props.title); // 'useState' REACT Hook(can't be called at other places), return exactly 2 variables
  /*
  1. title(first returned value): Is the current state value
  2. setTitle(): function for updating the above current state value(title)
  */

  // Attached to event-listener => "onClick"
  const clickHandler = () => {
    setTitle("Updated!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>Changed Title</button>
    </Card>
  );
};

export default ExpenseItem;
