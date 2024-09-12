import React from 'react'
import { FaBell } from 'react-icons/fa'
import { FaMessage, FaPerson, FaPersonCircleCheck } from 'react-icons/fa6'

export default function AdminNavbar() {
  return (
    <div className="flex  items-center justify-between bg-white p-4 shadow-md ml-60">
      <div className="flex items-center space-x-2">
        <h1 className="text-xl font-bold">Dashboard Admin Setting</h1>
      </div>
      <ul className='flex space-x-5'>
        <li className='cursor-pointer'><FaBell /></li>
        <li className='cursor-pointer'><FaMessage /></li>
        <li className='cursor-pointer'><FaPerson /></li>
      </ul>
    </div>
  )
}
