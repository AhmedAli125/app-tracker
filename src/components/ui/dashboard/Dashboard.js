import React, {useContext} from 'react'
import Admin from '../../admin/Admin'
import Manager from '../../manager/Manager'
import AuthContext from '../../../context/auth/AuthContext'
import User from '../../user/User';
function Dashboard(props) {

    const authContext = useContext(AuthContext);

    const {
        user,
        isLoggedIn
    } = authContext;
    return (
        <>
            {

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