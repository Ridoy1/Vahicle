import React, { useContext } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';


const NavBar = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Hridoy Riders</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto mr-5">
                <Nav.Link className="mr-5"><Link className="text-dark" to="/">Home</Link></Nav.Link>
                <Nav.Link className="mr-5"><Link className="text-dark" to="/destination">Destination</Link></Nav.Link>
                <Nav.Link className="mr-5"><Link className="text-dark" to="/contact">Contact</Link></Nav.Link>
                <Nav.Link className="mr-5 bg-warning"><Link className="text-dark" to="/login" style={{ textDecoration: "none", color: "rgb(2, 56, 38)" }}>
                    {loggedInUser.name ? loggedInUser.name : "Login"}</Link></Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
};

export default NavBar;