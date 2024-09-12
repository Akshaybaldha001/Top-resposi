import React, { useEffect, useState } from "react";
import axios from "axios";

function Showkids() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/bestproduct?category=kids")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
        setData([]); // set data to an empty array on error
      });
  }, []);

  // Calculate the number of men's products
  const kidsCount = data.length;

  return (
    <div>
      <button className="bg-black hover:bg-gray-900 text-white font-bold py-2 px-4 rounded">
        {kidsCount}
      </button>
    </div>
  );
}

export default Showkids;
