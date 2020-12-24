import {useContext, useReducer} from 'react'
import AlertContext from './AlertContext'
import AlertReducer from './AlertReducer'
import {
    ALERT
} from '../Type'

const AlertStates = props => {

    const initialState = {
        alertMessage: null,
        type: null
    }

    const [state, dispatch] = useReducer(AlertReducer, initialState)
    
    const getMessage = (msg, type) => {
        console.log(msg, type)
        dispatch({type: ALERT, payload: {msg, type}})
    }

    return (
        <AlertContext.Provider
            value={ {
                alertMessage: state.alertMessage,
                type: state.type,
                getMessage
            }}
        >
            {props.children}
        </AlertContext.Provider >
    )
};

export default AlertStates;

