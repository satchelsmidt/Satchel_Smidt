import React from 'react'
import Resume from '../../assets/Satchel_Smidt_Dev_Resume.pdf'
// Passing in props to child of component w/ router tag gives us access to routing info in that component
const ContactPage = () => {

    return (
        <div className="row">
            <div className="col l8 m9 s12 offset-m3 offset-l4">
                <h5 className="projectHeader">Let's Connect</h5>
            </div>
            <div className="card amber lighten-5 col l8 m9 s12 offset-m3 offset-l4">
                {/* <h5>Let's Connect</h5> */}
                <p>Email: <strong>satchelsmidt@gmail.com</strong></p>
                <p>Linkedin/Github: <strong>satchelsmidt</strong></p>
                <button className="waves-effect waves-light btn grey"><a href={Resume} download="satchel_smidt_resume.pdf">Download Resume</a></button>
                <p></p>
            </div>
        </div>
    )
}

export default ContactPage