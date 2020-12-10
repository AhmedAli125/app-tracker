import React, { useReducer } from 'react';
import AuthContext from './AuthContext';
import AuthReducer from './AuthReducer';
import Database from '../../config/Database';
import {
    SET_USER_DATA,
    USER_LOG_OUT,
    SHOW_PROFILE_FLAG,
    CLOSE_PROFILE_FLAG
} from '../Type';

const AuthStates = props => {

    const initialState = {
        user: {},
        isLoggedIn: false,
        profileFlag: false
    };

    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const currentDate = () => {

        let now = new Date();
    
        let getMonth = () => {
          let month = now.getMonth() + 1;
          if (month < 10) {
            return "0" + month.toString();
          } else return month.toString();
        };
    
        let getDate = () => {
          let current = (now.getDate());
          if (current < 10) {
            return "0" + current.toString();
            // return current.toString();
          } else return current.toString();
        };
    
        let getYear = () => {
          let year = (now.getFullYear()).toString();
          if (year < 10) {
            return "0" + year.toString();
          } else return year.toString();
        };
    
        return getYear() + "-" + getMonth() + "-" + getDate();
      };
    
    const getUserData = async () => {
        let userData;
        Database.auth().onAuthStateChanged(await function (user) {
            if (user) {
                // key=user.uid
                Database.database().ref(`/registered-users/${user.uid}`).once('value')
                    .then(
                        (data) => {
                            userData = { ...data.val() };
                            // console.log(userData);
                            dispatch({ type: SET_USER_DATA, payload: userData });
                        }
                    )
                    .catch(
                        (error) => {
                            console.log(error);
                        }
                    );
            }
        });
    };

    const userLogin = async (formData) => {
        await Database.auth().signInWithEmailAndPassword(formData.email, formData.password)
            .then(res => {
                // console.log(`user id => ${res.user.uid}`);
                getUserData();
            })
            .catch(err => {
                console.log(err.message);
            });
    };

    const userLogOut = async () => {
        Database.auth().signOut().then(() => {
            // alert('logged out');
            dispatch({ type: USER_LOG_OUT });
        }).catch(function (error) {
            alert(error);
        });
    };

    const registerUser = async (user) => {
        // console.log(user);
        const {
            email,
            password
        } = user;
        Database.auth().createUserWithEmailAndPassword(email, password)
        .then((res)=>{
            let userID = res.user.uid
            setUserData(user, userID);
            getUserData();
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const setUserData = (data, id) => {
        // console.log(data, id)
        let orgData, designation, userData, organization;
        const {
            firstName,
            lastName,
            email,
            softwareHouseKey,
            designationKey,
            regDate
        } = data

        //use to get SH data ny SH key
        Database.database().ref(`/organizations/${softwareHouseKey}`).once('value')
        .then(data => {
            orgData = {...data.val()}
            designation = orgData.organizationKeys[designationKey].designation
            organization = orgData.name
            userData = {
                key: id,
                firstName: firstName,
                lastName: lastName,
                email: email,
                softwareHouseKey:softwareHouseKey,
                designationKey:designationKey,
                designation : designation,
                organization: organization,
                regDate: regDate
            }
            
            Database.database().ref(`/registered-users/${userData.key}`).set(userData)
            .then(
                // res=>console.log(res)
            )
            .catch(err=>console.log(err))

        })
    }
     const objectToArray = (obj) => {
         let convertedArray = [];
         if (obj !== null) {
             Object.keys(obj).forEach(item => {
                 convertedArray.push(obj[item]);
             });
         }
         return convertedArray;
    };
    
    const showProfile = () => {
        dispatch({
            type: SHOW_PROFILE_FLAG
        })
    }

    const closeProfile = () => {
        dispatch({
            type: CLOSE_PROFILE_FLAG
        })
    }


    return (
        <AuthContext.Provider
            value={{
                user: state.user,
                isLoggedIn: state.isLoggedIn,
                profileFlag: state.profileFlag,
                currentDate,
                userLogin,
                getUserData,
                userLogOut,
                registerUser,
                setUserData,
                objectToArray,
                showProfile,
                closeProfile
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthStates;
