import React from "react";

const Navbar = () => {
  return (
    <div className="account-balance-navbar">
      <nav className="navbar navbar-dark bg-dark">
        <div className="navbar-brand">
          <h4>Account Balance</h4>
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </nav>
      <div className="collapse" id="navbarToggleExternalContent">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="#"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
