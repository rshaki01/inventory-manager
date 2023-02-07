import React, { useContext } from 'react';
import { GlobalContext } from '../../context/GlobalState';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const ExpensesTable = () => {


  const { expenses, deleteExpense } = useContext(GlobalContext);

  return (
    <div>
      <TableContainer component={Paper} elevation={0}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>Expense</TableCell>
                <TableCell align="right">Expense Amount&nbsp;($)</TableCell>
                <TableCell align="right">Action</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {expenses.map((expense) => (
                <TableRow
                key={expense.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row">
                    {expense.expenseName}
                </TableCell>
                <TableCell align="right">{expense.expenseAmount}</TableCell>
                <TableCell align="right" className="actionButtons"><button onClick={() => deleteExpense(expense)}>X</button></TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default ExpensesTable
