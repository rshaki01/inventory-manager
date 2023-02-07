import React, { useContext } from 'react'
import "./widget.scss"
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import { GlobalContext } from '../../context/GlobalState';



const Widget = ({ type }) => {

  const { sales } = useContext(GlobalContext);

  let data;

  switch (type) {
    case "inventory":
        data = {
            title: "Inventory",
            isMoney: false,
            icon: <InsertChartOutlinedSharpIcon className="icon"/>,
            amount: 0
        };
        break;
    case "order":
        data = {
            title: "ORDERS",
            isMoney: false,
            icon: <StoreOutlinedIcon className="icon"/>,
            amount: 0
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
    case "balance":
        data = {
            title: "BALANCE",
            isMoney: true,
            icon: <AccountBalanceWalletOutlinedIcon className="icon"/>,
            amount: 0
        };
        break;
    default:
        break;
  }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter"> {data.isMoney && "$" && data.amount}</div>
        </div>
        <div className="right">
            <div className="percentage">20%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
