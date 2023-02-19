import React, { useContext } from 'react'
import "./widget.scss"
import { GlobalContext } from '../../context/GlobalState';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip from '@mui/material/Tooltip';



const Widget = ({ type }) => {

  const { sales, inventory, expenses } = useContext(GlobalContext);

  let data;

  switch (type) {
    case "inventory":
        data = {
            title: "Inventory Value",
            description: "Total value (purchase price) of all the items in your inventory tab.",
            isMoney: true,
            amount: (inventory.reduce((acc, item) => acc + item.purchasePrice, 0))
              
        };
        break;
    case "num-inventory":
        data = {
            title: "Total Items",
            description: "Total number of items in your inventory tab.",
            isMoney: false,
             amount: inventory.reduce((accumulator, currentValue) => accumulator + 1,0)
                  
        };
        break;
    case "net-profit":
        data = {
            title: "Net Profit",
            description: "Total sales after subtracting COGS and expenses.",
            isMoney: true,
            amount: sales.reduce((acc, sale) => acc + (sale.listingPrice - sale.purchasePrice) * sale.quantity, 0) - expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
        };
        break;
    case "sales":
        data = {
            title: "Gross Sales",
            description: "Total amount of sales before subtracting COGS and expenses.",
            isMoney: true,
            amount: (sales.reduce((acc, sale) => acc + (sale.listingPrice - sale.purchasePrice) * sale.quantity, 0)) 
        };
        break;
    case "expenses":
        data = {
            title: "Total Expenses",
            description: "Total spending on everything in your expense tab.",
            isMoney: true,
            amount: expenses.reduce((acc, expense) => acc + expense.expenseAmount, 0)
        };
        break;
    case "num-sales":
        data = {
            title: "Total Sales",
            description: "Total number of sales in your sales tab.",
            isMoney: false,
            amount: sales.reduce((accumulator, currentValue) => accumulator + 1,0)
        };
        break;
    case "num-expenses":
        data = {
            title: "Total Expenses",
            description: "Total number of sales in your sales tab.",
            isMoney: false,
            amount: expenses.reduce((accumulator, currentValue) => accumulator + 1,0)
        };
        break;
    default:
        break;
  }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            {/* <p>{data.description}</p> */}
            <div className="counter"> {data.isMoney ? "$" + data.amount.toFixed(2) : data.amount}</div>
            {/* {data.isMoney && "$"} {data.amount.toFixed(2)} */}
        </div>
        <div className="right-icon">
            <Tooltip title={data.description}>
                <InfoIcon fontSize='small'/>
            </Tooltip>
        </div>
    </div>
  )
}

export default Widget
