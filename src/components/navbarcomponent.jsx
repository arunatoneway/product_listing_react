import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';





function Navbarcomp({filter}) {
  let searchfield = document.getElementById('searchfield')
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">ShopBuy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Category" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={()=>filter("All")} >All</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>filter("Electonics")} id='elecbtn'>Electonics</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> filter("Appliances")} href="#action4">Appliances</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> filter("Fashion")} href="#action4">Fashion</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> filter("Toys")} href="#action4">Toys</NavDropdown.Item>
              <NavDropdown.Item onClick={()=> filter("Grocery")} href="#action4">Grocery</NavDropdown.Item>
              
            </NavDropdown>
            <NavDropdown title="Sort" id="navbarScrollingDropdown2">
              <NavDropdown.Item onClick={()=>filter("LtoHPrice")}>Low to High Price</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>filter("HtoLPrice")}>High to Low Price</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>filter("LtoHRattings")}>Low to High Ratings</NavDropdown.Item>
              <NavDropdown.Item onClick={()=>filter("HtoLRattings")}>High to Low Ratings</NavDropdown.Item>

              
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              id="searchfield"
            />
            <Button variant="outline-success" onClick={()=>{filter(`Search${searchfield.value}`); searchfield.value =""}}>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navbarcomp