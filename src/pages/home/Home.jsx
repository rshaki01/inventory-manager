import React from 'react'
import './home.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import TestChart from '../../components/chart/TestChart'

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
        </div>
        <div className="listContainer">
            <div className="listTitle">Latest Sales</div>
            <div className="statsContainer">
              <div className="latestTransactionChart"><TestChart className="testChart"/></div>
              <div className="extraStats">
                  <Widget type="sales" />
                  <Widget type="expenses" />
                  <Widget type="inventory" />
              </div>
            </div>
        </div>
      </div>

      
    </div>

  )
}

export default Home
