import React, { Component, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../redux/action/CartAction";
import { Button } from "react-bootstrap";

var bnr = require("./../../images/banner/bnr1.jpg");

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  useEffect(() => {
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://cakes.manipur.ml/api/product/");
      if (componentMounted) {
        setProducts(await response.clone().json());
        setLoading(false);
        console.log(products);
      }
      return () => {
        componentMounted = false;
      };
    };
    getProducts();
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };
  return (
    <>
      <Header />

      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + bnr + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Shop</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>Shop</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="section-full content-inner bg-gray-light">
            <div className="container">
              <div className="row">
                {productList.map((data, id) => {
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="item-box shop-item">
                        <div className="item-img" style={{ height: "300px" }}>
                          <Link to={`/shop-product-details/${data.id}`}>
                            <img src={data.image} alt="" />
                          </Link>
                          <div className="price">Rs{data.price}</div>
                        </div>
                        <div className="item-info text-center">
                          <h4 className="item-title">
                            <Link to={`/shop-product-details/${data.id}`}>
                              {data.name}
                            </Link>
                          </h4>
                          <Button
                            onClick={() => {
                              //     console.log("add to cart", 1);
                              dispatch(addToCart(data, 1));
                            }}
                            className="btn btnhover radius-xl"
                          >
                            <i className="ti-shopping-cart m-r5"></i> Add To
                            Cart
                          </Button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shop;
