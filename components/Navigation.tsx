import {useState} from 'react'
import { Container } from 'react-bootstrap'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Link from "next/link"
import Image from 'next/image'
import LOGO from '../public/assets/logo.png'

const Navigation = () => {

  return (
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light" className='navbar-custom-height'>
      <Container>
        <Navbar.Brand  as={Link} href="/">
          <Image
            src={LOGO}
            alt="Cascade Riser Management"
            width={176}
            height={42}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" />
          <Nav>
            <Nav.Link as={Link} href="/" className='custom-navlink'>
              <a className='custom-navlink'>Home</a>
            </Nav.Link>
            <Nav.Link as={Link} href="/about" className='custom-navlink'>
              <a className='custom-navlink'>About Us</a>
            </Nav.Link>
            <Nav.Link as={Link} href="/contact" className='custom-navlink'>
              <a className='custom-navlink'>Contact Us</a>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default Navigation;
