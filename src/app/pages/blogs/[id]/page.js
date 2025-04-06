"use client";
import React, { useState, useEffect } from "react";
import { getBlogDetailsServ } from "../../../services/blog.services";
import { Image_Base_Url } from "../../../utils/api_base_url_configration";
import Navbar from "../../../components/Navbar";
import moment from "moment";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function page({ params }) {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/" },
    { name: "Our Services", path: "/" },
    { name: "Why Mie Ride", path: "/" },
    { name: "Testimonials", path: "/" },
    { name: "Blogs", path: "/" },
    { name: "Advertise With Us", path: "/" },
    { name: "Partner With Us", path: "/" },
    { name: "Contact Us", path: "/" },
  ];

  const [details, setDetails] = useState(null);

  const getBlogDetailsFunc = async () => {
    try {
      let response = await getBlogDetailsServ(params?.id);
      if (response?.data?.statusCode == "200") {
        setDetails(response?.data?.data);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getBlogDetailsFunc();
  }, [params?.id]);

  return (
    <div className="mainDiv">
      <div className="homepage">
        <Navbar selectedItem="Blogs" navItems={navItems} />
        <div className="blogsMain">
          <div className="row">
            <div className="col-12 order-md-1 order-2 col-md-6 my-auto">
              <h3 className="d-none d-md-block">
                {details ? details.title : <Skeleton height={30} width={`80%`} />}
              </h3>
              <p>
                {details ? (
                  <span dangerouslySetInnerHTML={{ __html: details.short_description }} />
                ) : (
                  <Skeleton count={3} />
                )}
              </p>
              <span>
                {details ? moment(details.created_at).format("MMM DD, YYYY") : <Skeleton width={100} />}
              </span>
            </div>
            <div className="col-12 order-md-2 order-1 col-md-6 ">
              <div className="aboutHeroImg">
                <h3 className="d-block d-md-none">
                  {details ? details.title : <Skeleton height={30} width={`80%`} />}
                </h3>
                {details ? (
                  <img src={Image_Base_Url + details.image} alt="Blog" />
                ) : (
                  <Skeleton height={250} />
                )}
              </div>
            </div>
          </div>

          <div>
            {details ? (
              <div dangerouslySetInnerHTML={{ __html: details.description }} />
            ) : (
              <Skeleton count={10} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
