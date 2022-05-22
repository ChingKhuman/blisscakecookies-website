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

function Index1() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  let componentMounted = true;

  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.products);

  const [abc, setAbc] = React.useState([]);

  useEffect(() => {
    let headConfig = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
    //  const res = await axios.get()
    axios
      .get("http://172.105.36.218:8011/api/product/", headConfig)
      .then((response) => {
        console.log("response --- " + JSON.stringify(response.data));
        setAbc(response.data);
      })
      .catch((e) => {
        console.log("error ===== " + JSON.stringify(e));
      });
  }, [null]);

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
                {abc.slice(0, 4)?.map((products, idx) => {
                  console.log(
                    "--------------------------------------------------------"
                  );
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
