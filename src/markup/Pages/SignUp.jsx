import React, { useState } from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { signupAction } from "../../redux/action/Authaction";
import Header from "../Layout/Header";



function SignUp(props) {

    
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    let errorsObj = {email: '', password: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

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
                
            dispatch(signupAction(email, password, props.history));
        }
    return (
        <>
      <Header/>
      <div className="flex justify-center"
                style={{ textAlign: "center" }} >
            <div className='w-1/3 shadow p-3 border border-grey-400'>
                <h1 className="text-1x1 font-extrabold">Sign Up</h1>
                <hr/>
                <h3 className="text-2x1">Sign Up currently not available
                Select Login option with "admin@gmail.com" and "admin"
                as a login and password</h3>

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
                <form onSubmit={onSignUp}>
                <div className='container' style={{fontSize:"20px"}}>
                        <label>Username</label>
                        <div>
                            <input
                            type="text"
                            className="border border-grey-300 p-1 w-full"
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)}
                            />
                            
                        </div>
                        {errors.username && <div>{errors.username}</div>}
                    </div>
                    <div className='container' style={{fontSize:"20px"}}>
                        <label>Email</label>
                        <div>
                            <input
                            type="text"
                            className="border border-grey-300 p-1 w-full"
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)}
                            />                            
                        </div>
                        {errors.email && <div>{errors.email}</div>}
                    </div>
                    <div className='container' style={{fontSize:"20px"}}>
                        <label>Password</label>
                        <div>
                            <input
                            type="password"
                            className="border border-grey-300 p-1 w-full"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    <div className='col-lg-12'>
                    <button
                    type="submit" className="btn btnhover">Sign up</button>
                    <Link to={"/Login"}>
                    <button
                    type="submit" className="btn btnhover">Go to Login</button>
                    </Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        errorMessage: state.auth.errorMessage,
        successMesssage: state.auth.successMessage,
        
    };
};

export default connect(mapStateToProps)(SignUp);