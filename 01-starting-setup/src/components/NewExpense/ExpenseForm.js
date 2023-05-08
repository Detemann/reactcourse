import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm() {
  //const [enteredTitle, setEnteredTitle] = useState("");     *Normalmente utilizado
  //const [enteredAmount, setEnteredAmount] = useState("");
  //const [enteredDate, setEnteredDate] = useState("");

  const [userInput, setUserInput] = useState({
    //*Jeito mais legal de fazer
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });

  const titleChangeHandler = (event) => {
    /*setUserInput({                           *Não recomendado
        ...userInput,
        enteredTitle: event.target.value       *Não recomendado
    });
    */

    //setEnteredTitle(event.target.value); *Normalmente utilizado
    setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
  };

  const amountChangeHadler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredAmount: event.target.value };
    });
  };

  const dateChangeHadler = (event) => {
    setUserInput((prevState) => {
      return { ...prevState, enteredDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            onChange={dateChangeHadler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
