import { useState, useEffect } from "react";
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TopRated() {
  const [ProductsData, setProductsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(6);
  const navigate= useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:4000/bestproduct?category=topproduct")
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
      <div className="container">
        {/* Header section */}
        <div className="text-left mb-24">
          <p data-aos="fade-up" className="text-sm text-primary">
            Top Rated Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit asperiores modi Sit asperiores modi
          </p>
        </div>
        {/* Body section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
          {currentItems.map((data) => (
            <div
              data-aos="zoom-in"
              className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white relative shadow-xl duration-300 group max-w-[300px] mb-32"
            >
              {/* image section */}
              <div className="h-[100px]">
                <img
                  src={data.photo}
                  alt=""
                  className="max-w-[140px] block mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md"
                  style={{ backgroundColor: 'none' }}
                />
              </div>
              {/* details section */}
              <div className="p-4 text-center">
                {/* star rating */}
                <div className="w-full flex items-center justify-center gap-1">
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                  <FaStar className="text-yellow-500" />
                </div>
                <h1 className="text-xl font-bold">{data.title}</h1>
                <p className="text-gray-500 group-hover:text-white duration-300 text-sm line-clamp-2">
                  {data.descriptions}
                </p>
                <div className="flex justify-between">
                  <p className="text-lg font-bold">${data.newprice}</p>
                  <p className="p-2 font-semibold mt-3" >
                    {(Math.floor(((data.oldprice - data.newprice) / data.oldprice) * 100))}%
                    Discount
                  </p>
                  <p className="text-lg text-gray-400 line-through">
                    ${data.oldprice}
                  </p>
                </div>
                <button
                  className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary"
                  onClick={() =>navigate (`/productdetails/${data.id}`)}
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
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
  );
}

export default TopRated;