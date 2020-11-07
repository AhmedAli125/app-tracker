import React from 'react'
import Modal from '../../ui/modal/ModalWindow'
import Typography from '@material-ui/core/Typography'
import Member from './Member'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
// import Container from '@material-ui/core/Container'

function AddMembers() {
    return (
        <Modal show='true'>
            <div>
                <Typography variant='h5' align='left' display='block' >
                    Add Members
                </Typography>
                <div className='member-container'>
                   <Member member='Ahmed Ali' designation='Developer'/>
                    <Member member='Ahmed Ali' designation='Developer'/>
                    <Member member='Ahmed Ali' designation='Developer'/>
                    <Member member='Ahmed Ali' designation='Developer'/>
                    <Member member='Ahmed Ali' designation='Developer'/>
                    <Member member='Ahmed Ali' designation='Developer'/>
                    <Member member='Ahmed Ali' designation='Developer'/>
                </div>
                <ButtonGroup variant='contained' fullWidth={true}  align='right'>
                    <Button color='primary'>Add</Button>
                    <Button color='secondary'>Cancel</Button>
                </ButtonGroup>
            </div>
        </Modal>
    )
}

export default AddMembers
