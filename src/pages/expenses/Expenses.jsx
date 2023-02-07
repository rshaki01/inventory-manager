import React, { useState, useContext } from 'react';
import './expenses.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { GlobalContext } from '../../context/GlobalState';
import ExpensesTable from '../../components/table/ExpensesTable';

const Expenses = () => {

  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const {addExpense} = useContext(GlobalContext);


  const submit = (e) => {
    e.preventDefault();
    const id = Math.floor(Math.random() * 100000) + 1;
    let newExpense = {id, expenseName, expenseAmount};
    addExpense(newExpense);
    setExpenseName('');
    setExpenseAmount('');
  }

  return (
    <div>
      <div className="expenses">
      <Sidebar />
        <div className="expensesContainer">
            <div className="top">
                <h1>Expenses</h1>
            </div>
            <div className="bottom">
                <p>Add new expense</p>
                <form className="add-form" onSubmit={submit}>
                    <div className="form-control-check">
                        <label>Expense Name</label>
                        <input type="text" placeholder='' value={expenseName} onChange={(e) => setExpenseName(e.target.value)}/>
                    </div>
                    <div className="form-control-check">
                        <label>Expense Amount</label>
                        <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount((parseInt(e.target.value)))}/>
                    </div>     
                    <input type= "submit" value='Add Expense' className='btn btn-block'/>
                </form>
            </div>
            <div className="table"><ExpensesTable /></div>
        </div>
      </div>
    </div>
  )
}

export default Expenses
