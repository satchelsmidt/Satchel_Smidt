import React from 'react'
import Resume from '../../assets/resume.png'

const ResumePage = () => {
    return (
        <div className="row">
 <div className="contentDiv">
            <h5 className="projectHeader">Resume</h5>
            <img className="resumePic center" src={Resume} alt="resume"></img>
        </div>
        </div>
       
    )
}

export default ResumePage