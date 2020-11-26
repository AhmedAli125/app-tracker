import React, {useReducer} from 'react';
import AdminReducer from './AdminReducer'
import AdminContext from './AdminContext'
import {
    OPEN_FILTER_MODAL,
    CLOSE_FILTER_MODAL,
    OPEN_EDIT_MEMBER_MODAL,
    CLOSE_EDIT_MEMBER_MODAL,
    OPEN_SOFTWARE_HOUSE_MODAL,
    CLOSE_SOFTWARE_HOUSE_MODAL,
    GET_ORGANIZATION_DATA,
    SET_CURRENT_ORGANIZATION
} from '../Type'
import Database from '../../config/Database'

const AdminStates = props => {
    
    const initialState = {
        showFilterMemberModal: false,
        showEditMemberModal: false,
        showSoftwareHouseModal: false,
        organizations: [],
        currentOrganization:null
    }
    
    const [state, dispatch] = useReducer(AdminReducer, initialState);
    
    const openFilterModalHandler =  () => {
        dispatch({type: OPEN_FILTER_MODAL});
    }

    const closeFilterModalHandler =  () => {
        dispatch({type: CLOSE_FILTER_MODAL});
    }

    const openEditMemberModalHandler = () => {
        dispatch({type: OPEN_EDIT_MEMBER_MODAL});
    }

    const closeEditMemberModalHandler =  () => {
        dispatch({type: CLOSE_EDIT_MEMBER_MODAL});
    }

    const openSoftwareHouseModalHandler = () => {
        dispatch({ type: OPEN_SOFTWARE_HOUSE_MODAL});
    }

    const closeSoftwareHouseModalHandler =  () => {
        dispatch({ type: CLOSE_SOFTWARE_HOUSE_MODAL});
    }

    const registerOrganization = (data) => {
        console.log(data);
        Database.database().ref(`/organizations/${data.id}`).set(data)
            .then((res) => {
                console.log('org added')
            })
            .catch(err=>{
                console.log(err)
            })
    }

    const getOrganizations = () => {
        let organizationData, organizations = [];
        Database.database().ref(`/organizations`).once('value')
            .then(
                (data) => {
                    organizationData = { ...data.val() };
                    Object.keys(organizationData)
                        .forEach((key) => {
                            organizations.push(organizationData[key]);
                        });
                    
                    // console.log(organizations);
                    dispatch({ type: GET_ORGANIZATION_DATA, payload: organizations });
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            );
    }

    const setCurrentOrganization = (organization) => {
        dispatch({type: SET_CURRENT_ORGANIZATION, payload:organization});
    }

    return (
        <AdminContext.Provider
            value={{
                showFilterMemberModal: state.showFilterMemberModal,
                showEditMemberModal: state.showEditMemberModal,
                showSoftwareHouseModal: state.showSoftwareHouseModal,
                organizations: state.organizations,
                currentOrganization: state.currentOrganization,
                openFilterModalHandler,
                closeFilterModalHandler,
                openEditMemberModalHandler,
                closeEditMemberModalHandler,
                openSoftwareHouseModalHandler,
                closeSoftwareHouseModalHandler,
                registerOrganization,
                getOrganizations,
                setCurrentOrganization
            }}
        >
            {props.children}
        </AdminContext.Provider>
    )
}

export default AdminStates
