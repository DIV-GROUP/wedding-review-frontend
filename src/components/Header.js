import {Button,Navbar,Container,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";

import React from 'react'

export default function Header() {
    return (
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand className="m-auto" href="/">
              toForever
            </Navbar.Brand>
          </Container>
        </Navbar>

        <Navbar expand="lg" className="mb-3 ">
          <Container className="d-flex justify-content-between mx-5">
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto  my-2 my-lg-0"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav.Link href="/" className=" text-danger">
                  Home
                </Nav.Link>
                <Nav.Link href="/"> About Us</Nav.Link>
                <NavDropdown title="Vendors" id="navbarScrollingDropdown">
                  
                  <NavDropdown.Item href="/makeup">  Makeup</NavDropdown.Item>
                  <NavDropdown.Item href="/catering">Catering</NavDropdown.Item>
                  <NavDropdown.Item href="/cake"> Cake</NavDropdown.Item>
                  <NavDropdown.Item href="/photo">Photography</NavDropdown.Item>
                  <NavDropdown.Item href="/fashion"> Fashion</NavDropdown.Item>
                  <NavDropdown.Item href="/bridal">Bridal</NavDropdown.Item>
                  <NavDropdown.Item href="/rings"> Accessories</NavDropdown.Item>
                  <NavDropdown.Item href="/flower">Flowers</NavDropdown.Item>
                  <NavDropdown.Item href="/fancy"> Fancy</NavDropdown.Item>
                  <NavDropdown.Item href="/bar">Bar</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Nav.Link className=" text-dark" href="/login">
                  Login
                </Nav.Link>
                <Nav.Link className=" bg-danger text-white" href="/signup"  >
                  Sign Up
                </Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
