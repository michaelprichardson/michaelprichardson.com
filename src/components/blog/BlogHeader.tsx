import React, { Component } from "react";

import townaideLogo from "../../assets/img/logo_townaide.png";

class BlogHeader extends Component {
    render() {
        return (
            <div className="container blog-header">
                <div className="row pt-5 justify-content-center">
                    <div className="col-3">
                        <img src={townaideLogo} className="blog-header-image" alt="Blog header" />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <h2>Blog Title</h2>
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-12">
                        <i>03/06/2020</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogHeader;
