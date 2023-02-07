import React from 'react'
import "./sidebar.scss"
import { NavLink } from 'react-router-dom'
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
            <NavLink to="/" style={({ isActive }) => { return { color: isActive ? 'burlywood' : undefined}}}><span>Dashboard</span></NavLink>
          </li>
          <li>
            <StoreOutlinedIcon />
            <NavLink to="/inventory" style={({ isActive }) => { return { color: isActive ? 'burlywood' : undefined}}}><span>Inventory</span></NavLink>
          </li>
          <li>
            <CreditCardOutlinedIcon />
            <NavLink to="/sales" style={({ isActive }) => { return { color: isActive ? 'burlywood' : undefined}}}><span>Sales</span></NavLink>
          </li>
          <li>
            <LocalShippingOutlinedIcon />
            <NavLink to="/expenses" style={({ isActive }) => { return { color: isActive ? 'burlywood' : undefined}}}><span>Expenses</span></NavLink>
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
