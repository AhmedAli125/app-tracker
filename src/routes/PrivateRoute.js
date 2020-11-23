import React, {useContext} from 'react'
import {Route, Redirect} from 'react-router-dom'
import AuthContext from '../context/auth/AuthContext' 

function PrivateRoute({component: Component, ...rest }) {
    
    const authContext = useContext(AuthContext);
    const {
        isLoggedIn
    } = authContext;
    console.log(isLoggedIn)
    // console.log(rest)
    
    return (
        <Route
            {...rest}

            render = {(props)=>{
                // console.log(isLoggedIn);
                // isLoggedIn ? 
                //     <Component {...props} /> : 
                //     <Redirect to='/' />
                // }
                !isLoggedIn ? <Redirect to='/' /> : <Component {...props} />
            }
        

            // render = {
            //     props => (isLoggedIn) ? (
            //         // <h1>this is dashboard</h1>
            //         <Component {...props} />
            //     ) : (
                        
            //         <Redirect from='/dashboard' to='/' />
            //     )
            }
            
        />
    )
}

export default PrivateRoute
