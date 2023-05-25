import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import squirtle from "../../public/squirtle.jpg";

function Navigation({ changeTheme, theme }) {
  return (
    <Navbar sticky="top" bg={theme} variant={theme} className="nav">
      <Container>
        <Navbar.Brand>
          <Image src={squirtle} width="30" className="me-2" />
          Reel Girls Movie Trailers
        </Navbar.Brand>

        <Nav className="ms-auto">
          <Nav.Link as="div">
            <NavLink to="/" className="allMovies">
              All Movies
            </NavLink>
          </Nav.Link>
        </Nav>
        <div>
          <input type="checkbox" onChange={changeTheme} id="theme-toggle" />
          <label htmlFor="theme-toggle"> Toggle Theme</label>
        </div>
      </Container>
    </Navbar>
  );
}

export { Navigation };
