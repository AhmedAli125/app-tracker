import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignIn from './signIn/SignIn';
import SignUp from './signUp/SignUp';

function Auth() {
    return (
            <Switch>
                <Route path='/' exact component={SignIn} />
                <Route path='/sign-up' exact component={SignUp} />
            </Switch>
    );
}

export default Auth;
