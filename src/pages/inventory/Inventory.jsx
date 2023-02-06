import React from 'react'
import './inventory.scss'
import Sidebar from '../../components/sidebar/Sidebar'


const Inventory = () => {
  return (
    <div className="inventory">
      <Sidebar />
      <div className="inventoryContainer">
        <div className="top">
            <h1>Add new item</h1>
        </div>
        <div className="bottom">
            <form className="add-form">
                <div className="form-control-check">
                    <label>Item Name</label>
                    <input type="text" placeholder=''/>
                </div>
                <div className="form-control-check">
                    <label>Item Price</label>
                    <input type="number" />
                </div>
                <div className="form-control-check">
                    <label>Listing Price</label>
                    <input type="number"/>
                </div>       
                <input type= "submit" value='Add Item' className='btn btn-block'/>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Inventory
