import React from 'react'
import ProjectCard from '../ProjectCard'
import projects from '../../projects.json'

const ProjectPage = () => {

    const renderProjects = projects.map((project, index) => {
        return (
            <ProjectCard key={index} name={project.name} description={project.description} technologies={project.technologies} github={project.github_link} deployed={project.deployed_link} img={project.img_source} />
        )
    })

    return (
        <div className="row">
            <h5 className="projectHeader">Projects</h5>
            <div style={styles.projectContainer}>
                {renderProjects}
            </div>
        </div>
    )
}

export default ProjectPage

const styles = {
    projectContainer: {
        'marginTop': '10px',
        'display': 'flex',
        'flexWrap': 'wrap',
        'flexDirection': 'row',
        'justifyContent': 'space-around',
        'alignItems': 'center',
        'height': 'auto',
    }
}