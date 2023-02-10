import React from 'react'
import Sidebar from '../../components/sidebar/Sidebar';
import SalesTable from '../../components/table/SalesTable';
import InventoryForm from '../../components/form/InventoryForm';
import './sales.scss'

const Sales = () => {


  return (
    <div className="sales">
      <Sidebar />
      <div className="salesContainer">
        <div className="top">
            {/* <h1>Sales</h1> */}
            <InventoryForm />
        </div>
        <div className="table">
          <SalesTable />
        </div>
      </div>
    </div>
  )
}

export default Sales
