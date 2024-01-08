import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Homesection from './Homesection';
export default function Headersection()
{
   return(
    <div>
    
<div className="forheadersection">
    <Navbar expand="lg" className="fornavigation">
      <Container>
        <Navbar.Brand href="#home" className='forappizeicon' >
       {/* <span className='forlogo'><svg xmlns="http://www.w3.org/2000/svg"  width="43" height="48"  fill="currentColor" class="bi bi-phone" viewBox="0 0 16 16">
  <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
  <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"/>
</svg></span> 
            <span className='forappizefont'>Appize</span> */}
            <p className='forappizenameandicon' ></p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home"className='forlinkcolor'>Home</Nav.Link>
            <Nav.Link href="#link"className='forlinkcolor'>Features</Nav.Link>
            <Nav.Link href="#link"className='forlinkcolor'>WhyisBest</Nav.Link>
            <Nav.Link href="#link"className='forlinkcolor'>Pricing</Nav.Link>
            <Nav.Link href="#link"className='forlinkcolor'>Testimonials</Nav.Link>
            <Nav.Link href="#link"className='forlinkcolor'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
 </div>

 </div>
   ) 
}