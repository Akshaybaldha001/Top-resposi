import React from 'react'
import AdminSidebar from "./AdminSidebar";

function Manageorder() {
  return (
    <div>
      <div className="flex">
        <div className="w-1/5 m-0 p-0">
          <AdminSidebar />
        </div>
        <div className="w-4/5 m-0 p-0 text-center">manage order</div>
      </div>
    </div>
  )
}

export default Manageorder
