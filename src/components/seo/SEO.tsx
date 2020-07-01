import React, { Component } from "react";
import { Helmet } from "react-helmet";

interface Props {
    title: string;
    description: string;
}

class SEO extends Component<Props> {
    render() {
        return (
          <Helmet
            title={this.props.title}
            titleTemplate={this.props.title}
            meta={[
              {
                name: `description`,
                content: this.props.description,
              },
              {
                property: `og:title`,
                content: this.props.title,
              },
              {
                property: `og:description`,
                content: this.props.description,
              },
              {
                property: `og:type`,
                content: `website`,
              },
              {
                name: `twitter:card`,
                content: this.props.description,
              },
              {
                name: `twitter:creator`,
                content: "Michael Richardson",
              },
              {
                name: `twitter:title`,
                content: this.props.title,
              },
              {
                name: `twitter:description`,
                content: this.props.description,
              },
            ]}
          >
            <meta charSet="utf-8" />
          </Helmet>
        );
    }
}

export default SEO;