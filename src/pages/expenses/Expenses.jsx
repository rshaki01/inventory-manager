import React, { useState, useContext } from 'react';
import './expenses.scss';
import Sidebar from '../../components/sidebar/Sidebar';
import { GlobalContext } from '../../context/GlobalState';
import ExpensesTable from '../../components/table/ExpensesTable';

const Expenses = () => {

  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState(0);
  const {addExpense} = useContext(GlobalContext);
  const [dateAdded, setDateAdded] = useState();

  const submit = (e) => {
    e.preventDefault();
    if (!expenseName) {
      alert('Please add an item name!')
      return;
    } else if (!dateAdded) {
      alert('Please add a purchase date!')
      return;
    }
    const id = Math.floor(Math.random() * 100000) + 1;
    let newExpense = {id, expenseName, expenseAmount, dateAdded};
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
                <p>Manage your expenses.</p>
            </div>
            <div className="bottom">
                <p>Add new expense</p>
                <form className="add-form" onSubmit={submit}>
                    <div className="form-control-check">
                        <label>Expense Name</label>
                        <input type="text" placeholder='' value={expenseName} onChange={(e) => setExpenseName(e.target.value)}/>
                    </div>
                    <div className="form-control-check">
                        <label>Expense Amount ($)</label>
                        <input type="number" value={expenseAmount} onChange={(e) => setExpenseAmount((parseInt(e.target.value)))}/>
                    </div>
                    <div className="form-control-check">
                        <label className="datelabel">Purchase Date</label>
                        <input className="dateinput" id="date" type="date" value={dateAdded} onChange={(e) => setDateAdded((e.target.value))}/>
                    </div>     
                    <div className="form-control-check">
                        <input type= "submit" value='+' className='btn btn-block'/>
                    </div>
                </form>
            </div>
            <div className="table"><ExpensesTable /></div>
        </div>
      </div>
    </div>
  )
}

export default Expenses
