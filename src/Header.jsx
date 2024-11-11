import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'
import { BiSolidCameraMovie } from "react-icons/bi";
import { SiThemoviedatabase } from "react-icons/si";


const Header = () => {
  const [popularhover, setpopularhover] = useState(false)
  const [latesthover, setlatesthover] = useState(false)
  const [comedyhover, setcomedyhover] = useState(false)
  const [homehover, sethomehover] = useState(false)

  const hoverstyle = {
    color: "#D91656",
    textDecoration: "none"
  }
  const normalstyle = {
    color: "white",
    textDecoration: "none"
  }



  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home"><SiThemoviedatabase style={{ fontSize: "65px" }} /></Navbar.Brand>
          <BiSolidCameraMovie style={{ height: "3%", width: "3%",color:"#D91656" }} />

          <Nav className="ms-auto">
          <Nav.Link onMouseEnter={() => sethomehover(true)} onMouseLeave={() => sethomehover(false)} href="#pricing">
              <Link style={homehover == true ? hoverstyle : normalstyle} to={"/banner"}> Home </Link>
            </Nav.Link>
            <Nav.Link onMouseEnter={() => setlatesthover(true)} onMouseLeave={() => setlatesthover(false)} href="#features">
              <Link style={latesthover == true ? hoverstyle : normalstyle} to={"/latest"}> Latest Movies </Link>
            </Nav.Link>
            <Nav.Link onMouseEnter={() => setpopularhover(true)} onMouseLeave={() => setpopularhover(false)} href="#home">
              <Link style={popularhover == true ? hoverstyle : normalstyle} to={"/popular"} > Popular Movies </Link>
            </Nav.Link>
            <Nav.Link onMouseEnter={() => setcomedyhover(true)} onMouseLeave={() => setcomedyhover(false)} href="#pricing">
              <Link style={comedyhover == true ? hoverstyle : normalstyle} to={"/comedy"}> Comedy Movies </Link>
            </Nav.Link>

            
          </Nav>
        </Container>
      </Navbar>

    </div>
  )
}

export default Header