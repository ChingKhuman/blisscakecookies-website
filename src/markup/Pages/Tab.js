import React, { useState, useEffect, useMemo } from "react";
import classnames from "classnames";
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

  const getProducts = (id) => {
    let headConfig = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
    //  const res = await axios.get()
    //alert("hello---- " + id);
    setCatbyProducts([
      {
        id: 1,
        name: "Mango Cake",
        description: "Cake made from Delicious ripe Mangoes",
        price: 800,
        offer_price: 100,
        image:
          "http://172.105.36.218:8011/media/images/mangoCake_kS3XaXE_aKPEPsC.jpeg",
        stock: 20,
        category: { id: 1, name: "Mango", description: "Cake from Mango" },
      },
      {
        id: 2,
        name: "Butter Cookies",
        description: "Butter Cookies",
        price: 100,
        offer_price: 20,
        image: "http://172.105.36.218:8011/media/images/ButterCookies1.jpg",
        stock: 20,
        category: {
          id: 2,
          name: "Cookies",
          description: "Made from Cookies flavour",
        },
      },

      {
        id: 4,
        name: "Butter Cookies",
        description: "Butter Cookies",
        price: 100,
        offer_price: null,
        image: "http://172.105.36.218:8011/media/images/ButterCookies5.jpg",
        stock: 100,
        category: {
          id: 2,
          name: "Cookies",
          description: "Made from Cookies flavour",
        },
      },
      {
        id: 5,
        name: "Vanilla Cake",
        description: "A Vanilla Cake",
        price: 800,
        offer_price: null,
        image: "http://172.105.36.218:8011/media/images/cakeimg11_OGL8SR2.jpg",
        stock: 20,
        category: { id: 5, name: "Vanilla", description: "Vanilla flavoured" },
      },
      {
        id: 6,
        name: "Strawberries Cake",
        description: "Strawberries Cake",
        price: 800,
        offer_price: 100,
        image: "http://172.105.36.218:8011/media/images/cakeimg26_WADYyyJ.jpg",
        stock: 20,
        category: {
          id: 7,
          name: "Strawberries",
          description: "Strawberries flavoured",
        },
      },
      {
        id: 7,
        name: "Pineapple Cake",
        description: "Cake made from Pineapple",
        price: 800,
        offer_price: 50,
        image: "http://172.105.36.218:8011/media/images/Cake14.jpg",
        stock: 20,
        category: {
          id: 8,
          name: "Pineapple Cake",
          description: "cake made from pineapple",
        },
      },
      {
        id: 8,
        name: "Custom Image Cake",
        description: "Cake with custom Image",
        price: 1000,
        offer_price: 100,
        image: "http://172.105.36.218:8011/media/images/cakeimg2_kEIQ1Yd.jpg",
        stock: 5,
        category: {
          id: 9,
          name: "Custom cake",
          description: "Came custom-made",
        },
      },
    ]);
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
                      className={classnames(
                        { active: activeTab === idx + 1 },
                        "item-icon-box nav-link"
                      )}
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
              {catbyProducts.map((data, idx) => {
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
