import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarcomp() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Electronics</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Kitchen Appliances</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Fashion</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Toys</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Grocery</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Sort" id="navbarScrollingDropdown2">
              <NavDropdown.Item href="#action3">Low to High Price</NavDropdown.Item>
              <NavDropdown.Item href="#action4">High to Low Price</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Low to High Ratings</NavDropdown.Item>
              <NavDropdown.Item href="#action4">High to Low Ratings</NavDropdown.Item>

              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp