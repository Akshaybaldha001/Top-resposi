import React, { useEffect, useState } from 'react';
import AdminNavbar from './AdminNavbar';
import AdminSidebar from './AdminSidebar';
import axios from 'axios';
import Showkids from './Showkids';
import Showblog from './Showblog'
import Showtopproduct from './Showtopproduct';

function AdminLayout() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/bestproduct?category=men")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setData([]); // set data to an empty array on error
      });
  }, []);

  // Calculate the number of men's products
  const mensCount = data.length;

  return (
    <div className="h-screen flex">
      <div className="w-64 h-screen bg-gray-200 p-4 fixed top-0 left-0">
        <AdminSidebar />
      </div>
      <div className="flex-grow p-6 overflow-y-auto ml-64">
        <AdminNavbar />
        {/* Container */}
        <div className="grid grid-rows-2 gap-4 py-10">
          {/* Row 1 */}
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-red-500 h-40 w-full rounded shadow-md flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-4">Mens:</h1>
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                {mensCount} {/* Display the count of men's products */}
              </button>
            </div>
            <div className="bg-red-500 h-40 w-full rounded shadow-md flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-4">Womens:</h1>
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                Count
              </button>
            </div>
            <div className="bg-red-500 h-40 w-full rounded shadow-md flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold mb-4">Kids:</h1>
            <Showkids></Showkids>
            </div>
          </div>
          {/* Row 2 */}
          <div className="grid grid-cols-3 gap-4 py-2">
            <div className="bg-blue-500 h-40 w-full rounded shadow-md flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-4">Top Product:</h1>
           <Showtopproduct></Showtopproduct>
            </div>
            <div className="bg-blue-500 h-40 w-full rounded shadow-md flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-4">Blog:</h1>
           <Showblog></Showblog>
            </div>
            <div className="bg-blue-500 h-40 w-full rounded shadow-md flex flex-col justify-center items-center">
              <h1 className="text-2xl font-bold mb-4"></h1>
              <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
                Count
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
