import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';
import AuthState from '../../context/auth/AuthStates'

function Auth() {
    return (
        <AuthState>
        <Switch>
            <Route path='/sign-in' component={SignIn} />
            <Route path='/sign-up' component={SignUp} />
            </Switch>
        </AuthState>
    );
}

export default Auth;
