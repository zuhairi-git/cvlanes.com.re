import React from 'react';
import Nav from 'react-bootstrap/Nav';

class TopNavHTML extends React.Component {
  render() {
    return (
      <div className="navbar nav navbar-expand-lg bg-light navbar-light" id="navbar">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand hidden-md hidden-sm"><img src="img/cvlanes-white.png" alt="Logo" /></a>

          <div className="mobile-screen hidden-lg">
            <a href="index.html" className="navbar-brand"><img src="img/cvlanes-logo.png" alt="Logo" /></a>
          </div>

          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarCollapse">
            <div className="navbar-nav ml-auto">
              <Nav className="navbar-nav ml-auto">
                <Nav.Link href="#home" className="nav-item nav-link active">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#experience">Experience</Nav.Link>
                <Nav.Link href="#achievements">Achievements</Nav.Link>
                <Nav.Link href="#team">Social Media</Nav.Link>
                <Nav.Link href="#review">Recommendations</Nav.Link>
                <Nav.Link href="#footer">Contact</Nav.Link>
              </Nav>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default TopNavHTML;