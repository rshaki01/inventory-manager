import React from 'react'
import Link from 'next/link'
import {RxSketchLogo, RxDashboard} from 'react-icons/rx'
import {HiOutlineClipboardList} from 'react-icons/hi'
import {FiSettings} from 'react-icons/fi'
import {MdAttachMoney} from 'react-icons/md'
import {BsBoxes} from 'react-icons/bs'

const Sidebar = ({children}) => {
    
  return (
    <div className='flex'>
      <div className='fixed w-20 lg:w-30 bg-white h-screen p-4 flex flex-col justify-between border-r-[1px]' >
        <div className='flex flex-col items-center'>
            <Link href='/test'>
                <div className='bg-purple-800 text-white rounded-lg p-3'>
                    <RxSketchLogo size={20} />
                </div>
            </Link> 
            <span className='border-b-[1px] border-gray-200 w-full p-2'></span>
            <Link href='/'>
                <div className='bg-gray-100 hover:bg-gray-300 text-black rounded-lg p-3 my-4'>
                    <RxDashboard size={20} />
                </div>
            </Link>
            <p className='text-xs'>Dashboard</p>
            <Link href='/inventory'>
                <div className='bg-gray-100 hover:bg-gray-300 text-black rounded-lg p-3 my-4'>
                    <BsBoxes size={20} />
                </div>
            </Link>
            <p className='text-xs'>Inventory</p>
            <Link href='/expenses'>
                <div className='bg-gray-100 hover:bg-gray-300 text-black rounded-lg p-3 my-4'>
                    <HiOutlineClipboardList size={20} />
                </div>
            </Link>
            <p className='text-xs'>Expenses</p>
            <Link href='/sales'>
                <div className='bg-gray-100 hover:bg-gray-300 text-black rounded-lg p-3 my-4'>
                    <MdAttachMoney size={20} />
                </div>
            </Link>
            <p className='text-xs'>Sales</p>
        </div>
        <div className='items-center'>
            <Link href='/settings'>
                <div className='bg-gray-100 hover:bg-gray-300 text-black rounded-lg p-3 my-4'>
                    <FiSettings size={20} />
                </div>
            </Link>
            <p className='text-xs'>Settings</p>
        </div>

      </div>
      <main className='ml-20 w-full'>{children}</main>
      </div>
  )
}

export default Sidebar
