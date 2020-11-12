import React from 'react'
// import Container from '@material-ui/core/Container';
import ManagerStates from './context/manager/ManagerStates'
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <ManagerStates>
    <div className="App">
      {/* <Container> */}
        <Header />
        <Dashboard />
      {/* </Container> */}
    </div>
    </ManagerStates>
  );
}

export default App;
