import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Detail() {
  // State variables
  const [data, setData] = useState({});
  const { id } = useParams();
  const navigate = useNavigate(); // Get a reference to the navigate function

  // useEffect hook to fetch data when component mounts or id changes
  useEffect(() => {
    axios
      .get(`http://localhost:4000/bestproduct/${id}`) // Fetch product details based on id
      .then((response) => {
        setData(response.data); // Update state with fetched data
      })
      .catch((error) => {
        console.error("There Was An Error Fetching Data!", error); // Log error if data fetching fails
      });
  }, [id]);

  // Function to add item to cart
  const addToCart = (item) => {
    axios
      .post("http://localhost:4000/cart", item) // Send POST request to add item to cart
      .then((response) => {
        console.log("Item added to cart:", response.data); // Log response data
        navigate("/cart"); // Redirect to cart page
      })
      .catch((error) => {
        console.error("There was an error adding the item to the cart!", error); // Log error if adding to cart fails
      });
  };

  // Function to calculate discount percentage
  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100); // Calculate discount percentage
  };

  // JSX structure for rendering product details
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-[1240px] mx-auto p-4 md:p-6 lg:p-8">
        <h1 className="text-center font-bold text-5xl mb-4">Product Details Here</h1>
        <div className="sm:flex justify-between gap-x-5 mt-4 w-full py-20">
          {/* Product Image */}
          <div className="border sm:w-1/2 flex justify-center order-1 h-[400px] w-full rounded-lg overflow-hidden">
            <img
              src={data.photo}
              alt={data.name} // Provide an alt text based on the product's name
              className="h-[100%] max-w-full object-cover"
            />{" "}
            {/* Display product image */}
          </div>
          {/* Product Details */}
          <div className="order-2 sm:w-1/2 w-full">
            <p className="text-4xl font-medium sm:text-start text-center mb-2">{data.name}</p>
            <p className="text-3xl font-medium sm:text-start text-center mb-2 py-8">{data.title}</p>
            <p className="text-lg text-gray-500 text-justify py-2 mx-2">
              {data.description && (
                <map>
                  {data.description.map((desc, index) => (
                    <p key={index}>{desc}</p>
                  ))}
                </map>
              )}
            </p>
            <p className="font-semibold sm:text-start text-center mb-2">
              Discount: {String(calculateDiscount(data.oldprice, data.newprice)).padStart(2, "0")}%
            </p>
            <p className="text-3xl font-semibold sm:text-start text-center mb-4">
              <del>{data.oldprice} rs.</del> {data.newprice} rs.
            </p>
            {/* Add to Cart Button */}
            <div className="sm:text-start text-center">
              <button
                className="bg-yellow-400 text-white text-2xl p-2 mt-2 font-medium rounded-full hover:bg-yellow-500 transition duration-300"
                onClick={() => addToCart({ ...data, quantity: 1 })} // Add quantity as 1
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;