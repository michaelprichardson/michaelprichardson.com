import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/pages/landingPageSections/aboutStyle.js";

import profile from "assets/img/me.png";

const useStyles = makeStyles(styles);

export default function AboutMeSection() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>A bit about myself</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card plain>
              <GridItem xs={10} sm={6} md={4} className={classes.itemGrid}>
                <img src={profile} alt="Michael Richardson" className={imageClasses} />
              </GridItem>
              <CardBody>
                <p className={classes.description}>
                  I studied electrical and electronic engineering at Stellenbosch
                  University in South Africa.
                  I completed my bachelors and masters there.
                  I have a passion for the startup industry and really enjoy the
                  beginning stages of the business and being involved in everything.
                  I enjoy everything technology related and have a passion for programming
                  and machine learning.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
