import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../styles/NavbarMenu.css';

function NavbarMenu() {
  return (
    <div className="navbar-wrapper">
      <Navbar expand="md" className="custom-navbar" variant="dark">
        <Nav className="mx-auto navbar-center">
          {/* AIMS Dropdown */}
          <NavDropdown title={<span className="nav-label">AIMS</span>} id="aims-dropdown">
            <NavDropdown.Item
              href="https://aims.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to AIMS Website
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/aims/overview">Overview</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/aims/features">Features</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/aims/contact">Contact</NavDropdown.Item>
          </NavDropdown>

          {/* DRONA Dropdown */}
          <NavDropdown title={<span className="nav-label">DRONA</span>} id="drona-dropdown">
            <NavDropdown.Item
              href="https://drona.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to DRONA Website
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/drona/overview">Overview</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/drona/modules">Modules</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/drona/support">Support</NavDropdown.Item>
          </NavDropdown>

          {/* PeMS Dropdown */}
          <NavDropdown title={<span className="nav-label">PeMS</span>} id="pems-dropdown">
            <NavDropdown.Item
              href="https://pems.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to PeMS Website
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/pems/overview">Overview</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pems/reports">Reports</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pems/help">Help</NavDropdown.Item>
          </NavDropdown>

          {/* Do PART-1 Dropdown */}
          <NavDropdown title={<span className="nav-label">Do PART-1</span>} id="dopart1-dropdown">
            <NavDropdown.Item
              href="https://dopart-1.gov.in"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Do PART-1 Website
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/do-part-1/overview">Overview</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/do-part-1/details">Details</NavDropdown.Item>
          </NavDropdown>

          {/* Happy Birthday Link */}
          <Nav.Link as={Link} to="/happy-birthday" className="nav-label">
            Happy Birthday
          </Nav.Link>
           <Nav.Link as={Link} to="/gallery" className="nav-label">
            Gallery
          </Nav.Link>
          <Nav.Link as={Link} to="/user" className="nav-label">
            Search Event
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarMenu;
