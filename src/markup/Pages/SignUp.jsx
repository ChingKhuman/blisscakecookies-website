import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Display } from "react-bootstrap-icons";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupAction } from "../../redux/action/Authaction";
import Header from "../Layout/Header";



function SignUp(props) {

    
    const [user_name, setUser_Name] = useState('');
    const [email, setEmail] = useState('');
    let errorsObj = {email: '', password: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');
    const [mobile, setMobile]  = useState('');

    const dispatch = useDispatch();

    function onSignUp(e){
        e.preventDefault() 
            let error = false;
            const errorObj = { ...errorsObj} ;
            if (email === '') {
                errorObj.email = 'Email is Required';
                error = true;
            }
            if (password === '') {
                errorObj.password = 'Password is Required';
                error = true;
            }

            setErrors(errorObj);

            if(error)  return;
                
            dispatch(signupAction(email, password,user_name, mobile,  props.history));
        }
    return (

    

        
     
      <div className="flex justify-center"
                style={{ textAlign: "center" }} >
                    <Header/>
            <div className='w-1/3 shadow p-3 border border-grey-400'>
                <h1 className="text-1x1 font-extrabold">Sign Up</h1>
                <hr/>
              

                {props.errorMessage && (
                    <div className="bg-red-300 text-red-900 border border-red-900">
                    {props.errorMessage}
                    </div>
                )}
                {props.successMessage && (
                    <div className="bg-green-300 text-green-900 border border-green">
                        {props.successMessage}
                        </div>
                )}

<div>
        <Form onSubmit={onSignUp}>

        <Form.Group className="mb-1 w-25 p-3 mx-auto" controlId="formBasicEmail">
    <Form.Label>Username</Form.Label>
    <Form.Control type="email" placeholder="Username"  value={user_name} 
                            onChange={(e) => setUser_Name(e.target.value)}/>
                            {errors.user_name && <div>{errors.user_name}</div>}
    <Form.Text className="text-muted">
      
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-1 w-25 p-3 mx-auto" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  value={email} 
                            onChange={(e) => setEmail(e.target.value)}/>
   {errors.email && <div>{errors.email}</div>}
  </Form.Group>

  <Form.Group className="mb-1 w-25 p-3 mx-auto" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} 
                            onChange={(e) => setPassword(e.target.value)}  />

{errors.password && <div>{errors.password}</div>}
  </Form.Group>
  
  <Form.Group className="mb-1 w-25 p-3 mx-auto" >
    <Form.Label>Mobile</Form.Label>
    <Form.Control type="email" placeholder="Mobile"   value={mobile} 
                            onChange={(e) => setMobile(e.target.value)}/>
    {errors.mobile && <div>{errors.mobile}</div>}
   
  </Form.Group>  


  <Button variant="primary mr-5" type="submit">
    Sign In
  </Button>
  <Button variant="primary" type="submit" href="/login">
    Login
  </Button>
</Form></div>
                            </div>
        </div>
        
    )
}
const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMesssage: state.auth.successMessage,
        
    };
};

export default connect(mapStateToProps)(SignUp);