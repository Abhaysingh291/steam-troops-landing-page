import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import 'bootstrap/dist/css/bootstrap.css';

function navbar() {
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar style={{ background: 'white' }} key={expand} expand={expand} className="bg-body-tertiary">
          <Container fluid>
            <Navbar.Brand style={{color:"#1bc61b",fontWeight:"bolder",fontSize:"32px"}} href="#">Food Labs</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link style={{color:"#92d392",fontSize:"20px" ,fontWeight:"bold",textDecoration: "underline",}} href="#action1">Home</Nav.Link>
                  <Nav.Link style={{color:"#92d392",fontSize:"20px",fontWeight:"bold"}}href="#action2">Services</Nav.Link>
                  <Nav.Link style={{color:"#92d392",fontSize:"20px",fontWeight:"bold"}}href="#action2">Gallery</Nav.Link>
                  <Nav.Link style={{color:"#92d392",fontSize:"20px",fontWeight:"bold"}} href="#action2">Co-Traveller</Nav.Link>
                  <Nav.Link style={{color:"#92d392",fontSize:"20px",fontWeight:"bold"}}href="#action2">FAQs</Nav.Link>
                  <Nav.Link style={{color:"#92d392",fontSize:"20px",fontWeight:"bold"}} href="#action2">Contact Us</Nav.Link>
                  <Nav.Link style={{color:"#92d392",fontSize:"20px",fontWeight:"bold"}} href="#action2">Register</Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button  variant="outline-success">Search</Button>
                </Form>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default navbar;