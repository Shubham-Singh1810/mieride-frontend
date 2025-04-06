"use client";
import React, {useState, useEffect} from "react";
import {
  getBlogCategoryListServ,
  getBlogListServ,
} from "../../services/blog.services";
import {Image_Base_Url} from "../../utils/api_base_url_configration"
import Navbar from "../../components/Navbar";
function page() {
  const navItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/",
    },
    {
      name: "Our Services",
      path: "/",
    },
    {
      name: "Why Mie Ride",
      path: "/",
    },
    {
      name: "Testimonials",
      path: "/",
    },
    {
      name: "Blogs",
      path: "/",
    },
    {
      name: "Advertise With Us",
      path: "/",
    },
    {
      name: "Partner With Us",
      path: "/",
    },
    {
      name: "Contact Us",
      path: "/",
    },
  ];
  
  return (
    <div className="mainDiv">
      <div className="homepage">
        {/* navbar started */}
        <Navbar selectedItem="Why Mie Ride" navItems={navItems}/>
        {/* navbar ended */}
        <div className="blogsMain ">
            <div style={{height:"70vh"}} className=" d-flex justify-content-center align-items-center">

          <h1 className="text-light">Comming Soon</h1>
            </div>
        </div>
      </div>
    </div>
  );
}

export default page;
