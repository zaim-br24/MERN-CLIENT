
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
     CLOSE_MENU,
     OPEN_MENU,
     OPEN_DROPDOWN,
     CLOSE_DROPMENU,
     CLOSE_OVERLY,
     OPEN_OVERLY

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
    user:user? JSON.parse(user) : null,
    token: token,
    userLocation: location || '', 
    userRegistered: user && true,
    isDropdownOpen: false,
    isMenuOpen: false,
    isOverlyOpen: false,

}

const AppContext = React.createContext()

const AppProvider = ({children})=>{
    const [state , dispatch] = useReducer(reducer, initialState)

    const displayAlert = ()=>{
        dispatch({type:DISPLAY_ALERT})
        clearAlert()
    }

    const clearAlert = ()=>{
        setTimeout(()=>{
            dispatch({type:CLEAR_ALERT})
        },3000)
    }
    const addUserToLocalStorag= ({user, token, location})=>{
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        localStorage.setItem('location', location)

    }
    const removeUserFromLocalStorag= ({user, token, location})=>{
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        localStorage.removeItem('location')
    }

    const registerUser = async (currentUser)=>{
        dispatch({type: REGISTER_USER_BEGIN})

        try {
            const response = await axios.post('/api/v1/auth/register', currentUser)
            const {user, token , location} = response.data
            console.log(response)
            dispatch({
                type: REGISTER_USER_SUCCESS,
                payload:{
                    user,
                    token,
                    location
                }
            })
        // // localStorage
        addUserToLocalStorag({user, token, location})

        } catch (error) {
            displayAlert()
            dispatch({
                type: REGISTER_USER_ERROR,
                payload:{
                    msg:error.response.data.msg
                } 
            
            })
            
        }
        clearAlert()
        console.log(currentUser)
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
        addUserToLocalStorag({user, token, location})

        } catch (error) {
            displayAlert()
            dispatch({
                type: LOGIN_USER_ERROR,
                payload:{
                    msg:error.response.data.msg
                } 
            
            })
        }
        clearAlert()
        console.log(currentUser)
    }
    // --------- dropdown menu
    
    const handelCloseMenu = ()=>{
        dispatch({type: CLOSE_MENU})
    }
    const handelOpenMenu = ()=>{
        dispatch({type: OPEN_MENU})
    }

    const handelCloseDropdown = ()=>{
        dispatch({type:CLOSE_DROPMENU})
    }
    const handelOpenDropdown= ()=>{
        dispatch({type: OPEN_DROPDOWN})
    }

    const handleCloseOverly = ()=>{
        dispatch({type: CLOSE_OVERLY})
    }
    const handleOpenOverly = ()=>{
        dispatch({type: OPEN_OVERLY})
    }
    // const logoutUser = async ()=>{
    //     try {
    //         removeUserFromLocalStorag({user, token, location})
    //           // Call the logout API endpoint
    //        const response = await axios.post('/api/v1/auth//logout', { 
    //         token: localStorage.getItem('token')
    //      }, {
    //           headers: {
    //             Authorization: `${localStorage.getItem('token')}`,
    //           },
    //           body: JSON.stringify({ token: localStorage.getItem('token') }),
    //         })
    //         // Clear the local storage or state
    //     } catch (error) {
    //         console.error('Error logging out:', error);
    //     }
    // }

    return(
        <AppContext.Provider value={{
            ...state, 
            displayAlert,
            registerUser,             
            loginUser, 
            handelCloseMenu, 
            handelOpenMenu, 
            handelCloseDropdown,
            handelOpenDropdown,
            handleOpenOverly,
            handleCloseOverly
            }}>

            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = ()=> {
    return useContext(AppContext)
}

export {AppProvider}
