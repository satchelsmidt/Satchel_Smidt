import React, { Component } from 'react'
import Github from "../assets/github.png"
class ProjectCard extends Component {


    render() {

        return (
            <div className="col l6 m9 s12 cardCol">
                <div className="card projectCard amber lighten-5">
                    <a href={this.props.deployed} className="deployedLink" target="_blank" rel="noopener noreferrer"><h3 className="card-title">{this.props.name}</h3></a>
                    <div className="card-image">
                        <a href={this.props.deployed} className="deployedLink" target="_blank" rel="noopener noreferrer"><img className="projectPic" src={require('../assets/' + this.props.img)} alt="project"/></a>
                        <a className="btn-floating halfway-fab waves-effect waves-light white" href={this.props.github} target="_blank" rel="noopener noreferrer"><img src={Github} className="githubSmall" alt="github"></img></a>
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <p>{this.props.description}</p>
                        </div>
                        <div className="card-action">
                            <p className="projectDesc">Built with: {this.props.technologies.join(", ")}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProjectCard

