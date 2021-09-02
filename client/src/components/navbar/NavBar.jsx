import { Navbar, Nav, Button, NavDropdown, Dropdown } from "react-bootstrap";
import Image from "../../images/IM3.png";
import {Link} from 'react-router-dom';

function NavBar() {
  return (
    <div style={{}}>
      <Navbar
        collapseOnSelect
        expand="lg"
        variant="dark"
        style={{ backgroundColor: "#E8F0F2" }}
      >
        <img src={Image} style={{ height: "5rem", paddingLeft: 50 }} />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav style={{ paddingLeft: "50rem" }}> </Nav>
          <Nav>
            
            {/* <Nav.Item
              style={{ color: "#053742", fontSize: 25, paddingLeft: "3rem"}}
            >
            <Button variant="dark" style={{width:'7.25rem'}}>
              Login
            </Button>
              </Nav.Item> */}

          <Dropdown style={{marginTop:"1.9%",height:'3.2rem',paddingLeft:'3rem'}}>
            <Dropdown.Toggle variant="dark" id="dropdown-basic">
              Login
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Admin Login</Dropdown.Item>
            <Link to='/UserLogin'>
              <Dropdown.Item href="#/action-2">User Login</Dropdown.Item>
            </Link>
            </Dropdown.Menu>
          </Dropdown>
            
            <Nav.Item
              style={{ color: "#053742", fontSize: 25, paddingLeft: "3rem"}}
              >
              <Button variant="dark" style={{widht:'5rem',height:'2.5rem'}}>
              SignUp 
            </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
        {/* </Container> */}
      </Navbar>
    </div>
  );
}

export default NavBar;


