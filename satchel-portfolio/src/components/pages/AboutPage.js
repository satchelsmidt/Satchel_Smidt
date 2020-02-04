import React from 'react'
import Satchel from '../../assets/Satchel_S.jpg'

//ADD DROP SHADOW

const AboutPage = () => {
    return (
        <div className="row">
            <div className="col l8 m9 s12 offset-m3 offset-l4">
                <h5 className="projectHeader">About Me</h5>
            </div>

            <div className="card amber lighten-5 col l8 m9 s12 offset-m3 offset-l4">
                <img className='satchelPic projectPic' src={Satchel} alt="Satchel Smidt"></img>
                <p>Hi there!</p>
                <p>I'm a recent graduate from the University of Washington, with a double degree in Management Information Systems and Operations Management. I've recently finished a full stack web development bootcamp through the University of Washington as well, where I received my certification in web development.</p>
                <p>I'm a JavaScript developer, and I've built a number of full-stack applications using Node, React, and Express, along with other technologies. I've also started exploring Python development, using Django as my framework of choice.</p>
                <p>Born and raised in the beautiful Pacific Northwest, I love the outdoors and getting lost in nature. I'm a wannabe gourmet chef, musician, and of course a techie.</p>
                <p>I love learning about and experimenting with new technologies, and the field of web development is full of opportunities for that. Excited to see where this path takes me, and to keep learning along the way.</p>
            </div>
        </div>
    )
}

export default AboutPage