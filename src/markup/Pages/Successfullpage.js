import React from "react";
import { Link } from "react-router-dom";

function Successfullpage() {
  return (
    <div className="flex justify-center" style={{ textAlign: "center" }}>
      <h3>
        You have succesful Order
        <br />
        Our service will working on it{" "}
      </h3>
      <h2>Thank you</h2>
      <Link to={"/our-menu-2"}>
        {" "}
        <button className="btn btnhover" type="button">
          Go to HomePage
        </button>{" "}
      </Link>{" "}
    </div>
  );
}

export default Successfullpage;
