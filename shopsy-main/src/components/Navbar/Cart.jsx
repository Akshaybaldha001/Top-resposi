import axios from "axios";
import React, { useEffect, useState } from "react";

function Cart() {
  const [cartItems, setCartItems] = useState([]);

  // Fetch cart items on component mount
  useEffect(() => {
    axios
      .get("http://localhost:4000/cart")
      .then((response) => {
        setCartItems(response.data); // Set the cart items to state
      })
      .catch((error) => {
        console.error("There was an error fetching the cart items!", error);
      });
  }, []);

  // Function to delete an item from the cart
  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4000/cart/${id}`)
      .then(() => {
        setCartItems(cartItems.filter(item => item.id !== id)); // Remove item from state
      })
      .catch((error) => {
        console.error("There was an error deleting the item!", error);
      });
  };

  // Function to calculate the subtotal
  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + (item.newprice * item.quantity), 0);
  };

  // Function to calculate the total quantity of items in the cart
  const calculateTotalQuantity = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Add item to cart (called from another component)
  const addToCart = async (product) => {
    try {
      // Check if the product already exists in the cart
      const existingItem = cartItems.find(item => item.id === product.id);
      if (existingItem) {
        // Update the quantity of the existing item
        const updatedItem = {
          ...existingItem,
          quantity: existingItem.quantity + product.quantity,
        };
        await axios.put(`http://localhost:4000/cart/${product.id}`, updatedItem);
        setCartItems(cartItems.map(item => item.id === product.id ? updatedItem : item));
      } else {
        // Add the new item to the cart
        await axios.post("http://localhost:4000/cart", product);
        setCartItems([...cartItems, product]);
      }
    } catch (error) {
      console.error("There was an error adding the item to the cart!", error);
    }
  };

  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto p-4 md:p-6 lg:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-gray-800">
            Your Cart
            <span className="ml-4 bg-yellow-500 text-white text-sm font-semibold px-2 py-1 rounded-full">
              {calculateTotalQuantity()}
            </span>
          </h1>
          {cartItems.length > 0 && (
            <div className="text-right text-gray-700">
              <p className="text-lg font-semibold">Subtotal: {calculateSubtotal()} rs.</p>
            </div>
          )}
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cartItems.length === 0 ? (
            <div className="col-span-full text-center text-gray-600">
              <p className="text-xl">Your cart is empty.</p>
            </div>
          ) : (
            cartItems.map((item) => (
              <div key={item.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="flex p-4 border-b">
                  <img
                    src={item.photo}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded-lg mr-4"
                  />
                  <div className="flex flex-col justify-between">
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">Price: {item.newprice} rs.</p>
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                    <p className="text-gray-600">Subtotal: {item.newprice * item.quantity} rs.</p>
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="mt-2 bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600 transition duration-300"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Cart;
