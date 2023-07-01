import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../img/cvlanes-white.png'

function ResponsiveNavbar() {
  return (
    <Navbar sticky="top"  className="navbar nav navbar-expand-lg bg-light navbar-light" id="navbar">
      <Container>
        <Navbar.Brand href="/"><img src={logo} style={{ width: '50px' }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="/" className="nav-item nav-link active">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#achievements">Achievements</Nav.Link>
            <Nav.Link href="#team">Social Media</Nav.Link>
            <Nav.Link href="#review">Recommendations</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/blog">Blog</Nav.Link>
            <Nav.Link href="#footer">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ResponsiveNavbar;