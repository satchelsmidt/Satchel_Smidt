import React from 'react'
///withRouter is a higher order component, wraps a component and gives it more properties. It is passed in our export function. 
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = (props) => {

    // setTimeout(() => {
    //     props.history.push('/about')
    // }, 2000)

    return (
        <nav className="nav-wrapper">
            <div className="container">
                <a className="brand-logo">Satchel Smidt</a>
                <ul className="right">
                    {/* Link tags here prevent page from reloading + contacting server on each page load */}
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    {/* Using NavLink tag, sets class for link to 'active'. Helps with individual page styling */}
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </div>
        </nav>
    )
}

export default withRouter(NavBar)

//higher order components are functions that wrap other components and give them extra features/functionality. 