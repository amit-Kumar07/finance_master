import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../image/logo.png'
import user from '../image/user.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
const Header = () =>{

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };
  return(
    <>
    <Navbar className="bg-body-tertiary" style={{backgroundColor:"aliceblue"}}>
    <Container>
    <Navbar.Brand href="#home">
            <img
              src={logo}
              width="80"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
        <Navbar.Brand href="#home">Dashboard</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
          {/* <Navbar.Brand href="#home">
            <img
              src={user}
              // width="80"
              // height="70"
              className="d-inline-block align-top avatar"
              alt="React Bootstrap logo"
            />

            
          </Navbar.Brand> */}

          <Navbar expand="lg">
      <Navbar.Brand href="#home">
        <img
          src={user}
          className="d-inline-block align-top avatar"
          alt="User Avatar"
          onClick={handleDropdownToggle}
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <NavDropdown
           
            id="basic-nav-dropdown"
            show={dropdownOpen}
            onClick={handleDropdownToggle}
          >
            <NavDropdown.Item href="#action/1">Action 1</NavDropdown.Item>
            <NavDropdown.Item href="#action/2">Action 2</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
        </Navbar.Collapse>

        
        </Container>
    </Navbar>
    </>
  )
}

export default Header;