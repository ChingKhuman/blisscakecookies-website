import React, { useEffect, useState } from "react";
import Header from "../Layout/Header";
import Footer from "../Layout/Footer";
import { Link, useParams } from "react-router-dom";
import * as ReactBootStrap from "react-bootstrap";
import Slider from "../Element/Slider";
import Tab from "./Tab";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";


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

function Index1() {
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  const [productss, setProductss] = React.useState([]);

  useEffect(() => {
    let headConfig = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
    //  const res = await axios.get()
    try {
      axios
        .get("http://172.105.36.218:8011/api/product/", headConfig)
        .then((response) => {
          console.log("response --- " + JSON.stringify(response.data));
          setProductss(response.data);
        });
      setLoading(true);
    } catch (e) {
      console.log("error ===== " + JSON.stringify(e));
      return e.response;
    }
  }, []);

  const Loading = () => {
    return <>Loading....</>;
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle bg-pt"
          style={{ backgroundImage: "url(" + img1 + ")" }}
        >
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
          </div>

          <div className="section-full bg-white">
            <div className="container-fluid">
              <div className="row">
                {productss.slice(0, 4)?.map((products) => {
                  console.log(
                    "--------------------------------------------------------"
                  );
                  return (
                    <div
                      key={products.id}
                      className="col-lg-3 col-md-6 col-sm-6"
                    >
                      <div className="port-box1 text-white">
                        <div className="dlab-media" style={{ height: "400px" }}>
                          <Link to={`/shop-product-details/${products.id}`}>
                            <img
                              src={
                                loading ? (
                                  products.image
                                ) : (
                                  <ReactBootStrap.Spinner animation="border" />
                                )
                              }
                              alt=""
                            />
                          </Link>
                        </div>

                        <div className="dlab-info">
                          <h2 className="title">{products.name}</h2>
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
}

export default Index1;
