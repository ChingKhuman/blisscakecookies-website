import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { loginAction } from '../../redux/action/Authaction';
import Header from '../Layout/Header'

function Login(props) {


  const [email, setEmail] = useState('');
    let errorsObj = {email: '', password: ''};
    const [errors, setErrors] = useState(errorsObj);
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();

    function onLogin(e){
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
                
            dispatch(loginAction(email, password, props.history));
        }
  return (
    <>
      <Header/>
        <div className="flex justify-center" 
                style={{ textAlign: "center"  }} >
            <div className="p-a30 bg-gray clearfix radius-sm "
            >
                <h1 className="text-2x1 font-extrabold ">Login</h1>
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

                
                <form onSubmit={onLogin}>
                    <div  className='container' style={{fontSize:"30px"}}>
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
                    <div  className='container' style={{fontSize:"30px"}}>
                        <label>Password</label>
                        <div>
                            <input
                            type="password"
                            className="border border-black-300 p-1 w-full"
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        {errors.password && <div>{errors.password}</div>}
                    </div>
                    <div className='col-lg-12'>
                    <button
                    type="submit" className="btn btnhover">Login</button>
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

export default connect(mapStateToProps)(Login)