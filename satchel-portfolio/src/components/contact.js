import React from 'react'

// Passing in props to child of component w/ router tag gives us access to routing info in that component
const Contact = (props) => {

    //this function redirects user to about page after two seconds
    setTimeout(()=>{
        props.history.push('/about')
    }, 2000);

    return (
        <div className="container">
            <h2 className="center">
                <p>Welcome to Contact</p>
            </h2>
        </div>
    )
}

export default Contact