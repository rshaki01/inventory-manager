import React, { useContext } from 'react'
import "./widget.scss"
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { GlobalContext } from '../../context/GlobalState';



const Widget = ({ type }) => {

  const { sales, inventory, expenses } = useContext(GlobalContext);

  let data;

  switch (type) {
    case "inventory":
        data = {
            title: "Inventory",
            isMoney: false,
            icon: <InsertChartOutlinedSharpIcon className="icon"/>,
            amount: inventory.reduce((accumulator, currentValue) => accumulator + 1,0)
              
        };
        break;
    case "net-profit":
        data = {
            title: "Net Profit",
            isMoney: true,
            icon: <StoreOutlinedIcon className="icon"/>,
            amount: sales.reduce((acc, sale) => acc + (sale.listingPrice - sale.purchasePrice), 0) - expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
        };
        break;
    case "sales":
        data = {
            title: "Sales",
            isMoney: true,
            icon: <CreditCardOutlinedIcon className="icon"/>,
            amount: sales.reduce((acc, sale) => acc + (sale.listingPrice - sale.purchasePrice), 0)
        };
        break;
    case "expenses":
        data = {
            title: "Total Expenses",
            isMoney: true,
            icon: <AccountBalanceWalletOutlinedIcon className="icon"/>,
            amount: expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
        };
        break;
    default:
        break;
  }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter"> {data.isMoney ? "$" + data.amount.toFixed(2) : data.amount}</div>
            {/* {data.isMoney && "$"} {data.amount.toFixed(2)} */}
        </div>
        <div className="right">
            <div className="percentage">20%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
