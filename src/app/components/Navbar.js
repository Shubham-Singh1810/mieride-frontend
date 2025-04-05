import React from "react";

function Navbar({ navItems }) {
  return (
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
      {/* mobile Nav */}
      
    </div>
  );
}

export default Navbar;
