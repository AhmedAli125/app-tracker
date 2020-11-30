import React, {useContext} from 'react'
import Admin from '../../admin/Admin'

import Manager from '../../manager/Manager'
import AuthContext from '../../../context/auth/AuthContext'
import Developer from '../../developer/Developer';
import Tester from '../../tester/Tester';

function Dashboard(props) {

    const authContext = useContext(AuthContext);

    const {
        user,
        isLoggedIn
    } =  authContext;

    return (
        <>
            {
                isLoggedIn ? (
                    user.designation === 'admin' ? 
                        (<Admin />) : user.designation === 'manager' ?
                            (<Manager />) : user.designation === 'developer' ?
                                (<Developer />) : user.designation === 'tester' ?
                                    (<Tester />) :  console.log('some other user')
                            // user.designation === 'developer' ?

                ) : props.history.push('/') 
            
            }
            {/* <h1>test</h1> */}
            
        </>
    )
}

export default Dashboard