import React from "react";

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
              <img src="https://cdn-icons-png.flaticon.com/128/2976/2976215.png"/>
            </div>
          </div>
        </div>
        {/* navbar ended */}
        <div className="contactMain">
          <div className="row contactHeaderRow">
            <div className="col-md-3 col-12">
              <h5>Contact Us</h5>
              <h3>GET IN TOUCH</h3>
            </div>
            <div className="col-md-3 col-6 my-auto">
              <div className="contactBox shadow">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/535/535188.png" />
                  </div>
                  <p>Our Address</p>
                  <h4>Toronto, On</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 my-auto">
              <div className="contactBox shadow">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/2099/2099199.png" />
                  </div>
                  <p>Email Us</p>
                  <h4>info@mieride.ca</h4>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-6 my-auto mx-auto">
              <div className="contactBox shadow">
                <div>
                  <div className="d-flex justify-content-center">
                    <img src="https://cdn-icons-png.flaticon.com/128/3059/3059446.png" />
                  </div>
                  <p>Call Us</p>
                  <h4>+1 (416) 827-0039</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-md-6 order-md-1 order-2">
              <div className="contactForm">
                 <div>
                  <input placeholder="Your Name"/>
                 </div>
                 <div>
                  <input placeholder="Your Email"/>
                 </div>
                 <div>
                  <input placeholder="Message"/>
                 </div>
                  <div className="d-flex justify-content-center">
                    <button>Send</button>
                  </div>
              </div>
              
              
            </div>
            <div className="col-12 col-md-6 order-md-2 order-1 m-auto d-flex justify-content-center ">
              <div className="contactMessageDiv">
                <h5>Have any Query</h5>
                <h3>CONTACT US</h3>
                <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, cumque!  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Deserunt, cumque!</p>
              </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
