import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link } from "react-router-dom";
import { isAuthenticated } from "../../redux/selectors/AuthSelector";
import { connect } from "react-redux";
import { logout, logoutAction } from "../../redux/action/Authaction";

function Header(props) {
  function onLogout(e) {
    e.preventDefault();
    dispatch(logout());
  }

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart.cartItems);

  useEffect(() => {
    // sidebar open/close

    var btn = document.querySelector(".navicon");
    var aaa = document.querySelector(".myNavbar ");

    function toggleFunc() {
      return aaa.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Sidenav li open close

    var navUl = [].slice.call(document.querySelectorAll(".navbar-nav > li"));
    for (var y = 0; y < navUl.length; y++) {
      navUl[y].addEventListener("click", function () {
        checkLi(this);
      });
    }

    function checkLi(current) {
      navUl.forEach((el) => el.classList.remove("open"));
      current.classList.add("open");
    }
  });

  return (
    <header className="site-header header center mo-left header-style-2">
      <div className="sticky-header main-bar-wraper navbar-expand-lg">
        <div className="main-bar clearfix ">
          <div className="container clearfix">
            <div className="logo-header mostion">
              <Link
                to={"/Shop"}
                className="dez-page"
                style={{ align: "center" }}
              >
                <img src={require("./../../images/logo9.1.png")} alt="" />
              </Link>
            </div>
            <button
              className="navbar-toggler collapsed navicon justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div
              className="header-nav navbar-collapse navbar myNavbar collapse justify-content-between"
              id="navbarNavDropdown"
            >
              <div className="logo-header mostion">
                <Link to={"/"} className="dez-page">
                  <img src={require("./../../images/logo.png")} alt="" />
                </Link>
              </div>
              <ul className="nav navbar-nav nav1">
                <li className="active">
                  <Link to={""}>Home</Link>
                </li>
                <li>
                  <Link to={""}>
                    Pages<i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to={"/about-1"}>About Us</Link>
                    </li>
                    <li>
                      <Link to={"/our-services"}>Our Services</Link>
                    </li>
                    <li>
                      <Link to={"./faq"}>FAQs</Link>
                    </li>
                    <li>
                      <Link to={"./booking"}>Booking</Link>
                    </li>
                    <li>
                      <Link to={"./error-404"}>404 Error</Link>
                    </li>
                    <li>
                      <Link to={"/calendar"}>Calendar</Link>
                    </li>
                    <li>
                      <Link to={"/team"}>Team</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to={"/our-menu-2"}>Category</Link>
                </li>
              </ul>
              <ul className="nav navbar-nav nav2">
                <li>
                  <Link to={""}>
                    Shop <i className="fa fa-chevron-down"></i>
                  </Link>
                  <ul className="sub-menu">
                    <li>
                      <Link to={"/shop"}>Shop</Link>
                    </li>
                    <li>
                      <Link to={"/shop-sidebar"}>Shop Sidebar</Link>
                    </li>
                    <li>
                      <Link to={"/contact-1"}>Contact</Link>
                    </li>

                    <li>
                      <Link to={"/shop-cart"}>Cart</Link>
                    </li>

                    <li>
                      <Link to={"/shop-checkout"}>Checkout</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>SignUp</Link>
                    </li>
                    <li>
                      <Link to={"/signup"}>Register</Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <Link to={"/Shop-cart"}>
                    <i
                      className="ti-shopping-cart"
                      style={{ fontSize: "20px" }}
                    >
                      {cart.length}
                    </i>
                  </Link>
                </li>
                {!props.isAuthenticated && (
                  <>
                    <li>
                      <Link to={"/signup"}>SignUp</Link>

                      <Link to={"/login"}>Login</Link>
                    </li>
                  </>
                )}
                {props.isAuthenticated && (
                  <button onClick={onLogout} className="px-2">
                    Logout
                  </button>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
const mapStateToProps = (state) => {
  return {
    isAuthenticated: isAuthenticated(state),
  };
};

export default connect(mapStateToProps)(Header);
