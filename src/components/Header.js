import {Button,Navbar,Container,Nav,NavDropdown,Form,FormControl} from "react-bootstrap";

import React from 'react'

export default function Header() {
    return (
      <div>
        <Navbar>
          <Container>
            <Navbar.Brand className="m-auto" href="#home">
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
                <Nav.Link href="#action1" className=" text-danger">
                  Home
                </Nav.Link>
                <Nav.Link href="#action2"> About Us</Nav.Link>
                <NavDropdown title="Vendors" id="navbarScrollingDropdown">
                  <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action4">
                    Another action
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action5">
                    Something else here
                  </NavDropdown.Item>
                </NavDropdown>
                <Nav.Link href="#">Contact</Nav.Link>
              </Nav>

              <Form className="d-flex">
                <Nav.Link className=" text-dark" href="#">
                  Login
                </Nav.Link>
                <Nav.Link className=" bg-danger text-white" href="#"  >
                  Sign Up
                </Nav.Link>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
}
