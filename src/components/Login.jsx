import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import loginimage from '../image/homelogin.png';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Login = () =>{

    return(
        <>
         <div className="login" style={{height:"100vh",}} >
      <Row>
        <Col sm={8}  className="mt-4 " >
        {/* <Card> */}
        <Card.Img variant="top" src={loginimage} />
        {/* <Card.Body>
          <Card.Text>
            
          </Card.Text>
        </Card.Body> */}
      {/* </Card> */}
            </Col>
        <Col sm={4} className="mt-4 p-4">
        <Card style={{ width: '20rem',  }}>
      <Card.Body className='LoginCard'>
      <Card.Title>Login</Card.Title>

      <Form className='p-4'>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        
        <Form.Label>Admin</Form.Label>
        <Form.Control type="email" placeholder="Enter admin ID" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Button variant="primary">Singup</Button>{' '}
    
     

    </Form>
    <Card.Body>
        <Card.Link href="#" className='ms-3'>Forgot Password? </Card.Link>
        </Card.Body>
      </Card.Body>
    </Card>
        </Col>
      </Row>
      </div>
        </>
    )

}


export default Login;