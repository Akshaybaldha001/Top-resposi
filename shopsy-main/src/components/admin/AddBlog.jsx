import React, { useRef } from "react";
import AdminSidebar from "./AdminSidebar";
import axios from "axios";

function AddBlog() {
  const title = useRef("");
  const photo = useRef("");
  const descriptions = useRef("");

  const AddBlogsFormHandler = (e) => {
    e.preventDefault();
    const blog = {
      title: title.current.value,
      photo: photo.current.value,
      descriptions: descriptions.current.value,
    };
    axios.post(`http://localhost:4000/blogs`, blog).then(() => {
      console.log(data);
    });
    e.target.reset();
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/5 m-0 p-0">
          <AdminSidebar />
        </div>
        <div className="w-4/5 m-0 p-0 text-center py-16 border-black">
          <form
            onSubmit={AddBlogsFormHandler}
            encType="multipart/form-data"
            className="max-w-lg mx-auto mt-8"
          >
            <div className="form-group">
              <input
                type="text"
                placeholder="Blog Title"
                ref={title}
                className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                placeholder="Blog Photo"
                ref={photo}
                className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="form-group">
              <textarea
                placeholder="Description"
                ref={descriptions}
                className="form-textarea mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddBlog;
