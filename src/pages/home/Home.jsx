import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'

const Home = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgetContainer">
        <Widget type="net-profit" />
        <Widget type="sales" />
        <Widget type="expenses" />
        <Widget type="inventory" />
        <Widget type="num-sales" />
        </div>
        <div className="listContainer">
            <div className="listTitle">Latest Transactions</div>
        </div>
      </div>

      
    </div>

  )
}

export default Home
