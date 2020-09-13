import React from 'react'
import Resume from '../../assets/Satchel_Smidt_Dev_Resume.pdf'

const ContactPage = () => {
    return (
        <div className="row">
            <h5 className="projectHeader">Let's Connect</h5>
                <div className="contactCard card amber lighten-5 center">
                    <p>Email: satchelsmidt@gmail.com</p>
                    <p>Linkedin/Github: satchelsmidt</p>
                    <button className="waves-effect waves-light btn grey"><a href={Resume} download="satchel_smidt_resume.pdf">Download Resume</a></button>
                </div>
        </div>
    )
}

export default ContactPage