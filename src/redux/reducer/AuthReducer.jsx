import { SIGNUP_CONFIRMED_ACTION, LOGIN_FAILED_ACTION, LOGOUT_ACTION,
LOGIN_CONFIRMED_ACTION, 
SIGNUP_FAILED_ACTION} from "../action/Authaction"

const initialState= {
  auth: {
     
    email: '',    
    password: '',
    localId: '',
    expiresIn: '',
    idToken: '',
    token: '',

  },
  errorMessage: '',
  successMessage: '',
  showLoading: false,
};
export function AuthReducer(state = initialState, action) {

  if (action.type === SIGNUP_CONFIRMED_ACTION) {
    
    return {
      ...state,
      auth: action.payload,
      errorMessage: '',
      successMessage: 'SignUp Successful',
      showLoading: false,
    };
    }

    if (action.type === SIGNUP_FAILED_ACTION) {
      return {
        ...state,
        errorMessage: action.payload,
      };
    }
   
   
    if (action.type === LOGOUT_ACTION) {
      return {
        ...state,
        auth: {
          email: '',    
          password: '',
          localId: '',
          expiresIn: '',
          idToken: '',
          token: '',
        },
      };
    }

  if (action.type === LOGIN_CONFIRMED_ACTION) {
    return {
      ...state, 
      auth: action.payload,
      errorMessage: '',
      successMessage: 'Login Successfully Completed',

    }
  }


  if (
    action.type === SIGNUP_FAILED_ACTION  ||
    action.type === LOGIN_FAILED_ACTION 

    ) {
    return {
      ...state,
      errorMessage: action.payload,
      successMessage: '',
    
    };
    }

    return state;
  }
    
  {/*}
  if (action.type === LOGOUT_ACTION) {
    return {
      ...state,
      auth: {
        token: '',
      }
    }
  }
*/}
