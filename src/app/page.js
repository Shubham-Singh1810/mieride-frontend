import React from "react";
import Navbar from "./components/Navbar";

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
        <Navbar navItems={navItems} selectedItem="Home" />
        {/* navbar ended */}
        <div className="homeMain">
          <h3>Welcome to</h3>
          <div className="d-flex justify-content-center mierideLogo">
            <img src="/assets/MieRide.png" alt="" className="mie-ride" />
          </div>
          <div className=" homeContent row d-flex justify-content-between">
            <div className="col-md-5 col-12 order-md-1 order-2">
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
            <div className="herosectionImage col-md-6 col-12 order-md-2 order-1 d-flex justify-content-between ">
              <img src="/assets/mobile3.png" alt="" className="img-fluid" />
            </div>
            <div className="col-md-1 mt-auto d-md-flex justify-content-end d-none order-3">
              <div className="socialMediaDiv">
                <a href="https://www.instagram.com/mieride.ca/" target="blank">
                  <img
                    src="/assets/instagram2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://www.tiktok.com/@mieride.ca" target="blank">
                  <img
                    src="/assets/tik-tok2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>

                <a href="https://www.youtube.com/@mieride_ca" target="_blank">
                  <img
                    src="/assets/youtube2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://x.com/mieride_ca" target="blank">
                  <img
                    src="/assets/twitter2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://www.facebook.com/mieride/" target="blank">
                  <img
                    src="/assets/facebook2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="" target="blank">
                  <img
                    src="/assets/linkedin2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-10 col-12 m-md-0 mx-0 mt-3 p-0 row">
              <div className="col-md-4 col-12">
                <div className="homeCardBox ">
                  <h2>Shared Ride</h2>
                  <p>
                    Travel together, split costs reduse emissions-smart
                    community for budget-conscious travelers.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-md-4 col-12 my-auto">
                <div className="homeCardBox">
                  <h2>Personal Ride</h2>
                  <p>
                    Book your own private journey with fixed pricing and
                    personalized comfort.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
              <div className="col-md-4 col-12 my-auto">
                <div className="homeCardBox">
                  <h2>Driver Onboard</h2>
                  <p>
                    Join our team, set your schedule, earn consistently while
                    helping others commute.
                  </p>
                  <button>Read More</button>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-2 my-auto d-md-flex justify-content-end">
              <div className="d-flex  d-md-block justify-content-center">
                <div className=" miePayLogo d-flex justify-content-end align-items-end">
                  <a href="https://miepay.ca/" target="blank">
                  <img src="/assets/miepayLogo.jpeg" className="img-fluid"/>
                  </a>
                </div>
               
              </div>
            </div>
            <div className=" d-flex d-md-none ">
              <div className="socialMediaDiv ">
                <a href="https://www.instagram.com/mieride.ca/" target="blank">
                  <img
                    src="/assets/instagram2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://www.tiktok.com/@mieride.ca" target="blank">
                  <img
                    src="/assets/tik-tok2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>

                <a href="https://www.youtube.com/@mieride_ca" target="_blank">
                  <img
                    src="/assets/youtube2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://x.com/mieride_ca" target="blank">
                  <img
                    src="/assets/twitter2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="https://www.facebook.com/mieride/" target="blank">
                  <img
                    src="/assets/facebook2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
                <a href="" target="blank">
                  <img
                    src="/assets/linkedin2.png"
                    alt="Logo"
                    className="s-img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
