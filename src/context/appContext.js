
import React, { useReducer, useContext} from "react";
import {
     CLEAR_ALERT,
     DISPLAY_ALERT, 
     REGISTER_USER_BEGIN,
     REGISTER_USER_ERROR,
     REGISTER_USER_SUCCESS,
     LOGIN_USER_BEGIN,
     LOGIN_USER_ERROR,
     LOGIN_USER_SUCCESS,
     TOGGLE_DROPDOWN,
     TOGGLE_OVERLY,
     LOGOUT_USER,
     TOGGLE_SIDEBAR,
     CLOSE_DROPDOWN_OVERLY,
     UPDATE_USER_BEGIN,
     UPDATE_USER_SUCCESS,
     UPDATE_USER_ERROR,

    } from './actions'
import reducer from "./reducer";
import axios from "axios"

const user = localStorage.getItem("user")
const token = localStorage.getItem("token")
const location = localStorage.getItem("location")


const initialState = {
    isLoading: false,
    showAlert: false,
    alertText:'',
    alertType:'',
    user: user? JSON.parse(user) : null,
    token: token,
    userLocation: location || '', 
    userRegistered: user && true,
    isDropdownOpen: false,
    isOverlyOpen: false,
    showSidebar: false,
    test : false

}

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [state , dispatch] = useReducer(reducer, initialState)
    // axios
    const authFetch = axios.create({baseURL: '/api/v1', headers: {
        Authorization: `Bearer ${state.token}`,
      },})

    //   response interceptor (does not work NEED TO BE FIXED)
    authFetch.interceptors.request.use(
        (config) => {
        // config.headers.common['Authorization'] = `Bearer ${state.token}`
        return config
        },
        (error) => {
        return Promise.reject(error)
        }
    )
    // response interceptor
    authFetch.interceptors.response.use(
        (response) => {
        return response
        },
        (error) => {
        if (error.response.status === 401) {
            console.log('AUTH ERROR')
        }
        return Promise.reject(error)
        }
    )


    const displayAlert = ()=>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = ()=>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
    }
    const addUserToLocalStorage= ({user, token, location})=>{
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)

    }
    const removeUserFromLocalStorag = ()=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
    }

    const registerUser = async (currentUser)=>{
        dispatch({type: REGISTER_USER_BEGIN})

        try {
            const response = await axios.post('/api/v1/auth/register', currentUser)
            const {user, token , location} = response.data
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload:{
                    user,
                    token,
                    location
                }
            })
        // // localStorage
        addUserToLocalStorage({user, token, location})

        } catch (error) {
            dispatch({
                type: REGISTER_USER_ERROR,
                payload:{
                    msg:error.response.data.msg
                } 
            
            })
            
        }
        clearAlert()
    }
    const loginUser = async (currentUser)=>{
        dispatch({type: LOGIN_USER_BEGIN})

        try {
            const {data} = await axios.post('/api/v1/auth/login', currentUser)
            const {user, token , location} = data
            dispatch({
                type: LOGIN_USER_SUCCESS,
                payload:{
                    
                    user,
                    token,
                    location
                }
            })
        // // localStorage
        addUserToLocalStorage({user, token, location})

        } catch (error) {
            dispatch({
                type: LOGIN_USER_ERROR,
                payload:{
                    msg:error.response.data.msg
                } 
            
            })
        }
        clearAlert()
    }

    const updateUser = async (currentUser) => {
        
        dispatch({ type: UPDATE_USER_BEGIN })
  
        try {
          const { data } = await authFetch.patch('/auth/updateUser', currentUser)
          // no token
          const { user, location, token } = data
      
          dispatch({
            type: UPDATE_USER_SUCCESS,
            payload: { user, location, token },
          })
      
          addUserToLocalStorage({ user, location, token })
        } catch (error) {
            if(error.response.status !== 401){
                dispatch({
                    type: UPDATE_USER_ERROR,
                    payload: { msg: error.response.data.msg },
                })
            }
         
        }
        clearAlert()
      }  

    const logoutUser = ()=> {
        dispatch({type:LOGOUT_USER})
        removeUserFromLocalStorag()
        
    }
    // --------- dropdown menu
    
    const toggleSidebar= ()=>{
        dispatch({type: TOGGLE_SIDEBAR})
      }
    const toggleDropdown = ()=>{
        dispatch({type: TOGGLE_DROPDOWN})
    }
    const toggleOverly = ()=>{
        dispatch({type: TOGGLE_OVERLY})
    }
    const closeDropdownOverly = ()=> {
        dispatch({type: CLOSE_DROPDOWN_OVERLY})
    }
    

    return(
        <AppContext.Provider value={{
            ...state, 
            displayAlert,
            registerUser,             
            loginUser, 
            toggleDropdown,
            toggleOverly,
            logoutUser,
            toggleSidebar,
            closeDropdownOverly,
            updateUser
            }}>

            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> {
    return useContext(AppContext)
}

export {AppProvider, initialState}
