import React from 'react'
import "./sidebar.scss"
import GridViewIcon from '@mui/icons-material/GridView';
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined';
import CreditCardOutlinedIcon from '@mui/icons-material/CreditCardOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import InsertChartOutlinedSharpIcon from '@mui/icons-material/InsertChartOutlinedSharp';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <span className="logo">Rafat's admin</span>
      </div>
      <div className="center">
        <ul>
          <li>
            <GridViewIcon />
            <span>Dashboard</span>
          </li>
          <li>
            <StoreOutlinedIcon />
            <span>Inventory</span>
          </li>
          <li>
            <CreditCardOutlinedIcon />
            <span>Sales</span>
          </li>
          <li>
            <LocalShippingOutlinedIcon />
            <span>Expenses</span>
          </li>
          <li>
            <InsertChartOutlinedSharpIcon />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNoneOutlinedIcon />
            <span>Notifications</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
