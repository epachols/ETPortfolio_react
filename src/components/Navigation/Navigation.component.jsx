import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import { BrowserRouter as Link } from 'react-router-dom'

export default function Nav() {
    return (
        <>
           <Navbar>
               <Navbar.Brand href="#">codecrow image here(or something)</Navbar.Brand>
               <Navbar.Toggle aria-controls="responsive-navbar-nav" />
               <Navbar.Collapse id="responsive-navbar-nav">
               <Nav className="mx-auto">
                   <Link to="/about">About</Link>
                   <Link>Portfolio</Link>
                   <Link>Contact</Link>
               </Nav>  
               </Navbar.Collapse>
           </Navbar> 
        </>
    )
}
