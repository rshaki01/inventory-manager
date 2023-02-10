import React, {useContext, useState} from 'react'
import './inventory.scss'
import Sidebar from '../../components/sidebar/Sidebar'
import InventoryTable from '../../components/table/InventoryTable'
import { GlobalContext } from '../../context/GlobalState'




const Inventory = () => {


  let currDate = new Date();
  currDate = currDate.toISOString().split('T')[0];
  const [name, setName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState(0);
  const [listingPrice, setListingPrice] = useState(0);
  const [dateAdded, setDateAdded] = useState(currDate);
  const [quantity, setQuantity] = useState(1);

  const {addItem} = useContext(GlobalContext)



  let submit = (e) => {
    e.preventDefault();
    if (!name) {
      alert('Please add an item name!')
      return;
    } else if (purchasePrice < 0) {
      alert('Please add a purchase price greater or equal to 0!')
      return;
    } else if (listingPrice < 0) {
      alert('Please add a listing price greater or equal to 0!')
    } else if (!dateAdded) {
      alert('Please add a purchase date!')
      return;
    } else if (quantity <= 0 ) {
      alert('Please add a quantity greater than 0!')
    }
    // randomize ID
    const id = Math.floor(Math.random() * 100000) + 1;
    // create new item using state
    let newItem = {id, name, purchasePrice, listingPrice, dateAdded, quantity,};
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
            <p>Manage your inventory of products.</p>
        </div>
        <div className="bottom">
            <p>Add new item</p>
            {/* Inventory Add Form */}
            <form className="add-form" onSubmit={submit}>
                <div className="form-control-check">
                    <label>Item Name</label>
                    <input type="text" placeholder='' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="form-control-check">
                    <label>Purchase Price ($)</label>
                    <input type="number" value={purchasePrice} onChange={(e) => setPurchasePrice((parseInt(e.target.value)))}/>
                </div>
                <div className="form-control-check">
                    <label>Listing Price ($)</label>
                    <input type="number" value={listingPrice} onChange={(e) => setListingPrice((parseInt(e.target.value)))}/>
                </div>
                <div className="form-control-check">
                    <label className="datelabel">Purchase Date</label>
                    <input className="dateinput" id="date" type="date" value={dateAdded} onChange={(e) => setDateAdded((e.target.value))}/>
                </div>
                <div className="form-control-check">
                    <label>Quantity</label>
                    <input type="number" value={quantity} onChange={(e) => setQuantity((parseInt(e.target.value)))}/>
                </div>
                <div className="form-control-check">
                  <input type= "submit" value='+' className='btn btn-block'/>
                </div>
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
