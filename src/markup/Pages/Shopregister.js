import axios from "axios";
import React, { useState } from "react";
import Header from "../Layout/Header";

function Shopregister() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = () => {
    axios
      .post("https://cakes.manipur.ml/api/register/", {
        email: email,
        password: password,
      })
      .then((response) => {
        if (response.data.message) {
          alert("Register success");
        } else {
          //      setLoginStatus(response.data[0].email);
        }
        console.log(response.data);
      });
  };
  return (
    <>
      <Header />
      <div>
        <div className="register">
          <h1>Register</h1>
          <input
            type="username"
            placeholder="Username..."
            onChange={(e) => {
              setUserName(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Username..."
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password..."
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />

          <button onClick={register}> Register</button>
        </div>
      </div>
    </>
  );
}

export default Shopregister;
{
  /*}

import React from 'react';
import { Link } from 'react-router-dom';
import Header from './../Layout/Header';
import Footer from './../Layout/Footer';

var bnr = require('./../../images/banner/bnr1.jpg');

const Shopregister = ( { history } )=> {
	const submitHandler = (e) => {
		e.preventDefault();
		console.log()
		alert("Register-Success");
		history.push("/");
	};
	return(
		<>
			<Header />
			<div className="page-content bg-white">
				<div className="dlab-bnr-inr overlay-black-middle bg-pt" style= {{backgroundImage:"url(" + bnr + ")"}}>
					<div className="container">
						<div className="dlab-bnr-inr-entry">
							<h1 className="text-white">Register</h1>
							
							<div className="breadcrumb-row">
								<ul className="list-inline">
									<li><Link to={'./'}>Home</Link></li>
									<li>Register</li>
								</ul>
							</div>
							
						</div>
					</div>
				</div>
				<div className="section-full content-inner-2 shop-account">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-center">
								<h2 className="m-b40 m-md-b20">Create An Account</h2>
							</div>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="p-a30 border-1 max-w500 m-auto radius-sm">
									<div className="tab-content">
										<form id="login" className="tab-pane active" onSubmit={(e) => submitHandler(e)}>
											<h3 className="m-b5">Personal Information</h3>
											<p>If you have an account with us, please log in.</p>
											<div className="form-group">
												<label>First Name *</label>
												<input required="" className="form-control" placeholder="First Name" type="text" />
											</div>
											<div className="form-group">
												<label>Last Name *</label>
												<input required="" className="form-control" placeholder="Last Name" type="text" />
											</div>
											<div className="form-group">
												<label>E-Mail *</label>
												<input placeholder="hello@example.com" className="form-control" type="email" />
											</div>
											<div className="form-group">
												<label>Password *</label>
												<input defaultValue="Password" className="form-control " placeholder="Type Password" type="password" />
											</div>
											<div className="text-left">
												<button  type="submit" className="btn btnhover">CREATE</button>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer  />
		</>
	
	)
}

export default  Shopregister;

*/
}
