import React, { Component } from "react";

interface Props {
    blogContent: BlogContent[];
}

class BlogBody extends Component<Props> {
    createMarkup(value: string) {
        return { __html: value };
    }

    render() {
        const content = this.props.blogContent.map((item, index) => {
            if (item.type === 'text') {
                return (
                    <div className="col-12 pt-3 pb-3" dangerouslySetInnerHTML={this.createMarkup(item.content)}></div>
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
                <div className="row p-3 pt-3 pb-0">
                    {content}
                </div>
                <div className="row p-3 pt-1 pb-5 text-center">
                    <div className="col-12">
                        <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/mprichardson_"><i className="fab fa-twitter fa-2x twitter"></i> </a>
                    </div>
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
