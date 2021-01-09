import React, {useContext} from 'react'
import Admin from '../../admin/Admin'
import Manager from '../../manager/Manager'
import AuthContext from '../../../context/auth/AuthContext'
import AlertContext from '../../../context/alerts/AlertContext'
import User from '../../user/User';
import Loader from '../loader/Loader'
// import CircularProgress from '../../ui/circularPrgress/CircularProgress';

function Dashboard(props) {

    const authContext = useContext(AuthContext);

    const {
        user,
        isLoggedIn
    } = authContext;

    const alertContext = useContext(AlertContext);
    // const {
    //     toggleLoading,
    //     loading
    // } = alertContext;
    
    return (
        <>
            {
                // isLoggedIn ?
                //     (!loading ? 
                //         (user.designation === 'admin' ?
                //             ( <Admin /> ) : user.designation === 'manager' ?
                //                 ( <Manager /> ) : user.designation === 'developer' || 'tester' ?
                //                     ( <User /> ) : null
                //         ) : null
                //     ) : props.history.push('/')

                isLoggedIn ? (
                    user.designation === 'admin' ? 
                        (<Admin />) : user.designation === 'Manager' ?
                            (<Manager />) : user.designation === 'Developer' || 'Tester' ?
                                (<User />) : null
                ) : props.history.push('/')     
            }
        </>       
    )
}

export default Dashboard