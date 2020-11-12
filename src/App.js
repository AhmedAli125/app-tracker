import React from 'react'
// import Container from '@material-ui/core/Container';
import Header from './components/header/Header'
import Dashboard from './components/ui/dashboard/Dashboard';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Container> */}
      <Header />
      <Dashboard />
      {/* </Container> */}
    </div>
  );
}

export default App;
