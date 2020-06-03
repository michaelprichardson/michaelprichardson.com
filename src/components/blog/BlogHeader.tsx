import React, { Component } from "react";

interface Props {
    imageUrl: string;
    title: string;
    date: string;
}

class BlogHeader extends Component<Props> {
    render() {
        return (
            <div className="container blog-header">
                <div className="row pt-5 justify-content-center">
                    <div className="col-3">
                        <img 
                            src={this.props.imageUrl} 
                            className="blog-header-image" 
                            alt={`${this.props.title} Logo`}
                        />
                    </div>
                </div>
                <div className="row pt-3">
                    <div className="col-12">
                        <h2>{this.props.title}</h2>
                    </div>
                </div>
                <div className="row justify-content-center pb-3">
                    <div className="col-12">
                        <i>{this.props.date}</i>
                    </div>
                </div>
            </div>
        );
    }
}

export default BlogHeader;
