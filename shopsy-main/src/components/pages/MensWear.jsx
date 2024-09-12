import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function MensWear() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(8);
  const navigate = useNavigate();

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

  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  return (
    <section>
        <div className="max-w-[1240px] mx-auto px-12">
          <div>
          <h1 className="text-4xl mb-12 mt-8 mx-12 font-bold text-black-700 uppercase tracking-wide">Men's Shopping</h1>
            <div className="grid justify-center sm:grid-cols-4 grid-cols-1 gap-x-3 gap-y-6">
              {currentItems && currentItems.map((item) => (
                  <div className="card p-2   border-2 border-primary/40 sm:mx-0 mx-2" key={item.id}>
                    <div className="h-[350px] flex justify-center">
                      <img
                        src={item.photo}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                    <div className="font-semibold lg:text-2xl text-sm text-center">
                      {item.name}
                    </div>
                    <div
                      className="text-center"
                      style={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {item.title}
                    </div>
                    <div className="text-center text-green- font-semibold">
                      Discount:{" "}
                      {String(
                        calculateDiscount(item.oldprice, item.newprice)
                      ).padStart(2, "0")}
                      % off
                    </div>
                    <div className="font-semibold text-xl text-center">
                      <del>{item.oldprice} Rs.</del> {""} {item.newprice} Rs.
                    </div>
                    <button className='bg-yellow-500 text-white border rounded p-2 mx-14 hover:bg-white hover:text-black'
                    onClick={() =>navigate (`/productdetails/${item.id}`)}>ADD TO CART</button>
                  </div>
                ))}
            </div>
            <div className="flex justify-center mt-8">
              {[1, 2, 3, 4, 5].map(number => (
                <button key={number} onClick={() => paginate(number)} className={`bg-gray-200 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l ${currentPage === number ? 'bg-gray-400' : ''}`}>
                  {number}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}

export default MensWear;