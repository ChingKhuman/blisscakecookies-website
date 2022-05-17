import React, { useEffect, useState } from "react";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { Link, useParams } from "react-router-dom";
import CountUp from "react-countup";
import OurPartners from "./../Element/OurPartners";
import Slider from "./../Element/Slider";
import Tab from "./../Pages/Tab";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import ProductService from "../../redux/services/ProductService";

//Images
var img1 = require("./../../images/background/bg5.jpg");
var img2 = require("./../../images/background/bg1.jpg");
var img3 = require("./../../images/background/bg5.jpg");
var img4 = require("./../../images/background/bg4.jpg");

const blogNews = [
  {
    image: require("./../../images/blog/grid/cakeimg5.jpg"),
    title: "Understand The Background Of Bakery Now.",
  },
  {
    image: require("./../../images/blog/grid/cakeimg23.jpg"),
    title: "Seven Reliable Sources To Learn About Bakery.",
  },
  {
    image: require("./../../images/blog/grid/cakeimg21.jpg"),
    title: "Ten Places That You Can Find Bakery.",
  },
];

const Index1 = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  useEffect(() => {
    const config = {
      headers: {
        Authorization: "Bearer" + localStorage.getItem("token"),
      },
    };
    axios.get("user").then(
      (response) => {
        console.log(response);
      },
      (err) => {
        console.log(err);
      }
    );
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
        <div className="content-block">
          <Slider />
          <div
            className="section-full content-inner-3"
            style={{
              backgroundImage: "url(" + img1 + ")",
              backgroundSize: "50%",
            }}
          ></div>
          <div></div>

          <div className="section-full bg-white">
            <div className="container-fluid">
              <div className="row">
                {productList.slice(0, 4).map((products, id) => {
                  console.log(products);
                  return (
                    <div className="col-lg-3 col-md-6 col-sm-6">
                      <div className="port-box1 text-white">
                        <div className="dlab-media" style={{ height: "400px" }}>
                          <Link to={`/shop-product-details/${products.id}`}>
                            <img src={products.image} alt="" />
                          </Link>
                        </div>

                        <div className="dlab-info">
                          <h2 className="title">{products.name}</h2>
                          {/*     <h2 className="description">{products.description}</h2>
                           */}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <Tab />
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Index1;
