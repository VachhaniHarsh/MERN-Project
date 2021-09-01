import {Navbar,Nav,Button,NavDropdown,Dropdown} from 'react-bootstrap';
import Image from '../../images/IM3.png';


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg"  variant="dark" style={{backgroundColor:'#E8F0F2'}}>
      {/* <Container> */}
      <img src={Image} style = {{height:'6.8rem',paddingRight:50}}/> 
      
      
      <Navbar.Brand href="#home" style={{color:'#053742',paddingRight:50}}>Insurance Mart</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />   
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link href="#features">Features</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Nav>
            <Nav.Item style={{color:'#053742',fontSize:25,paddingRight:50}}>Login</Nav.Item>
            <Nav.Item style={{color:'#053742',fontSize:25}}>Signup</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
}

export default NavBar;
