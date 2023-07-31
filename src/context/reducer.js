import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
  TOGGLE_DROPDOWN,
  TOGGLE_OVERLY,
  LOGOUT_USER,
  TOGGLE_SIDEBAR,
  CLOSE_DROPDOWN_OVERLY,
  UPDATE_USER_BEGIN,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_ERROR,

} from './actions'
import { initialState } from './appContext'

export default function reducer(state , action) {
  if(action.type ===TOGGLE_SIDEBAR){
    return{
      ...state,
      showSidebar: !state.showSidebar

    }
  }
  if(action.type === TOGGLE_DROPDOWN){
    return{
      ...state,
      isDropdownOpen: !state.isDropdownOpen
    }
  }
  if(action.type === TOGGLE_OVERLY){
    return{
      ...state,
      isOverlyOpen: !state.isOverlyOpen

    }
  }
  if(action.type === CLOSE_DROPDOWN_OVERLY){
    return{
      ...state,
      isOverlyOpen: false,
      isDropdownOpen: false,
      showSidebar:false
    }
  }
   if(action.type === DISPLAY_ALERT){
      return {...state,
        showAlert:true,
        alertText: "please provide all values!",
        alertType: "danger"
    }
   }
   if(action.type === CLEAR_ALERT){
        return {...state,
            showAlert:false,
            alertText: "",
            textType: ""
        }
   }
   if(action.type === REGISTER_USER_BEGIN){
     return{...state, isLoading: true}
   }
   if(action.type === REGISTER_USER_SUCCESS){
    return{
      ...state,
      isLoading: false,
      showAlert: true,
      alertType:"success",
      alertText: "User Created! Redirection...",
      user:action.payload.user,
      token:action.payload.token,
      userLoaction: action.payload.location,
      userRegistered: true
    }
   }
   if(action.type === REGISTER_USER_ERROR){
    return{
      ...state,
      isLoading:false,
      showAlert: true,
      alertType:"danger",
      alertText: action.payload.msg,
    }
  }
 if(action.type === LOGIN_USER_BEGIN){
    return{...state, isLoading: true}
  }
  
  if(action.type === LOGIN_USER_SUCCESS){
   return{
     ...state,
     isLoading: false,
     showAlert: true,
     alertType:"success",
     alertText: 'Login User. Redirecting...',
     user:action.payload.user,
     token:action.payload.token,
     userLoaction: action.payload.location,
     userRegistered: true

   }
  }
  if(action.type === LOGIN_USER_ERROR){
   return{
     ...state,
     isLoading:false,
     showAlert: true,
     alertType:"danger",
     alertText: action.payload.msg,
   }
 }
 if(action.type === LOGOUT_USER){
  return{
      ...initialState,
      user: null,
      token: null,
      location: '',
      jobLocation: '',
      isLoading:false,
  }
}
 if (action.type === UPDATE_USER_BEGIN) {
  return { ...state, isLoading: true }
}

if (action.type === UPDATE_USER_SUCCESS) {
  return {
    ...state,
    isLoading: false,
    token:action.payload.token,
    user: action.payload.user,
    userLocation: action.payload.location,
    showAlert: true,
    alertType: 'success',
    alertText: 'User Profile Updated!',
  }
}
if (action.type === UPDATE_USER_ERROR) {
  return {
    ...state,
    isLoading: false,
    showAlert: true,
    alertType: 'danger',
    alertText: action.payload.msg,
  }
}
  
}
