import React from 'react'
import Resume from '../../assets/resume.jpg'

const ResumePage = () => {
    return (
        <div className="row">
            <div className="col l8 m9 s12 offset-m3 offset-l4">
                <h5 className="projectHeader">Resume</h5>
            </div>

            <div className="col l8 m9 s12 offset-m3 offset-l4">
                <img className="resumePic" src={Resume} alt="resume"></img>
            </div>
        </div>
    )
}

export default ResumePage