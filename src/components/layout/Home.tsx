import React, { Component } from "react";

import me from "../../assets/img/me.png";
import { Link } from "react-router-dom";

import projectData from '../../data/projects.json';

class Home extends Component {
  render() {
    const projects = projectData.projects.map((project, index) => {
      return (
        <div key={index} className="col-md-6">
          <div className="row justify-content-center p-3">
            <div className="col-6">
              <img
                src={project.image_url}
                className="project-logo"
                alt={`${project.title} Logo`}
              />
            </div>
            <div className="col-12 pt-3">
              <Link className="nav-link" to={`/blog/post/${project.post_id}`}>
                <h4>{project.title}</h4>
              </Link>
            </div>
            <div className="col-12 pt-3">
              <p>{project.short_description}</p>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container home">
        <div className="row pt-5 justify-content-center">
          <div className="col-3">
            <img src={me} className="profile-image" alt="Michael Richardson" />
          </div>
        </div>

        <div className="row p-3">
          <div className="col-12">
            <h2>A bit about myself</h2>
          </div>
          <div className="col-12">
            I studied electrical and electronic engineering at Stellenbosch University in South Africa. 
            I am currently working wth on Traxart as the co-founder and CTO.
            I completed my bachelors and masters there. My undergraduate project was 
            "<a href="https://www.youtube.com/watch?v=yBcdm20Ounc"><i>Load Balancing using Dynamic Spatial Partitioning</i></a>". 
            The topic of research for my Masters was 
            "<a href="http://hdl.handle.net/10019.1/103536"><i>Physical Optics Based Methods for Scattering Analysis</i></a>".
          </div>
        </div>

        <div className="row p-3 mt-5">
          <div className="col-12">
            <h2>Personal &amp; Professional Projects</h2>
          </div>
        </div>

        <div className="row p-3">
          {projects}
        </div>
      </div>
    );
  }
}

export default Home;
