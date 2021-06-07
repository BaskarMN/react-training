import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

const header = () => {
    return (
        <Navbar bg="light" expand="lg">            
  
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
    <LinkContainer to="/">
      <Nav.Link>HomePage</Nav.Link>
      </LinkContainer>
        <LinkContainer to="/lifecycle">
      <Nav.Link>Component Lifecycle</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/hooks">
      <Nav.Link>Hooks Example</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/signup">
      <Nav.Link>SignUp</Nav.Link>
      </LinkContainer>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    )
}

export default header