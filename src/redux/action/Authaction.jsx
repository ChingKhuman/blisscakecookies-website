import { formatError, login, runLogoutTimer,
     saveTokenInLocalStorage, signUp }
      from "../../services/AuthService";

export const SIGNUP_CONFIRMED_ACTION = '[signup action] confirmed signup';
export const SIGNUP_FAILED_ACTION = '[signup action] failed signup';
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAILED_ACTION = '[login action] failed login';
export const LOGOUT_ACTION = '[Logout action] logout action';

export  function signupAction(email, password, history) {
    return (dispatch) => {
        signUp(email, password).then((response) => {
            saveTokenInLocalStorage(response.data);
   //         console.log(response);
          runLogoutTimer(dispatch, response.data.expiresIn * 1000);
            dispatch(confirmedSignupAction(response.data));
            history.push('/shop-checkout')
        })
                .catch((error) => {
                    const errorMessage = formatError(error.response.data);
                    dispatch(signupFailedAction(errorMessage));
  //          console.log(error.response)
        })
    };
}

export function loginAction(email, password, history) {
    return (dispatch) => {
        login(email, password)
        .then((response) => {
            saveTokenInLocalStorage(response.data);
            runLogoutTimer(dispatch, response.data.expiresIn * 1000); 
           dispatch(loginConfirmedAction(response.data));
           history.push('/shop-checkout')
        })
        .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(loginFailedAction(errorMessage));
        })
    };
}
export function loginFailedAction(data) {
    return {
        type: LOGIN_FAILED_ACTION,
        payload: data,
    }
}
export function loginConfirmedAction(data) {
    return {
        
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    }
}

export function logoutAction(history) {
    localStorage.removeItem('userDetails');
 //   history.push('/login')
    return {
        
        type: LOGOUT_ACTION,        
    };
}

export function confirmedSignupAction(payload) {
return {
    type: SIGNUP_CONFIRMED_ACTION,
    payload,
}
}
export function signupFailedAction(message) {
    return {
        type: SIGNUP_FAILED_ACTION,
        payload: message,
    };
}

{/*}
export const LOGIN_CONFIRMED_ACTION = '[login action] confirmed login';
export const LOGIN_FAIL_ACTION = '[login action] failed login';
export const LOGOUT_ACTION = '[logout action] failed logout';
export  function loginAction(email, password) {
    return (dispatch) => {

    }
}


export function loginAction(email, password) {
    return (dispatch) => {
        login(email, password)
        .then((response) => {
           dispatch(loginConfirmedAction(response.data));
        })
        .catch((error) => {
            const errorMessage = formatError(error.response.data);
            dispatch(loginFailedAction(errorMessage));
        })
    };
}
export function loginFailedAction(data) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload: data,
    }
}
export function loginConfirmedAction(message) {
    return {
        type: LOGIN_FAIL_ACTION,
        payload: message,
    }
}
export function logoutAction() {
    return {
        type: LOGOUT_ACTION,
    }
}

export function confirmedLoginAction(payload) {
    return {
        type: LOGIN_CONFIRMED_ACTION,
        payload,
    };
}

*/}