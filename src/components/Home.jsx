import React from 'react';
import homeside from '../image/homeside.png'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Accordion from 'react-bootstrap/Accordion';
import Navbar from 'react-bootstrap/Navbar';
import Dashboard from './Dashbaord'
import ListGroup from 'react-bootstrap/ListGroup';

const Home = () => {

    return (
        <>
            <div>
                <Row>
                    <Col sm={3}><Card style={{ width: '18rem', height: "100vh", backgroundColor: "#f0f0f0" }}>
                        <Card.Body>
                            {/* <Card.Title>         <Card.Img variant="top" src={homeside} /> </Card.Title> */}
                            <Card.Text>
                                <ListGroup as="ul" >
                                    <ListGroup.Item as="li">Dashboard</ListGroup.Item>
                                    <ListGroup.Item as="li"> <Accordion>
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Masters</Accordion.Header>
                                            <Accordion.Body>
                                                <Nav defaultActiveKey="/" className="flex-column">
                                                    <Nav.Link href="/users">Users</Nav.Link>
                                                    <Nav.Link href="/role">Role</Nav.Link>
                                                    <Nav.Link eventKey="link-2">Branch</Nav.Link>
                                                    <Nav.Link href="/formdata">Data</Nav.Link>
                                                    
                                                </Nav>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        {/* <Accordion.Item eventKey="1">
        <Accordion.Header>Accordion Item #2</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item> */}
                                    </Accordion></ListGroup.Item>
                                    <ListGroup.Item as="li">Cras justo odio</ListGroup.Item>
                                </ListGroup>


                            </Card.Text>
                            {/* <Card.Link href="#">Card Link</Card.Link>
                            <Card.Link href="#">Another Link</Card.Link> */}
                        </Card.Body>
                    </Card>

                    </Col>
                    <Col sm={8}>
<Dashboard/>
                    </Col>
                </Row>
            </div>
        </>
    )
}


export default Home;