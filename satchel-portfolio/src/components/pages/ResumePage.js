import React from 'react'
import Resume from '../../assets/resume.jpg'

const ResumePage = () => {
    return (
        <div className="row">
            <div className="projectHeader card amber lighten-5 col l8 m9 s12 offset-m3 offset-l4">
                <h5 className="pageHeader left">Resume</h5>
            </div>
            <div className="card amber lighten-5 col l8 m9 s12 offset-m3 offset-l4">
                <img className="resumePic" src={Resume} alt="resume"></img>
            </div>
        </div>
    )
}

export default ResumePage