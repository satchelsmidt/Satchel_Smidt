import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import M from "materialize-css/dist/js/materialize.min.js"

class NavBar extends Component {

    componentDidMount() {
        let elems = document.querySelectorAll('.sidenav')
        let instances = M.Sidenav.init(elems, {
            menuWidth: 500,
            edge: 'right',
            inDuration: 200,
            closeOnClick: true
        })
    }

    render() {
        return (
            <div>
                <nav className="nav-wrapper grey darken-3 header">
                    <div className="nav-wrapper grey darken-3 header">
                        <h3 className="brand-logo center">Satchel Smidt</h3>
                        <Link to="/" data-target="mobile" className="sidenav-trigger right"><i className="material-icons">menu</i></Link>
                        <ul className="right hide-on-med-and-down">
                            {/* Link tags here prevent page from reloading + contacting server on each page load */}
                            <li><Link to="/about">About</Link></li>
                            <li><Link to="/resume">Resume</Link></li>
                            <li><Link to="/projects">Projects</Link></li>
                            <li><Link to="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </nav>

                {/* Must use <a> elements because that is what is read by navbar closeOnClick method */}
                <ul className="sidenav right" id="mobile">
                    <li><a href="/about">About</a></li>
                    <li><a href="/resume">Resume</a></li>
                    <li><a href="/projects">Projects</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
        )
    }
}

export default withRouter(NavBar)