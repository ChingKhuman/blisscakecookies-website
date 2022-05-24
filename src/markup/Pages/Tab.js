import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import { addToCart } from "../../redux/action/CartAction";
import axios from "axios";

const Popupss = () => {
  const [activeTab, setActiveTab] = useState(1);

  const [categories, setCategories] = useState([]);
  const [catbyProducts, setCatbyProducts] = useState([]);

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  /*
  const filteredProductList = useMemo(() => {
    return productList.filter((p) => p.category.id === activeTab);
  }, [productList, activeTab]);

  useEffect(() => {
    dispatch(loadProducts());
  }, []);*/
  useEffect(() => {
    let headConfig = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
    //  const res = await axios.get()
    axios
      .get("http://172.105.36.218:8011/api/category/", headConfig)
      .then((response) => {
        console.log("response --- " + JSON.stringify(response.data));
        setCategories(response.data);
        getProducts(1);
      })
      .catch((e) => {
        console.log("error ===== " + JSON.stringify(e));
      });
  }, [null]);

  const getProducts = async (id) => {
    let headConfig = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
    const res = await axios.get(
      `http://172.105.36.218:8011/api/product/productbycategory/?category=${id}`
    );

    console.log("---------------------" + JSON.stringify(res));
    setCatbyProducts(res.data);
  };

  return (
    <div>
      <div className="section-full bg-white pizza-full-menu">
        <div>
          <div className="bg-primary pizza-items">
            <div className="container">
              <ul className="nav nav-tabs pizza-items filters">
                {categories.map((category, idx) => (
                  <li className="nav-item item">
                    <input type="radio" />
                    <Link
                      to={""}
                      className={
                        ({ active: activeTab === idx + 1 },
                        "item-icon-box nav-link")
                      }
                      onClick={() => {
                        toggle(idx + 1);
                        getProducts(category.id);
                      }}
                    >
                      <i className="flaticon-pizza-slice"></i>
                      <span>{category.name}</span>
                    </Link>
                  </li>
                ))}
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
              {catbyProducts.map((data) => {
                return (
                  <div key={data.id} className="dz-col col m-b30">
                    <div className="item-box shop-item style2">
                      <div className="item-img" style={{ height: "200px" }}>
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
