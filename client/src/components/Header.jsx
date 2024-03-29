import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import '../style/nav.css'
import Logo from '../images/logo2.png'
import LogoSmall from '../images/logo5.png'
import { Link, useNavigate } from 'react-router-dom';




function Header() {

  const navigate = useNavigate()

  let model = "default"

  if (sessionStorage.getItem('admin')) {
    model = "logged"
  }



  if (model == "default") {
    return (

      <div >


        <Navbar expand="md" className="mb-3 navbar-site-field">
          <Container fluid>
            <Link to="/"><img src={Logo} className="logo-navbar-site" /></Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  <img src={LogoSmall} style={{ width: "40%" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end pl-4 flex-grow-1 pe-3 ">
                  <Link to="/" className='navbar-site fw-medium'>Início</Link>
                  <Link to="/about" className='navbar-site fw-medium'>Sobre o SYM</Link>
                  <Link to="/ourteam" className='navbar-site fw-medium'>Nossa Equipe</Link>
                  <Link to="/contact" className='navbar-site fw-medium'>Fale Conosco</Link>
                  <Link to="/login" className='navbar-site fw-medium btn btn-outline-dark px-2 align-self-center'> Login</Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>


      </div>

    )
  }

  else if (model == "logged") {

    return (

      <div >


        <Navbar expand="md" className="mb-3 navbar-site-field">
          <Container fluid>
            <Link to="/"> <img src={Logo} className="logo-navbar-site" /></Link>
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
            <Navbar.Offcanvas
              id="offcanvasNavbar-expand-md"
              aria-labelledby="offcanvasNavbarLabel-expand-md"
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                  <img src={LogoSmall} style={{ width: "40%" }} />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end pl-4 flex-grow-1 pe-3 ">
                  <Link to="/" className='navbar-site fw-medium'>Início</Link>
                  <Link to="/about" className='navbar-site fw-medium'>Sobre o SYM</Link>
                  <Link to="/ourteam" className='navbar-site fw-medium'>Nossa Equipe</Link>
                  <Link to="/contact" className='navbar-site fw-medium'>Fale Conosco</Link>
                  <Link to="/admin" className='navbar-site fw-medium'>Dashboard</Link>
                  <Link className='navbar-site fw-medium btn btn-outline-dark px-2'
                    onClick={() => {
                      sessionStorage.clear()
                      navigate('/login')
                    }}> Sair</Link>

                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>


      </div>

    )

  }
}

export default Header