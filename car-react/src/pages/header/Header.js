import Navbar from "react-bootstrap/Navbar";
import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";
import "./Header.css";

const Header = ()=>{
   return(
   <>
    <Navbar variant="dark">
    <Container>
    <Navbar.Brand><strong>Ad Car Services</strong></Navbar.Brand>
    <Nav className="ml-auto">
        <Nav.Link as={Link} to="/" className="nav-link">Car</Nav.Link>
        <Nav.Link as={Link} to="/car" className="nav-link">Post Car</Nav.Link>
    </Nav>
    
    
    </Container>
    
    
    </Navbar>
   
   </>
   )

}

export default Header;