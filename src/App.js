import React from 'react'
// import Container from '@material-ui/core/Container';
import ProjectManagerStates from './context/ProjectManager/ProjectManagerStates'
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <ProjectManagerStates>
    <div className="App">
      {/* <Container> */}
        <Header />
        <Dashboard />
      {/* </Container> */}
    </div>
    </ProjectManagerStates>
  );
}

export default App;
