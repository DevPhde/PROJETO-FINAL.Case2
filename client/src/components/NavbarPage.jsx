import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/nav.css'
import Logo from '../images/logo2.png'
import LogoSmall from '../images/logo5.png'
import { Link } from 'react-router-dom';


function NavbarPage() {




    return (

    <div >


        <Navbar  expand="md" className="mb-3 navbar-site-field">
          <Container fluid>
            <img src={Logo} className="logo-navbar-site"  />
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                   <img src={LogoSmall} style={{width:"40%" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end pl-4 flex-grow-1 pe-3 ">
                <Nav.Link href="/" className='navbar-site fw-medium'>Home</Nav.Link>
                 <Nav.Link href="/about" className='navbar-site fw-medium'>Sobre</Nav.Link>
                 <Nav.Link href="/login" className='navbar-site fw-medium'>Funcionalidades</Nav.Link>
                <Nav.Link href="/contact" className='navbar-site fw-medium'>Fale Conosco</Nav.Link>
                  
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
    

    </div>
    
    )

}

export default NavbarPage