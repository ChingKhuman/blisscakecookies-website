import axios from "axios";
import {
  loginAction,
  loginConfirmedAction,
  logout,
  logoutAction,
} from "../redux/action/Authaction";
import { LOGOUT } from "../redux/actionType";

export function signUp(email, password, user_name, mobile) {
  const data = {
    email,
    password,
    user_name,
    mobile,
    token: true,
  };
  return axios.post("http://172.105.36.218:8011/api/register/", data);
}

export function login(email, password) {
  const data = {
    email,
    password,
    token: true,
  };
  return axios.post("http://172.105.36.218:8011/api/login/", data);
}

export function formatError(errorResponse) {
  switch (errorResponse.error.message) {
    case "EMAIL_EXISTS":
      return "Email already exists";

    case "EMAIL_NOT_FOUND":
      return "Email not found";
    case "INVALID_PASSWORD":
      return "Invalid Password";
    case "USER_DISABLED":
      return "User Disabled";

    default:
      return "";
  }
}

export function saveTokenInLocalStorage(tokenDetails) {
  tokenDetails.expireDate = new Date(
    new Date().getTime() + tokenDetails.expiresIn * 10000
  );
  localStorage.setItem("userDetails", JSON.stringify(tokenDetails));
}

export function runLogoutTimer(dispatch, timer) {
  setTimeout(() => {
    dispatch(logout());
    //  console.log(setTimeout)
  }, 100000);
}

export function checkAutoLogin(dispatch, history) {
  const tokenDetailsString = localStorage.getItem("userDetails");
  let tokenDetails = "";
  if (!tokenDetailsString) {
    dispatch(logout(history));
    return;
  }

  tokenDetails = JSON.parse(tokenDetailsString);
  let expireDate = new Date(tokenDetails.expireDate);
  let todaysDate = new Date();

  if (todaysDate > expireDate) {
    dispatch(logout(history));
    return;
  }
  dispatch(loginConfirmedAction(tokenDetails));

  const timer = expireDate.getTime() - todaysDate.getTime();
  runLogoutTimer(dispatch, timer);
}
