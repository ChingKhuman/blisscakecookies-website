import React, { useState, useEffect, useMemo } from "react";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { loadProducts } from "../../redux/action/ProductAction";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addToCart } from "../../redux/action/CartAction";
import Index1 from "../Pages/Index1";

const Popupss = () => {
  const [activeTab, setActiveTab] = useState(1);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);
  const { products, loading, error } = productList;

  const filteredProductList = useMemo(() => {
    return productList.filter((p) => p.category.id === activeTab);
  }, [productList, activeTab]);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  return (
    <div>
      <div class="section-full bg-white pizza-full-menu">
        <div tabs>
          <div className="bg-primary pizza-items">
            <div className="container">
              <ul className="nav nav-tabs pizza-items filters">
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 1 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(1);
                    }}
                  >
                    <i className="flaticon-pizza-slice"></i>
                    <span>Cakes</span>
                  </Link>
                </li>
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 2 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(2);
                    }}
                  >
                    <i className="flaticon-burger"></i>
                    <span>COLA</span>
                  </Link>
                </li>
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 3 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(3);
                    }}
                  >
                    <i className="flaticon-french-fries"></i>
                    <span>VANILLA</span>
                  </Link>
                </li>
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 4 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(4);
                    }}
                  >
                    <i className="flaticon-cola"></i>
                    <span>SANDWICH</span>
                  </Link>
                </li>
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 5 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(5);
                    }}
                  >
                    <i className="flaticon-hot-dog"></i>
                    <span>FRIES</span>
                  </Link>
                </li>
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 6 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(6);
                    }}
                  >
                    <i className="flaticon-cookies"></i>
                    <span>Blackberry</span>
                  </Link>
                </li>
                <li className="nav-item item">
                  <input type="radio" />
                  <Link
                    className={classnames(
                      { active: activeTab === 7 },
                      "item-icon-box nav-link"
                    )}
                    onClick={() => {
                      toggle(7);
                    }}
                  >
                    <i className="flaticon-sandwich"></i>
                    <span>COOKIES</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="content-inner">
          <div className="container-fluid">
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {/* CAKE SECTION */}
              {filteredProductList.map((data, idx) => {
                return (
                  <div key={idx} className="dz-col col m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img" style={{ height: "300px" }}>
                        <img src={data.image} alt="cake" />
                      </div>
                      <div className="item-info text-center">
                        <h4 className="item-title">
                          <Link to={`/shop-product-details/${data.id}`}>
                            {data.name}
                          </Link>
                        </h4>
                        <h5 className="price text-primary">
                          <del>₹ {data.price}</del>
                          <span>₹ {data.offer_price}</span>
                        </h5>
                        <div className="cart-btn">
                          <Button
                            onClick={() => {
                              //     console.log("add to cart", 1);
                              dispatch(addToCart(data, 1));
                            }}
                            className="btn btnhover radius-xl"
                          >
                            <i className="ti-shopping-cart"></i> Add To Cart
                          </Button>
                        </div>
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
  );
};

export default Popupss;
