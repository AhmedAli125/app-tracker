import React, {useContext, useEffect} from 'react';
import Modal from '../../../../ui/modal/ModalWindow';
import Typography from '@material-ui/core/Typography';
import Member from './Member';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import ManagerContext from '../../../../../context/manager/ManagerContext'
import './addMember.css';

function AddMembers() {
    const managerContext = useContext(ManagerContext);
    const { 
        showAddMemberModal, 
        closeMemberModalHandler,
        getOrganizationMembers,
        organizationMembers,
        selectedMembers
    } = managerContext;

    useEffect(()=>{
        getOrganizationMembers();
    },[])

    // let selected, member;

    return (
        showAddMemberModal &&
        <Modal show={true} clicked={closeMemberModalHandler}>
            <div>
                <Typography variant='h5' align='left' display='block' >
                    Add Members
                </Typography>
                <div className='member-container'>
                    {
                        organizationMembers.map(member=>{
                            return (
                                // <>
                                    // {
                                        // selectedMembers.length === 0 ?
                                        // selectedMembers.map(user => {
                                        //     selected = user.key === member.key;
                                        //     console.log(selected)
                                        //     return (
                                        //         <Member 
                                        //             key={member.key}
                                        //             data={member}
                                        //             preChecked={selected}
                                        //         />
                                        //         )
                                        //     }) : 
                                            // return 
                                                <Member 
                                                    key={member.key}
                                                    data={member}
                                                />
                                            // )
                                    // }
                                // </>
                            )
                        })
                    }
                </div>
                <ButtonGroup variant='contained' fullWidth={true}>
                    <Button 
                        color='primary'
                        onClick={()=>console.log(selectedMembers)}
                    >
                        Add
                    </Button>
                    <Button 
                        color='secondary' 
                        onClick={closeMemberModalHandler}
                    >
                        Cancel
                    </Button>
                </ButtonGroup>
            </div>
        </Modal>
    );
}

export default AddMembers;