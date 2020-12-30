import {useContext, useReducer} from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import {
    ALERT,
    REMOVE_ALERT,
    SET_LOADING
} from '../Type'

const AlertStates = props => {

    const initialState = {
        alertMessage: null,
        type: null,
        loading: false
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)
    
    const setMessage = (msg, type) => {
        // console.log(msg, type)
        let alert = null;
        
        switch (msg) {
            case "auth/network-request-failed":
                alert = 'An unxpected network error occured! Please check your device is connected to a network';
                break;
            
            case 'auth/invalid-email':
                alert = 'Invalid Email Address!';
                break;
            
            case 'Please enter all fields':
                alert = 'Please enter all fields!';
                break;
                        
            case "auth/wrong-password":
                alert = "The password is invalid!";
                break;
            
            case "auth/user-not-found":
                alert = "user not found!";
                break;
            
            case 'pleasr select members':
                alert = 'Pleasr select members';
                break;

            default:
               alert='unexpected error occured!' 
        }
        dispatch({type: ALERT, payload: {alert, type}})
    }

    const removeAlert = (interval = 5000) => {
        setTimeout(() => {
            dispatch({type:REMOVE_ALERT})
        }, interval)
    }

    const toggleLoading = (flag) => {
        dispatch({type:SET_LOADING, payload: flag})
    }

    return (
        <AlertContext.Provider
            value={ {
                alertMessage: state.alertMessage,
                type: state.type,
                loading: state.loading,
                setMessage,
                removeAlert,
                toggleLoading
            }}
        >
            {props.children}
        </AlertContext.Provider >
    )
};

export default AlertStates;

