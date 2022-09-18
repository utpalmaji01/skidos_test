import React from "react";
import Logo from "../../assets/logo.png";
const Header = (props) => {
  return (
    <>
      <nav className="navbar navbar-light justify-content-between py-2 px-4 fixed-top bg-white shadow-sm">
        <a className="navbar-brand">
          <img src={Logo} alt="" height={40} />
        </a>
        <div className="d-flex flex-grow-1 justify-content-between align-items-center ml-3">
          <h6
            className="m-0 "
            role="button"
            onClick={() => props.history.push("/announcements")}
          >
            Announcements
          </h6>
          <button className="btn btn-primary my-2 my-sm-0"  onClick={() => props.history.push("/")}>Log in</button>
        </div>
      </nav>
    </>
  );
};

export default Header;
