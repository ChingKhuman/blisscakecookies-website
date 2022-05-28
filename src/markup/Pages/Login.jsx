import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import { connect, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
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

<Form onSubmit={onLogin}>
  <Form.Group className="mb-3 w-25 p-3 mx-auto"  controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  value={email} 
                            onChange={(e) => setEmail(e.target.value)} />
                             {errors.email && <div>{errors.email}</div>}
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3 w-25 p-3 mx-auto" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" value={password} 
                            onChange={(e) => setPassword(e.target.value)} />
                              {errors.password && <div>{errors.password}</div>}
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox"  />
  </Form.Group>
  <Button variant="primary mr-5" type="submit">
    Login
  </Button>
  <Button variant="primary" type="submit" href="/signup">
    Sign up
  </Button>
</Form>
                
                
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