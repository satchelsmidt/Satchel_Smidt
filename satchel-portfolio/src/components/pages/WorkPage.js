import React from 'react'
import Carousel from '../Carousel'

const WorkPage = () => {
    return (
        <div className="row">
            <h5 className="projectHeader">Ethical Identity / Trusted Arms</h5>
            <div className="aboutCard card amber lighten-5">
                <p>I'm currently working remotely for a blockchain security startup based out of Austin.</p>

                <p>Since starting in April 2020, I've helped build out the mobile presence for the company from scratch in React Native and Ruby on Rails.</p>

                <p>I've worked with the UI/UX design of the app, unit testing of components, environment setup, IOS native features such as device orientation listeners, and more.</p>

                <p>Here are some snippets of my work on the frontend of the app:</p>

                <Carousel />
            </div>
        </div>
    )
}

export default WorkPage