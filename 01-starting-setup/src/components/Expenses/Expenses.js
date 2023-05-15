import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import "./Expenses.css";
import { useState } from "react";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2022");

  const selectedYearHandler = (seletedYear) => {
    setfilteredYear(seletedYear);
    console.log(seletedYear);
  };

  const filteredExpenses = props.expenses.filter(expense => expense.date.getFullYear() === parseInt(filteredYear));
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onSelectedYear={selectedYearHandler}
        />
        {filteredExpenses.map((expense) => (
          <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          amount={expense.amount}
          description={expense.description}
        />
        ))}
      </Card>
    </div>
  );
}

export default Expenses;
