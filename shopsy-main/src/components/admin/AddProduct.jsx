import React, { useRef } from "react";
import axios from "axios";
import AdminSidebar from "./AdminSidebar";

function AddProduct() {
  const title = useRef("");
  const photo = useRef("");
  const descriptions = useRef("");
  const category = useRef("");
   const newprice = useRef("");
   const oldprice = useRef("");
   const name = useRef("");



  const AddproductHandler = (e) => {
    e.preventDefault();
    const bestproduct = {
      title: title.current.value,
      photo: photo.current.value,
      descriptions: descriptions.current.value,
      category: category.current.value,
      newprice: newprice.current.value,
      oldprice: oldprice.current.value,
      name: name.current.value
    };
    axios
      .post(`http://localhost:4000/bestproduct`, bestproduct)
      .then((response) => {
        console.log(response.data);
      });

    e.target.reset();
  };

  return (
    <div>
      <div className="flex">
        <div className="w-1/5 m-0 p-0">
          <AdminSidebar />
        </div>
        <div className="w-4/5 m-0 p-0 text-center">
          <h1 className="w-4/5 h-12 bg-black text-white text-center mx-0 my-0 ml-32">
            ADD PRODUCT
          </h1>
          <div className="w-4/5 m-0 p-0 text-center">
            <form
              onSubmit={AddproductHandler}
              encType="multipart/form-data"
              className="max-w-lg mx-auto mt-8"
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="product Title"
                  ref={title}
                  className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="product Photo"
                  ref={photo}
                  className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="product category "
                  ref={category}
                  className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="product oldprice "
                  ref={oldprice}
                  className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="product name "
                  ref={name}
                  className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>
              <div className="form-group">
                <input
                  type="number"
                  placeholder="product newprice "
                  ref={newprice}
                  className="form-input mt-4 block w-full border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500"
                />
              </div>

              <div className="form-group">
                <textarea
                  placeholder="product Description"
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
    </div>
  );
}

export default AddProduct;
