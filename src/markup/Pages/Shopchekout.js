import React, { Component, useMemo, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import swal from "sweetalert";

import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { AlignCenter, TextCenter } from "react-bootstrap-icons";

var bnr = require("./../../images/banner/bnr1.jpg");

function Shopchekout() {
  const [show, setShow] = useState(true);
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cart.cartItems);

  const history = useHistory();
  const [checkoutInput, setCheckoutInput] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    address: "",
    aparment: "",
    city: "",
    state: "",
    postcode: "",
  });
  const [error, setError] = useState([]);
  const handleInput = (e) => {
    e.persist();
    setCheckoutInput({ ...checkoutInput, [e.target.name]: e.target.value });
  };
  const submitOrder = (e) => {
    e.preventDefault();

    const data = [
      {
        id: 1,
        firstname: checkoutInput.firstname,
        lastname: checkoutInput.lastname,
        phone: checkoutInput.phone,
        email: checkoutInput.email,
        address: checkoutInput.address,
        apartment: checkoutInput.apartment,
        postcode: checkoutInput.postcode,
        city: checkoutInput.city,
        state: checkoutInput.state,
      },
      {
        id: 2,
        firstname: checkoutInput.firstname,
        lastname: checkoutInput.lastname,
        phone: checkoutInput.phone,
        email: checkoutInput.email,
        address: checkoutInput.address,
        apartment: checkoutInput.apartment,
        postcode: checkoutInput.postcode,
        city: checkoutInput.city,
        state: checkoutInput.state,
      },
    ];
    axios.post("https://cakes.manipur.ml/api/order/", data).then((res) => {
      if (res.data.status === 200) {
        alert("Order Placed Successfully".res.data.message, "success");
        setError([]);
        history.push("/thank-you");
      } else if (res.data.status === 422) {
        alert("All fields are mandatory", "", "error");
        setError(res.data.errors);
      }
    });
  };

  const subtotal = useMemo(() => {
    return productList.reduce((acc, p) => acc + p.price, 0);
  }, [productList]);

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Checkout</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>Home</Link>
                  </li>
                  <li>Checkout</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner">
          <div
            className="container"
            style={{ display: "flex", textalign: "center" }}
          >
            <div>
              <h1 className="text m-20"> Most recently used</h1>
              <div
                className="flex justify-center"
                style={{ textAlign: "center" }}
              >
                <h3>TestAddress1</h3>
                <p>
                  Singjamei,Near Market
                  <br />
                  Imphal, Manipur 795001
                  <br />
                  India
                  <br />
                  9524235686
                </p>
                <Link to={"/order-place"}>
                  <button
                    className="btn button-lg btnhover btn-block"
                    mg="2"
                    type="button"
                  >
                    Dilivered to this Address
                  </button>
                </Link>
                <button> Edit</button>
                <button>Delete</button>
                <hr style={{ padding: "20px" }}></hr>

                <h3> TestAddress2</h3>
                <p>
                  Singjamei,Near Market
                  <br />
                  Imphal, Manipur 795001
                  <br />
                  India
                  <br />
                  9524235686
                </p>
                <Link to={"/order-place"}>
                  <button
                    className="btn button-lg btnhover btn-block"
                    mg="2"
                    type="button"
                  >
                    Dilivered to this Address
                  </button>
                </Link>
                <button> Edit</button>
                <button>Delete</button>

                <hr style={{ padding: "20px" }}></hr>
              </div>
              <button
                type="button"
                style={{ marginright: "150px" }}
                onClick={() => setShow(!show)}
              >
                {show === true ? "Add new Address" : "Back"}
              </button>
            </div>

            <br />
            <br />
            <br />

            <form className="shop-form">
              <div className="row" style={{ marginleft: "150px" }}>
                {!show && (
                  <div className="col-lg-12 col-md-12 m-b30 ml-150">
                    <h3>Billing & Shipping Address</h3>
                    <div className="form-group">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option value="">Singjmei</option>
                          <option value="">Kwakeithel</option>
                          <option value="">Uripok</option>
                          <option value="">Yiaskul</option>
                          <option value="">Keisamthong</option>
                          <option value="">Keisampat</option>
                          <option value="">Heirangoithong</option>
                          <option value="">Mongsangei</option>
                          <option value="">Tiddim</option>
                          <option value="">Nagampal</option>
                          <option value="">Thangmeiband</option>
                          <option value="">Aruba</option>
                          <option value="">Australia</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="firstname"
                          onChange={handleInput}
                          value={checkoutInput.firstname}
                          className="form-control"
                          placeholder="First Name"
                        />
                        <small className="text-danger">{error.firstname}</small>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="lastname"
                          onChange={handleInput}
                          value={checkoutInput.lastname}
                          className="form-control"
                          placeholder="Last Name"
                        />
                        <small className="text-danger">{error.lastname}</small>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        name="address"
                        onChange={handleInput}
                        value={checkoutInput.address}
                        className="form-control"
                        placeholder="Address"
                      />
                      <small className="text-danger">{error.address}</small>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="apartment"
                          onChange={handleInput}
                          value={checkoutInput.apartment}
                          className="form-control"
                          placeholder="Apartment, suite, unit etc."
                        />
                        <small className="text-danger">{error.apartment}</small>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="city"
                          onChange={handleInput}
                          value={checkoutInput.city}
                          className="form-control"
                          placeholder="Town / City"
                        />
                        <small className="text-danger">{error.city}</small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="state"
                          onChange={handleInput}
                          value={checkoutInput.state}
                          className="form-control"
                          placeholder="State / County"
                        />
                        <small className="text-danger">{error.state}</small>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="postcode"
                          onChange={handleInput}
                          value={checkoutInput.postcode}
                          className="form-control"
                          placeholder="Postcode / Zip"
                        />
                        <small className="text-danger">{error.postcode}</small>
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          name="email"
                          onChange={handleInput}
                          value={checkoutInput.email}
                          className="form-control"
                          placeholder="Email"
                        />
                        <small className="text-danger">{error.email}</small>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          name="phone"
                          onChange={handleInput}
                          value={checkoutInput.phone}
                          className="form-control"
                          placeholder="Phone"
                        />
                        <small className="text-danger">{error.phone}</small>

                        <Link to={"/order-place"}>
                          <button
                            className="btn button-lg btnhover btn-block"
                            style={{ marginleft: "150px" }}
                            mg="50"
                            type="button"
                          >
                            Go to New Address{" "}
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/*} <div className="col-lg-6 col-md-12 m-b30 m-md-b0">
                  <h3>
                    <button
                      className="btn-link text-black"
                      type="button"
                      data-toggle="collapse"
                      data-target="#different-address"
                    >
                      Ship to a different address{" "}
                      <i className="fa fa-angle-down"></i>
                    </button>
                  </h3>

                  <div id="different-address" className="collapse">
                    <p>
                      If you have shopped with us before, please enter your
                      details in the boxes below. If you are a new customer
                      please proceed to the Billing & Shipping section.
                    </p>
                    <div className="form-group">
                      <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Control as="select">
                          <option value="">Åland Islands</option>
                          <option value="">Afghanistan</option>
                          <option value="">Albania</option>
                          <option value="">Algeria</option>
                          <option value="">Andorra</option>
                          <option value="">Angola</option>
                          <option value="">Anguilla</option>
                          <option value="">Antarctica</option>
                          <option value="">Antigua and Barbuda</option>
                          <option value="">Argentina</option>
                          <option value="">Armenia</option>
                          <option value="">Aruba</option>
                          <option value="">Australia</option>
                        </Form.Control>
                      </Form.Group>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="First Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Last Name"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Address"
                      />
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Apartment, suite, unit etc."
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Town / City"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="State / County"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Postcode / Zip"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          placeholder="Phone"
                        />
                      </div>
                    </div>
                    <p>
                      Create an account by entering the information below. If
                      you are a returning customer please login at the top of
                      the page.
                    </p>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      placeholder="Notes about your order, e.g. special notes for delivery"
                    ></textarea>
                  </div>
                
                </div>
                */}
              </div>
            </form>
            {/*}  <div className="dlab-divider bg-gray-dark text-gray-dark icon-center">
              <i className="fa fa-circle bg-white text-gray-dark"></i>
            </div>
              */}

            {/*}
            <div className="row">
              <div className="col-lg-6">
                <h3>Your Order</h3>
                <table className="table-bordered check-tbl">
                  <thead>
                    <tr>
                      <th>IMAGE</th>
                      <th>PRODUCT NAME</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productList.map((product) => {
                      console.log(product);
                      return (
                        <tr>
                          <td>
                            <img src={product.imageUrl} alt="" />
                          </td>
                          <td>Cup Cake</td>
                          <td className="product-price">${product.price}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div className="col-lg-6">
                <form className="shop-form">
                  <h3>Order Total</h3>
                  <table className="table-bordered check-tbl">
                    <tbody>
                      <tr>
                        <td>Order Subtotal</td>
                        <td className="product-price">Rs{subtotal}</td>
                      </tr>
                      <tr>
                        <td>Shipping</td>
                        <td>Free Shipping</td>
                      </tr>
                      <tr>
                        <td>Coupon</td>
                        <td className="product-price">$28.00</td>
                      </tr>
                      <tr>
                        <td>Total</td>
                        <td className="product-price-total">Rs{subtotal}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className="form-group">
                    <button
                      className="btn button-lg btnhover btn-block"
                      mg="2"
                      type="button"
                      onClick={submitOrder}
                    >
                      Place Order Now{" "}
                    </button>
                    <Link to={"/pal"}>
                      {" "}
                      <button
                        className="btn button-lg btnhover btn-block"
                        type="button"
                      >
                        PayPal{" "}
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
             */}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shopchekout;
