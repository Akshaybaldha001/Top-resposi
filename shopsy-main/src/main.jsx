import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TopRated from "./components/pages/TopRated.jsx";
import Layout from "./Layout.jsx";
import KidsWear from "./components/pages/KidsWear.jsx";
import MensWear from "./components/pages/MensWear.jsx";
import TrendingProduct from "./components/pages/TrendingProduct.jsx";
import BestSelling from "./components/pages/BestSelling.jsx";
import AdminLayout from "./components/admin/AdminLayout.jsx";
import ManageProduct from "./components/admin/ManageProduct.jsx";
import AddProduct from "./components/admin/AddProduct.jsx";
import AddBlog from "./components/admin/AddBlog.jsx";
import ManageBlog from "./components/admin/ManageBlog.jsx";
import ManageContact from "./components/admin/ManageContact.jsx";
import Manageorder from "./components/admin/Manageorder.jsx";
import Blog from "./components/Blog/Blog.jsx";
import Cart from "./components/Navbar/Cart.jsx";
import Productdetails from "./components/pages/Productdetails.jsx";




ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* user penal routing */}
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
          <Route path="/toprated" element={<TopRated />} />
          <Route path="/kidswear" element={<KidsWear />}></Route>
          <Route path="/menswear" element={<MensWear />}></Route>
          <Route path="/trendingproduct" element={<TrendingProduct />}></Route>
          <Route path="/bestselling" element={<BestSelling />}></Route>
          <Route path="/blog" element={<Blog/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/productdetails/:id" element={<Productdetails/>}></Route>
        </Route>

        {/* admin penal routing */}
        <Route path="/admin" element={<AdminLayout/>}></Route>
        <Route path="/admin/add_product" element={<AddProduct/>}></Route>
        <Route path="/admin/manage_product" element={<ManageProduct/>}></Route>
        <Route path="/admin/add_blog" element={<AddBlog/>}></Route>
        <Route path="/admin/manage_blog" element={<ManageBlog/>}></Route>
        <Route path="/admin/manage_contact" element={<ManageContact/>}></Route>
        <Route path="/admin/manage_order" element={<Manageorder/>}></Route>

     
       
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
