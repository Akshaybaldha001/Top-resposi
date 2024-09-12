import React from 'react'
import { } from 'react-icons'
import { Link } from 'react-router-dom'
export default function AdminSidebar() {
  return (
    <>
      <div className="bg-gray-800 text-white h-screen w-64 p-4 flex flex-col fixed">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-xl font-bold">My Dashboard</h1>
          <div className="w-6 h-6 flex items-center justify-center bg-gray-700 rounded-md cursor-pointer">
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </div>
        </div>
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://media.istockphoto.com/id/1188816693/vector/young-teenage-woman-uses-laptop-for-work-or-chatting-with-friends.jpg?s=612x612&w=0&k=20&c=FRUajWyXnGV6UshCz72GDz4ImV0BrU9VTXoFvdRz6U4="
            alt="Avatar"
            className="rounded-full mb-4 w-28"
          />
          <h2 className="text-lg">My Dashboard</h2>
        </div>
        <nav className="flex flex-col space-y-4">
          <Link to='/admin' className="hover:text-gray-300">My Dashboard</Link>
          <Link to='/admin/add_product' className="hover:text-gray-300">Add product</Link>

          <Link to='/admin/manage_product' className="hover:text-gray-300">Manage product</Link>
          <Link to='/admin/add_blog' className="hover:text-gray-300">Add Blog</Link>
          <Link to='/admin/manage_blog' className="hover:text-gray-300">Manage Blog</Link>

          <Link to='/admin/manage_order' className="hover:text-gray-300">Manage Order</Link>
          <Link to='/admin/manage_contact'  className="hover:text-gray-300">Manage Contacts</Link>

        </nav>
        <button className="mt-auto bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600">Logout ?</button>
      </div>

    </>
  )
}
