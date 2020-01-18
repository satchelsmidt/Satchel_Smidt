import React from 'react'
//custom higher order component to make text of component all rainbow colored

const Rainbow = (WrappedComponent) => {
    const colors = ['red', 'pink', 'orange', 'blue', 'green', 'yellow', 'brown'];
    const randomColor = colors[Math.floor(Math.random() * 5)];

    const className = randomColor + "-text";

    return (props) => {
        return (
            <div className={className}>
                <WrappedComponent {...props} />
            </div>
        )
    }
}

export default Rainbow
