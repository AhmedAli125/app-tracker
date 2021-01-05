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
    const {
        toggleLoading,
        loading
    } = alertContext;

    React.useEffect(() => {
        // if (!window.navigator.onLine) {
            console.log('changes online status')
        // }
    }, [window.navigator.onLine])
    
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
                        (<Admin />) : user.designation === 'manager' ?
                            (<Manager />) : user.designation === 'developer' || 'tester' ?
                                (<User />) : null
                ) : props.history.push('/')     
            }
        </>       
    )
}

export default Dashboard