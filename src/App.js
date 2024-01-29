import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Home from './components/Home'
import Header from './components/Header';
import Users from './components/masters/Users';
import Role from './components/masters/Role';
import FormData from './components/masters/FormData'
import Dashboard from './components/Dashbaord'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Login/> */}
      <Header />
      <Home />
      


    
        <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/users' element={<Users />} />
          <Route exact path='/role' element={<Role />} />
          <Route exact path='/formdata' element={<FormData />} />
         
        </Routes>

  
    </>
  )
}

export default App;
