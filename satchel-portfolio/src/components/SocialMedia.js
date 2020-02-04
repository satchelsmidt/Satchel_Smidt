import React from 'react'
import Github from '../assets/github.png'
import Linkedin from '../assets/linkedin.png'


const SocialMedia = () => {
    return (
        <div>
            <img src={Linkedin} alt="Linkedin Logo" className="logo" />
            <p style={{display:'inline'}}><a href={"https://www.linkedin.com/in/satchelsmidt/"}
                target="_blank">Linkedin</a></p>

            <img src={Github} alt="Github Logo" className="logo" />
            <p style={{display:'inline'}}><a href={"https://github.com/satchelsmidt"} target="_blank">Github</a></p>
        </div>
    )
}

export default SocialMedia