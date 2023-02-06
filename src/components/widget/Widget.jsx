import React from 'react'
import "./widget.scss"
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';



const Widget = ({ type }) => {

  let data;

  switch (type) {
    case "user":
        data = {
            title: "USERS",
            isMoney: false,
            icon: <InsertChartOutlinedSharpIcon className="icon"/>
        };
        break;
    case "order":
        data = {
            title: "ORDERS",
            isMoney: false,
            icon: <StoreOutlinedIcon className="icon"/>
        };
        break;
    case "earnings":
        data = {
            title: "EARNINGS",
            isMoney: true,
            icon: <CreditCardOutlinedIcon className="icon"/>
        };
        break;
    case "balance":
        data = {
            title: "BALANCE",
            isMoney: true,
            icon: <AccountBalanceWalletOutlinedIcon className="icon"/>
        };
        break;
    default:
        break;
  }

  return (
    <div className="widget">
        <div className="left">
            <div className="title">{data.title}</div>
            <div className="counter"> {data.isMoney && "$"}999</div>
        </div>
        <div className="right">
            <div className="percentage">20%</div>
            {data.icon}
        </div>
    </div>
  )
}

export default Widget
