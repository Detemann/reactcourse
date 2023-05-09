import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    const expenseSaveDataHadler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    return <div className="new-expense">
        <ExpenseForm onSaveData={expenseSaveDataHadler}/>
    </div>
}

export default NewExpense;