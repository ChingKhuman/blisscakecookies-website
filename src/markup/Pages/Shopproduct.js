import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "./../Layout/Header";
import Footer from "./../Layout/Footer";
import { useParams } from "react-router-dom";
import { addToCart, removeFromCart } from "../../redux/action/CartAction";
import { useDispatch } from "react-redux";
import axios from "axios";

var img1 = require("./../../images/banner/bnr1.jpg");

const Shopproduct = () => {
  const { id } = useParams();
  const [data, setData] = React.useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    let headConfig = {
      Accept: "application/json",
      "Content-type": "application/json",
    };
    //  const res = await axios.get()
    axios
      .get(`http://172.105.36.218:8011/api/product/${id}/`, headConfig)
      .then((response) => {
        console.log("response --- " + JSON.stringify(response.data));
        setData(response.data);
      })
      .catch((e) => {
        console.log("error ===== " + JSON.stringify(e));
      });
  }, [null]);

  const [cartbtn, setCartBtn] = useState("Add to Cart");

  const handleCart = (data) => {
    if (cartbtn === "Add to Cart") {
      dispatch(addToCart(data));
      setCartBtn("Remove from Cart");
    } else {
      dispatch(removeFromCart(data));
      setCartBtn("Add to Cart");
    }
  };

  return (
    <>
      <Header />
      <div className="page-content bg-white">
        <div
          className="dlab-bnr-inr overlay-black-middle"
          style={{ backgroundImage: "url(" + img1 + ")" }}
        >
          <div className="container">
            <div className="dlab-bnr-inr-entry">
              <h1 className="text-white">Shop Details</h1>

              <div className="breadcrumb-row">
                <ul className="list-inline">
                  <li>
                    <Link to={"./"}>
                      <i className="fa fa-home"></i>
                    </Link>
                  </li>
                  <li>Shop Details</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="content-block">
          <div className="section-full content-inner-1 bg-gray-light">
            <div className="container woo-entry">
              <div className="row">
                <div className="col-lg-6 m-b30">
                  <div
                    className="product-gallery on-show-slider lightgallery"
                    id="lightgallery"
                  >
                    <div className="dlab-box">
                      <div className="dlab-thum-bx">
                        <img src={data.image} alt="" />
                        <span
                          data-exthumbimage="images/product/item2.jpg"
                          data-src={require("./../../images/product/item2.jpg")}
                          className="check-km"
                          title="Image 1 Title will come here"
                        >
                          <i className="fa fa-search"></i>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-6 m-b30">
                  <form className="cart sticky-top">
                    <div className="dlab-post-title">
                      <h4 className="post-title">{data.name}</h4>;
                      <h3 className="m-b10">{data.description}</h3>
                      <div className="dlab-divider bg-gray tb15">
                        <i className="icon-dot c-square"></i>
                      </div>
                    </div>

                    <div className="relative">
                      <h3 className="m-tb10">Rs{data.price} </h3>;
                      <div className="shop-item-rating">
                        <span className="rating-bx">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star-o"></i>
                          <i className="fa fa-star-o"></i>
                        </span>
                        <span>4.5 Rating</span>
                      </div>
                    </div>

                    <div className="shop-item-tage">
                      <span>Tags :- </span>
                      <Link to={""}>Cake</Link>
                      <Link to={""}>Coffee</Link>
                      <Link to={""}>Pastry</Link>
                    </div>
                    <div className="dlab-divider bg-gray tb15">
                      <i className="icon-dot c-square"></i>
                    </div>
                    <div className="row">
                      <div className="m-b30 col-md-7 col-sm-8">
                        <h6>Product Size</h6>
                        <div
                          className="btn-group product-item-size"
                          data-toggle="buttons"
                        >
                          <label className="btn">
                            <input name="options" id="option7" type="radio" />{" "}
                            Large
                          </label>
                          <label className="btn active">
                            <input name="options " id="option8" type="radio" />{" "}
                            Medium
                          </label>
                          <label className="btn">
                            <input name="options" id="option9" type="radio" />{" "}
                            Small
                          </label>
                        </div>
                      </div>

                      <div className="m-b30 col-md-5 col-sm-4">
                        <h6>Select quantity</h6>
                        <div className="quantity btn-quantity style-2"></div>
                      </div>
                      <div className="m-b30 col-md-12 col-sm-12">
                        <h6>Add toppings </h6>
                        <div
                          className="btn-group product-item-size"
                          data-toggle="buttons"
                        >
                          <label className="btn">
                            <input name="options" id="veggies" type="radio" />{" "}
                            Veggies
                          </label>
                          <label className="btn active">
                            <input name="options " id="medium" type="radio" />{" "}
                            Medium
                          </label>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
                <button
                  onClick={() => handleCart(data)}
                  className="btn btnhover radius-xl"
                >
                  <i className="ti-shopping-cart"></i>
                  {cartbtn}
                </button>
              </div>
            </div>
          </div>

          {/* <Owl /> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Shopproduct;
