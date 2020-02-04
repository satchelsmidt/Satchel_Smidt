import React, { Component } from 'react'
import Github from "../assets/github.png"
class ProjectCard extends Component {


    render() {

        return (
            <div className="col l6 m9 s12 cardCol">
                <div className="card projectCard amber lighten-5">
                    <h3 className="card-title">{this.props.name}</h3>
                    <div className="card-image">
                        <img src={require('../assets/'+ this.props.img)}/>

                        {/* <a className="btn-floating halfway-fab waves-effect waves-light red" href={this.props.github} target="_blank"><i className="material-icons">add</i></a> */}
                        <a className="btn-floating halfway-fab waves-effect waves-light white" href={this.props.github} target="_blank"><img src={Github} className="githubSmall"></img></a>
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

