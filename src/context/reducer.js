import {
  CLEAR_ALERT,
  DISPLAY_ALERT,
  REGISTER_USER_BEGIN,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_ERROR,
  LOGIN_USER_BEGIN,
  LOGIN_USER_SUCCESS, 
  LOGIN_USER_ERROR,
  CLOSE_MENU,
  OPEN_MENU,
  CLOSE_DROPMENU,
  OPEN_DROPDOWN,

} from './actions'

export default function reducer(state , action) {
  if(action.type === CLOSE_MENU){
    return{
      ...state,
      isMenuOpen: false

    }
  }
  if(action.type === OPEN_MENU){
    return{
      ...state,
      isMenuOpen: true
    }
  }
  if(action.type === OPEN_DROPDOWN){
    return{
      ...state,
      isDropdownOpen: true
    }
  }
  if(action.type === CLOSE_DROPMENU){
    return{
      ...state,
      isDropdownOpen: false

    }
  }

   if(action.type === DISPLAY_ALERT){
      return {...state,
        showAlert:true,
        alertText: "please provide all values!",
        alertType: "danger"
    }
   }else if(action.type === CLEAR_ALERT){
        return {...state,
            showAlert:false,
            alertText: "",
            textType: ""
        }
   }else if(action.type === REGISTER_USER_BEGIN){
     return{...state, isLoading: true}
   }else if(action.type === REGISTER_USER_SUCCESS){
    return{
      ...state,
      isLoading: true,
      showAlert: true,
      alertType:"success",
      alertText: "User Created! Redirection...",
      user:action.payload.user,
      token:action.payload.token,
      userLoaction: action.payload.location,
      userRegistered: true
    }
   }else if(action.type === REGISTER_USER_ERROR){
    return{
      ...state,
      isLoading:false,
      showAlert: true,
      alertType:"danger",
      alertText: action.payload.msg,
    }
  }
  else if(action.type === LOGIN_USER_BEGIN){
    return{...state, isLoading: true}
  }else if(action.type === LOGIN_USER_SUCCESS){
   return{
     ...state,
     isLoading: true,
     showAlert: true,
     alertType:"success",
     alertText: 'Login User. Redirecting...',
     user:action.payload.user,
     token:action.payload.token,
     userLoaction: action.payload.location,
     userRegistered: true

   }
  }else if(action.type === LOGIN_USER_ERROR){
   return{
     ...state,
     isLoading:false,
     showAlert: true,
     alertType:"danger",
     alertText: action.payload.msg,
   }
 }
  
}
