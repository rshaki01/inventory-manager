import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import SalesTable from '../../components/table/SalesTable';
import './sales.scss'

const Sales = () => {


  return (
    <div className="sales">
      <Sidebar />
      <div className="salesContainer">
        <div className="top">
            <h1>Sales</h1>
            <p>Manage your sales.</p>
        </div>
        <div className="table">
          <SalesTable />
        </div>
      </div>
    </div>
  )
}

export default Sales
