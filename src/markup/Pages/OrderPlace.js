import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import Header from "../Layout/Header";

var bnr = require("./../../images/banner/bnr1.jpg");

function OrderPlace() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.cart.cartItems);

  const history = useHistory();

  const subtotal = useMemo(() => {
    return productList.reduce((acc, p) => acc + p.price, 0);
  }, [productList]);

  return (
    <>
      <Header />
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
                <li>Order</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
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
                  <td className="product-price">N/A</td>
                </tr>
                <tr>
                  <td>Total</td>
                  <td className="product-price-total">Rs{subtotal}</td>
                </tr>
              </tbody>
            </table>

            <div className="form-group">
              <Link to={"/successfullpage"}>
                <button
                  className="btn button-lg btnhover btn-block"
                  mg="2"
                  type="button"
                >
                  Place Order Now{" "}
                </button>
              </Link>

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
    </>
  );
}

export default OrderPlace;
