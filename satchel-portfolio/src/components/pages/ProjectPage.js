import React from 'react'
import Projects from '../ProjectRow'

const ProjectPage = () => {
    return (
        <div className="row">
            <div className="projectHeader card amber lighten-5 col l8 m9 s12 offset-m3 offset-l4">
                <h5 className="pageHeader left">Projects</h5>
            </div>
            <Projects />

        </div>

    )
}

export default ProjectPage