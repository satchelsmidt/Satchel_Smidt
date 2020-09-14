import React, { Component } from 'react'
import ProjectCard from './ProjectCard'
import projects from '../projects.json'

class Projects extends Component {

    state = {
        projects
    }

    render() {

        const projectList = this.state.projects.map(project => {
            return (
                <ProjectCard name={project.name} description={project.description} technologies={project.technologies} github={project.github_link} deployed={project.deployed_link} img={project.img_source}/>
            )
        })

        return (
            <div className="col">
                {/* <div className="row projectRow"> */}
                    {projectList}
                {/* </div> */}
            </div>
        )
    }
}

export default Projects

