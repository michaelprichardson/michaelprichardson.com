import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/pages/landingPageSections/projectsStyle.js";

import { posts } from "assets/data/posts.js";

const useStyles = makeStyles(styles);

export default function ProjectsSection() {
  const classes = useStyles();

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Projects</h2>
          <p className={classes.description}>
            Here is a collection of some of the projects I have worked on in the past few years.
          </p>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          {posts.map((post, index) => {
            return (
              <GridItem key={post.id} xs={12} sm={12} md={6}>
                <InfoArea
                  id={post.id}
                  title={post.title}
                  description={post.description}
                  icon={require(`assets/img/posts/${post.id}.png`)}
                  iconColor="info"
                  vertical
                />
              </GridItem>
            )
          })}
        </GridContainer>
      </div>
    </div>
  );
}
