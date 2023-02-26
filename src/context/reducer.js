import React from 'react'
import {CLEAR_ALERT, DISPLAY_ALERT} from './actions'

export default function reducer(state , action) {

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
   }
  
}
