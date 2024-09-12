
import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

function ManageBlog() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/blogs")
      .then((res) => {
        setBlogs(res.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  const handleDelete = (id) => {
    // Add code to delete the blog with the given id
  };

  const handleEdit = (id) => {
    // Add code to edit the blog with the given id
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/5 p-0">
        <AdminSidebar />
      </div>
      <div className="w-4/5 p-0 text-center">
        <div className="col-md-8 mx-5 p-2 mt-5 shadow-md">
          <div className="row">
            <div className='p-5 w-full'>
              <h3 className="text-2xl font-bold">Manage All Blogs here</h3>
            </div>
            <table className='table table-responsive table-bordered w-full'>
              <thead>
                <tr>
                  <th className="px-4 py-2">Title</th>
                  <th className="px-4 py-2">Photo</th>
                  <th className="px-4 py-2">Descriptions</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs && blogs.map((item) => (
                  <tr key={item.id}>
                    <td className="px-4 py-2">{item.title}</td>
                    <td className="px-4 py-2"><img src={item.photo} alt="photo" className='w-auto h-48 object-cover rounded' /></td>
                    <td className="px-4 py-2">{item.descriptions}</td>
                    <td className="px-4 py-2">
                      <div className="flex justify-center">
                        <button className='btn bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded' onClick={() => handleDelete(item.id)}>Delete</button>
                        <button className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ms-2' onClick={() => handleEdit(item.id)}>Edit</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ManageBlog;