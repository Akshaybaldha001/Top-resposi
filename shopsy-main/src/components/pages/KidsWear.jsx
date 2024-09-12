import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function KidsWear() {
  const [ProductsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const Navigate=useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/bestproduct?category=kids")
      .then((response) => {
        setProductsData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = ProductsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="mt-14 mb-12">
        <div className="container">
          {/* Header section */}
          <div className="text-center mb-10 max-w-[600px] mx-auto">
            <h1 data-aos="fade-up" className="text-3xl font-bold">
              Kids Products
            </h1>
            <p data-aos="fade-up" className="text-xs text-gray-400">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
              asperiores modi Sit asperiores modi
            </p>
          </div>
          {/* Body section */}
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
              {/* card section */}
              {currentItems.map((data) => (
                <div
                  data-aos="fade-up"
                  data-aos-delay={data.aosDelay}
                  key={data.id}
                  className="space-y-3 bg-white shadow-md rounded-md p-4 border-2 border-yellow-400"
                >
                  <img
                    src={data.photo}
                    alt=""
                    className="w-48 h-48 object-contain rounded-md"
                  />
                  <div>
                    <h3 className="font-bold text-center">{data.title}</h3>
                    <h3 className="font-light mt-1">{data.name}</h3>
                    <p className="text-sm text-gray-600">{data.color}</p>
                    <div className="flex items-center gap-3 mt-1">
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <FaStar className="text-yellow-400" />
                      <span>{data.rating}</span>
                    </div>
                    <div className="flex justify-between">
                      <p className="text-lg font-bold">${data.newprice}</p>
                      <p className="p-2 font-semibold mt-0">
                        {(
                          ((data.oldprice - data.newprice) / data.oldprice) *
                          100
                        ).toFixed(0)}
                        % off
                      </p>
                      <p className="text-lg text-gray-400 line-through">
                        ${data.oldprice}
                      </p>
                    </div>
                    <p className="text-sm text-gray-600">{data.descriptions}</p>
                    <button
                      className="bg-yellow-500 hover:bg-orange-700 text-white font-bold py-1 px-4 rounded-md mt-4"
                      onClick={() =>{Navigate (`/productdetails/${data.id}`)}}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>
            {/* view all button */}
            {/* <div className="flex justify-center">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md shadow-md hover:bg-primary-dark border-2 border-yellow-400">
                View All Button
              </button>
            </div> */}
            {/* pagination */}
            <div className="flex justify-center mt-8">
              {[...Array(Math.ceil(ProductsData.length / itemsPerPage))].map((_, index) => (
                <button
                  key={index + 1}
                  onClick={() => paginate(index + 1)}
                  className={`bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${currentPage === index + 1 ? 'bg-gray-400' : ''}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KidsWear;