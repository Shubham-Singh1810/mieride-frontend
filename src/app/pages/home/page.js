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
          <div className="d-flex align-items-center">
            <div className="brandLogo">
              <img src="/assets/logo.png" alt="Logo" className="logo" />
            </div>
            <div className="navContant d-flex justify-content-between w-100">
              {navItems?.map((v, i) => {
                return (
                  <div className="navItem">
                    <p className="mb-0">{v?.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* navbar ended */}
        <div className="homeMain">
          <h3>Welcome to</h3>
          <div className="d-flex justify-content-center mierideLogo">
            <img src="/assets/MieRide.png" alt="" className="mie-ride" />
          </div>
          <div className=" homeContent row d-flex justify-content-between">
            <div className="col-5">
              <p>
                Welcome to Mie Ride, your friendly neighborhood ride solution
                without the surge price surprises. We get it - life's expensive
                enough without wondering what your ride will cost. That's why we
                keep it simple with fixed prices you can count on. Need a ride
                to campus? Late for work? Airport dash? We've got you covered.
                We're real people connecting drivers and passangers going the
                same way, helping everyone save some cash while making Ontario's
                roads less crowded. Our drivers are your neighbors earning extra
                money on routes they already drive. No corporate feel, no
                robotes setting prices - just real solutions for real people.
                Come ride with us and join our growing community today!
              </p>
              <button>Register</button>
            </div>
            <div className="herosectionImage col-6 d-flex justify-content-between ">
              <img src="/assets/mobile3.png" alt="" className="img-fluid" />
            </div>
            <div className="col-1 mt-auto d-flex justify-content-end">
              <div className="socialMediaDiv">
                <img
                  src="/assets/instagram2.png"
                  alt="Logo"
                  className="s-img"
                />

                <img src="/assets/tik-tok2.png" alt="Logo" className="s-img" />

                <img src="/assets/youtube2.png" alt="Logo" className="s-img" />

                <img src="/assets/twitter2.png" alt="Logo" className="s-img" />

                <img src="/assets/facebook2.png" alt="Logo" className="s-img" />

                <img src="/assets/linkedin2.png" alt="Logo" className="s-img" />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-10 row">
              <div className="col-4 ">
                <div className="homeCardBox">
                  <h2>Shared Ride</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt, cumque!
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-4 ">
                <div className="homeCardBox">
                  <h2>Personal Ride</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt, cumque!
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-4">
                <div className="homeCardBox">
                  <h2>Driver Onboard</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Deserunt, cumque!
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-2 my-auto d-flex justify-content-end">
              <div>
                <div className="miePaybutton d-flex justify-content-center align-items-center">
                  <div className="">
                    <div>MIE</div>
                    <div>RIDE</div>
                  </div>
                </div>
                <div className="robot d-flex justify-content-center align-items-center">
                  <img src="/assets/robot.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
