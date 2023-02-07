import React, {useContext, useState} from 'react'
import './inventory.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import InventoryTable from '../../components/table/InventoryTable'
import { GlobalContext } from '../../context/GlobalState'


const Inventory = () => {


  const [name, setName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [listingPrice, setListingPrice] = useState(0);

  const {addItem} = useContext(GlobalContext)

  let submit = (e) => {
    e.preventDefault();
    // randomize ID
    const id = Math.floor(Math.random() * 100000) + 1;
    // create new item using state
    let newItem = {id, name, purchasePrice, listingPrice};
    addItem(newItem);
    setName('');
    setPurchasePrice(0);
    setListingPrice(0);
  }
    

  return (
    <div className="inventory">
      <Sidebar />
      <div className="inventoryContainer">
        <div className="top">
            <h1>Inventory</h1>
        </div>
        <div className="bottom">
            <p>Add new item</p>
            <form className="add-form" onSubmit={submit}>
                <div className="form-control-check">
                    <label>Item Name</label>
                    <input type="text" placeholder='' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-control-check">
                    <label>Purchase Price</label>
                    <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice((parseInt(e.target.value)))}/>
                </div>
                <div className="form-control-check">
                    <label>Listing Price</label>
                    <input type="number" value={listingPrice} onChange={(e) => setListingPrice((parseInt(e.target.value)))}/>
                </div>       
                <input type= "submit" value='Add Item' className='btn btn-block'/>
            </form>
        </div>
        <div className="table">
         <InventoryTable />
      </div>
      </div>
    </div>
  )
}

export default Inventory
