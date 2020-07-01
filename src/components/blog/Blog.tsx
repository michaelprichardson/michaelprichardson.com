import React, { Component } from "react";
import * as firebase from "firebase/app";

import BlogHeader from "./BlogHeader";
import BlogBody from "./BlogBody";
import { RouteProps } from "react-router-dom";
import { BlogContent } from './BlogBody';

import projectData from '../../assets/data/projects.json';
import SEO from "../seo/SEO";

interface Props { 
    match: { 
        params: {
            postId: string
        }
    } 
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
        firebase.analytics().logEvent(postId);
    }

    render() {
        const { blogPost } = this.state;
        
        return (
          <div className="container blog">
            {blogPost ? (
              <div>
                <SEO
                  title={`${blogPost.title} | Michael Richardson`}
                  description={blogPost.short_description}
                ></SEO>
                <BlogHeader
                  imageUrl={blogPost.image_url}
                  title={blogPost.title}
                  date={blogPost.date}
                ></BlogHeader>
                <BlogBody blogContent={blogPost.content}></BlogBody>
              </div>
            ) : (
              <div>Loading...</div>
            )}
          </div>
        );
    }
}

export default Blog;

export interface BlogPost {
    image_url: string;
    title: string;
    post_id: string;
    short_description: string;
    github_url: string;
    date: string;
    content: BlogContent[];
}
