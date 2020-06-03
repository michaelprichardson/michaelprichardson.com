import React, { Component } from "react";

import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";

class Blog extends Component {
    render() {
        return (
            <div className="container blog">
                <BlogHeader></BlogHeader>
                <BlogBody></BlogBody>
            </div>
        );
    }
}

export default Blog;
