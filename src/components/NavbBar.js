import React from 'react';
import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'

//import './Navbar.css'

function NavbBar(props) {
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark justify-content-between">
            <Link className="navbar-brand" to="/"><img className="brand" src={logo} alt="my "/></Link>

            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/bios" className="nav-link">Developer Bios</Link>
                </li>
                <li className="nav-item" >
                    <Link to="/create-bio" className="nav-link" >Create Bios</Link>
                </li>
            </ul>
        </nav>
    );
}

export default NavbBar;