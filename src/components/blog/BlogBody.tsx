import React, { Component } from "react";

interface Props {
    blogContent: BlogContent[];
}

class BlogBody extends Component<Props> {
    render() {
        const content = this.props.blogContent.map((item, index) => {
            if (item.type === 'text') {
                return (
                    <div className="col-12 pt-3 pb-3">
                        <p>{item.content}</p>
                    </div>
                );
            }
            else if (item.type === 'image') {
                return (
                    <div className="col-12 pt-3 pb-3">
                        <img className="img-fluid" src={item.content} alt={item.alt}></img>
                    </div>
                );
            }
            else {
                return null;
            }
        });

        return (
            <div className="container blog-body">
                <div className="row p-3 pt-3 pb-5">
                    {content}
                </div>
            </div>
        );
    }
}

export default BlogBody;

export interface BlogContent {
    type: string;
    content: string;
    alt?: string;
}
