import React, { Component } from "react";

import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import { RouteProps } from "react-router-dom";

import projectData from '../../data/projects.json';

interface Props { 
    match: { 
        params: {
            postId: string
        }
    } 
}

interface BlogPost {
    image_url: string;
    title: string;
    post_id: string;
    short_description: string;
    full_description: string;
    github_url: string;
}

interface State {
    blogPost?: BlogPost
}

class Blog extends Component<Props & RouteProps, State> {

    constructor(props: Props) {
        super(props);
        this.state = { }
    }

    componentDidMount(){
        const postId = this.props.match.params.postId;
        const posts = projectData.projects.filter(project => project.post_id === postId);

        if (posts.length > 0) {
            this.setState({ blogPost: posts[0] });
        }

        window.scrollTo(0, 0);
    }

    render() {
        const { blogPost } = this.state;
        
        return (
            <div className="container blog">
                {blogPost ? 
                (
                    <div>
                        <BlogHeader 
                            imageUrl={blogPost.image_url}
                            title={blogPost.title}
                            date={'03/06/2020'}
                        ></BlogHeader>
                        <BlogBody></BlogBody>
                    </div>
                ) : (
                     <div>Loading...</div>
                )
                }
            </div>
        );
    }
}

export default Blog;
