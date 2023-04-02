import React from 'react';
import { GlobalContext } from '@/context/GlobalState';
import { useContext, useState } from 'react';
import AddForm from '../components/AddForm';


const inventory = () => {

  const { inventory, sales, sellItem, deleteItem } = useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);



  return (
    <div className='bg-gray-100 min-h-screen'>
        <div className='flex justify-between p-4'>
            <p className='text-2xl'>Inventory</p>
            <div>
              <button onClick={() => setShowModal(true)} className="bg-transparent hover:bg-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 mr-2 border border-purple-600 hover:border-transparent rounded">
                +
              </button>
              <button className="bg-transparent hover:bg-purple-500 text-purple-600 font-semibold hover:text-white py-2 px-4 border border-purple-600 hover:border-transparent rounded">
                Export
              </button>  
            </div>
        </div>
        <div className='px-4'>
          <p>Manage your inventory of shoes, clothes, and collectibles.</p>
          <div className='w-full my-4 p-4 border rounded-lg bg-white h-[65vh] overflow-scroll'>
            <div className='my-3 p-2 grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 items-center shadow-md'>
              <span className='font-semibold'>Name</span>
              <span className='font-semibold'>Purchase Price</span>
              <span className='font-semibold'>Listing Price</span>
              <span className='font-semibold'>Quantity</span>
              <span className='font-semibold'>Purchase Date</span>
              <span className='font-semibold'>Action</span>              
            </div>
            <ul>
              {inventory.map((item, index) => (
                <li key={item.name} className='my-3 p-2 grid grid-cols-6 rounded-md hover:bg-blue-200'>
                  <span>{item.name}</span>
                  <span>{item.purchasePrice}</span>
                  <span>{item.listingPrice}</span>
                  <span>{item.quantity}</span>
                  <span>{index}</span>
                  <span>
                    <button onClick={() => sellItem(item)}>Sell</button>
                    <button onClick={() => deleteItem(item)}>Delete</button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        {sales.map((sale) => (
          <li key={sale.name}>{sale.name}</li>
        ))}
        <AddForm open={showModal} onClose={() => setShowModal(false)}/>
    </div>
  )
}

export default inventory
