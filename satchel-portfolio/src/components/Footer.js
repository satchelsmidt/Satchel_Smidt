import React from 'react'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'

const Footer = () => {

    var style = {
        padding: "0px",
        paddingTop: "0px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "55px",
        width: "98%",
        // opacity: ".8",
        margin: "10px 10px 10px 15px"
    }

    var phantom = {
        display: 'block',
        padding: '0px',
        height: '80px',
        width: '100%',
    }

    return (
        <div>
            <div style={phantom} />

            <footer className="page-footer" style={style}>
                <div className="footer-copyright" style={{ paddingTop: '4px' }}>
                    <div className="left copyright">
                        © 2020 Satchel Smidt
                    </div>
                    <div className="right">
                        <a href={"https://www.linkedin.com/in/satchelsmidt/"}
                            target="_blank" rel="noopener noreferrer"><img src={Linkedin} alt="Linkedin Logo" className="logo"/></a>
                        <a href={"https://github.com/satchelsmidt"} target="_blank" rel="noopener noreferrer"><img src={Github} alt="Github Logo" className="logo" /></a>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer