import React, { Component } from "react";

import me from "../../assets/img/me.png";
import townaideLogo from "../../assets/img/logo_townaide.png";
import traxartLogo from "../../assets/img/logo_traxart.png";
import lemonLawLogo from "../../assets/img/logo_lemon_law.png";
import solteroLogo from "../../assets/img/logo_soltero.png";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container landing">
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
          <div className="col-md-6">
            <div className="row justify-content-center p-3">
              <div className="col-6">
                <img
                  src={townaideLogo}
                  className="project-logo"
                  alt="Townaide Logo"
                />
              </div>
              <div className="col-12 pt-3">
                <Link className="nav-link" to="/blog/post/townaide">
                  <h4>Townaide</h4>
                </Link>
              </div>
              <div className="col-12 pt-3">
                <p>
                  I was the co-founder of Townaide along with my father. It was
                  a platform where people could add local information and get
                  paid for it. I was responsible for everything technical. I
                  built everything from scratch.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row justify-content-center p-3">
              <div className="col-6">
                <img
                  src={traxartLogo}
                  className="project-logo"
                  alt="Traxart Logo"
                />
              </div>
              <div className="col-12 pt-3">
                <Link className="nav-link" to="/blog/post/traxart">
                  <h4>Traxart</h4>
                </Link>
              </div>
              <div className="col-12 pt-3">
                <p>
                  I recently became the co-founder adn CTO of Traxart. 
                  It started off as a platform to allows presenters to get better 
                  feedback about their presentations. Just after the Covid-19 pandemic 
                  started we had to pivot and now the platform specializes in sending 
                  hyper personalized emails to attendees of webinars.
                  </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row justify-content-center p-3">
              <div className="col-6">
                <img
                  src={lemonLawLogo}
                  className="project-logo"
                  alt="Lemon Law Logo"
                />
              </div>
              <div className="col-12 pt-3">
                <Link className="nav-link" to="/blog/post/lemon-law">
                  <h4>Lemon Law</h4>
                </Link>
              </div>
              <div className="col-12">
                <p>
                  This was a personal project that I started and am still busy with.
                  It is a dating app that allows users to chat via text (anonymously) 
                  for 200 seconds and then if they both agree to continue the conversation 
                  they match and can see more information about eachother.
                </p>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="row justify-content-center p-3">
              <div className="col-6">
                <img
                  src={solteroLogo}
                  className="project-logo"
                  alt="Soltero Logo"
                />
              </div>
              <div className="col-12 pt-3">
                <Link className="nav-link" to="/blog/post/soltero">
                  <h4>Soltero</h4>
                </Link>
              </div>
              <div className="col-12">
                <p>
                  This was a personal project that I started and am still busy with.
                  It is very similar to Instagram by you are only allowed to
                  post once every 24 hours and has the same layout as 
                  TikTok.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
