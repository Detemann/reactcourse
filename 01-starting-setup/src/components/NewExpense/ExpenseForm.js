import React, { useState } from "react";

import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");     //*Normalmente utilizado
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  /*const [userInput, setUserInput] = useState({
    //*Jeito mais legal de fazer
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  });
  */
  const titleChangeHandler = (event) => {
    /*setUserInput({                           *Não recomendado
        ...userInput,
        enteredTitle: event.target.value       *Não recomendado
    });
    */

    /*setUserInput((prevState) => {
      return { ...prevState, enteredTitle: event.target.value };
    });
    */
    setEnteredTitle(event.target.value);      //*Normalmente utilizado
  };

  const amountChangeHadler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHadler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  }

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={enteredTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHadler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2024-12-31"
            value={enteredDate}
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
