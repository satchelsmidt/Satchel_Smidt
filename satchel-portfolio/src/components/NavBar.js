import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const NavBar = (props) => {

    return (
        <nav className="nav-wrapper">
            <div className="container">
                <a className="brand-logo">Satchel Smidt</a>
                <ul className="right">
                    {/* Link tags here prevent page from reloading + contacting server on each page load */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)