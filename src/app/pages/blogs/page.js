"use client";
import React, {useState, useEffect} from "react";
import {
  getBlogCategoryListServ,
  getBlogListServ,
} from "../../services/blog.services";
import {Image_Base_Url} from "../../utils/api_base_url_configration"
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
  const [categoryList, setCategoryList] =useState([]);
  const [blogList, setBlogList] =useState([]);
  const getBlogCategoryListFunc = async () => {
    try {
      let response = await getBlogCategoryListServ();
      if(response?.data?.statusCode=="200"){
        setCategoryList(response?.data?.data)
      }
    } catch (error) {}
  };
  const getBlogListFunc = async() => {
    try {
      let response = await getBlogListServ();
      if(response?.data?.statusCode=="200"){
        setBlogList(response?.data?.data)
      }
    } catch (error) {}
  };
  useEffect(()=>{
    getBlogListFunc();
    getBlogCategoryListFunc();
  }, [])
  return (
    <div className="mainDiv">
      <div className="homepage">
        {/* navbar started */}
        <div className="navMain">
          <div className="d-flex align-items-center justify-content-between">
            <div className="brandLogo">
              <img src="/assets/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="navContant d-md-flex justify-content-between w-100 d-none">
              {navItems?.map((v, i) => {
                return (
                  <div className="navItem">
                    <p className="mb-0">{v?.name}</p>
                  </div>
                );
              })}
            </div>
            <div className="bar d-md-none d-block">
              <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png" />
            </div>
          </div>
        </div>
        {/* navbar ended */}
        <div className="blogsMain">
          <div className="row">
            <div className="col-12 order-md-1 order-2 col-md-6 my-auto">
              <h3 className="d-none d-md-block">Latest Insight</h3>
              {/* <p dangerouslySetInnerHTML={{ __html: v?.blogList[0]?.short_description }} /> */}
              <span>Feb 25, 2025</span>
              <div>
                <button>Read More</button>
              </div>
            </div>
            <div className="col-12 order-md-2 order-1 col-md-6 ">
              <div className="aboutHeroImg">
                <h3 className="d-block d-md-none">Latest Insight</h3>
                <img src={Image_Base_Url+blogList[0]?.image} />
              </div>
            </div>
          </div>
          <div className="d-flex my-md-5 my-4">
            {categoryList?.map((v, i) => {
              return (
                <div style={{cursor:"pointer"}} className={"categoryItem " + (i == 0 && " activeItem")}>
                  <p>{v?.name}</p>
                </div>
              );
            })}
          </div>
          <div className="row">
            {blogList?.map((v, i) => {
              return (
                <div className="col-6 col-md-6 col-lg-4 ">
                  <div className="blogCart shadow">
                    <img src={Image_Base_Url+v?.image} />
                    <div className="p-md-3 p-1">
                      <p>
                        {v?.short_description}
                      </p>
                      <div className="my-md-2 my-0">
                        <span>Feb 25, 2025</span>
                      </div>
                      <span className="d-md-block d-none">
                        {v?.short_description}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
