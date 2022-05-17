import React, { Component, useMemo } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  clearItems,
  increase,
  addToCart,
  removeFromCart,
  updateCartUnits,
} from "../../redux/action/CartAction";

var img = require("./../../images/banner/bnr3.jpg");

const Shopcart = ({ id }) => {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cart.cartItems);
  const subtotal = useMemo(() => {
    return productList.reduce((acc, p) => acc + p.price, 0);
  }, [productList]);

  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + img + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Cart</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>Home</Link>
                  </li>
                  <li>Shop Cart</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="section-full content-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="table-responsive m-b50">
                  <table className="table check-tbl">
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Product name</th>
                        <th>Unit Price</th>
                        {/*}   <th>Quantity</th>   */}
                        <th>Total</th>
                        <th>Close</th>
                      </tr>
                    </thead>
                    <tbody>
                      {productList.map((product) => {
                        console.log(product);
                        return (
                          <tr className="alert">
                            <td className="product-item-img">
                              <img src={product.imageUrl} alt="" />
                            </td>
                            <td className="product-item-name">
                              {product.name}
                            </td>
                            <td className="product-item-price">
                              Rs{product.price}
                            </td>

                            {/*} <td className="product-item-quantity">
                              <div className="quantity btn-quantity max-w80">
                                <Form>
                                  <Form.Group controlId="exampleForm.SelectCustom">
                                    <Form.Control
                                      as="select"
                                      custom
                                      value={product.qty}
                                      onChange={(e) => {
                                        //			dispatch(increase(id))}>
                                        console.log(e.target.value);
                                        dispatch(
                                          updateCartUnits(
                                            product,
                                            e.target.value
                                          )
                                        );
                                      }}
                                    >
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                      <option value="3">3</option>
                                      <option value="4">4</option>
                                      <option value="5">5</option>
                                    </Form.Control>
                                  </Form.Group>
                                </Form>
                              </div>
                            </td>
                                    */}

                            <td className="product-item-totle">
                              Rs{" "}
                              {parseInt(product.price) * parseInt(product.qty)}
                            </td>
                            <td className="product-item-close">
                              <button
                                onClick={() => dispatch(removeFromCart())}
                                data-dismiss="alert"
                                aria-label="close"
                                className="ti-close"
                              ></button>
                            </td>
                            <button
                              color="danger"
                              onClick={() => dispatch(clearItems())}
                              style={{ width: "140px", marginTop: "30px" }}
                            >
                              Clear Cart
                            </button>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <h3>Cart Subtotal</h3>
                <table className="table-bordered check-tbl">
                  <tbody>
                    <tr>
                      <td>Order Subtotal</td>
                      <td>{subtotal}</td>
                    </tr>
                    <tr>
                      <td>Shipping</td>
                      <td>Free Shipping</td>
                    </tr>

                    <tr>
                      <td>Total</td>
                      <td>{subtotal}</td>
                    </tr>
                  </tbody>
                </table>
                <div className="form-group">
                  <Link to={"/login"}>
                    {" "}
                    <button className="btn btnhover" type="button">
                      Checkout to Login
                    </button>{" "}
                  </Link>
                  <div>
                    <Link to={"/Shop-checkout"}>
                      {" "}
                      <button className="btn btnhover" type="button">
                        Checkout
                      </button>{" "}
                    </Link>{" "}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shopcart;
