import React, {useState} from 'react'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
// import { makeStyles} from '@material-ui/core/styles';
import Modal from '../../ui/modal/ModalWindow'
import './addProject.css'

function AddTask({showAddTask, reset}) {
    let currentDate =() =>{
        let now = new Date();
        let getMonth = () => {
            let month = now.getMonth() + 1;
            if(month<10){
                return "0"+month.toString();
            }else return month.toString();
        }

        let getDate = () => {
            let current = (now.getDate());
            if(current<10){
                return current.toString();
                return current.toString();
            }else return current.toString();
            
        }
        let getYear = () => {
            let year = (now.getFullYear()).toString();
            if(year<10){
                return "0"+year.toString();
            }else return year.toString();
        }
        return getYear() + "-" + getMonth() + "-" + "0"+getDate();
    }
    
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    // const [member, setMember] = useState()
    const [assignDate, setAssignDate] = useState(currentDate);
    const changeTitle = e => setTitle(e.target.value);
    const changeDesc = e => setDesc(e.target.value);
    const changeDate = e => setAssignDate(e.target.value);

    return (
        showAddTask && <Modal show={true} clicked={reset}>
            <Typography variant='h5' align='left' display='block' >
                    Add Task
            </Typography>
            <div className='task-container'>
                <form noValidate>
                    <TextField
                        margin='normal' 
                        fullWidth={true}
                        value={title} 
                        placeholder="Enter Task Title"
                        onChange={changeTitle}
                        id="outlined-basic" label="Task Title" variant="filled"
                     />

                    <TextField 
                        margin='normal'
                        multiline={true}
                        rows='4'
                        fullWidth={true}
                        value={desc} 
                        placeholder="Enter Task Description"
                        onChange={changeDesc}
                        id="outlined-basic" label="Task Description" variant="filled"
                     />

                    <TextField
                            id="date"
                            margin='normal'
                            label="Assign Date"
                            type="date"
                            fullWidth={true}
                            variant='filled'
                            defaultValue={assignDate}
                            onChange={changeDate}
                            InputLabelProps={{
                            shrink: true,
                            }}
                        />

                        {/* yahan tujhe Select Box Dalna hai */}
                    <ButtonGroup variant='contained' fullWidth={true}>
                        <Button color='primary'>Add</Button>
                        <Button color='secondary' onClick={reset}>Cancel</Button>
                    </ButtonGroup>
                </form>
            </div>
        </Modal>
    )
}

export default AddTask