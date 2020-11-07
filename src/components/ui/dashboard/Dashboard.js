import React from 'react';
import AddProject from '../../manager/addProject/AddProject';
import Modal from '../modal/ModalWindow';
import ProjectList from '../projects/ProjectList';
import './dashboard.css';

function Dashboard() {
    return (
        <div className='dashboard-container'>
            <AddProject />
            <ProjectList />
            <Modal show='true'>
                <>
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                    <button onClick={()=>(alert('modal content button clicked'))}>Click</button>
                </>
            </Modal>
        </div>
    );
}

export default Dashboard;
