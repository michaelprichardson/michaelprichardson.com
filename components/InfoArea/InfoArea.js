import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
import Link from 'next/link';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import styles from "assets/jss/components/infoStyle.js";

const useStyles = makeStyles(styles);

export default function InfoArea(props) {
  const classes = useStyles();
  const { id, title, description, url, iconColor, vertical } = props;
  const iconWrapper = classNames({
    [classes.iconWrapper]: true,
    [classes[iconColor]]: true,
    [classes.iconWrapperVertical]: vertical
  });
  const iconClasses = classNames({
    [classes.icon]: true,
    [classes.iconVertical]: vertical
  });
  return (
    <div className={classes.infoArea}>
      <div className={iconWrapper}>
        <img src={props.icon} className={iconClasses} />
      </div>
      <div className={classes.descriptionWrapper}>
        <a href={`/post/${id}`}>
          <h4 className={classes.title}>{title}</h4>
        </a>
        <p className={classes.description}>{description}</p>
        <a href={url}>
          <i class="fab fa-github fa-2x"></i>
        </a>
      </div>
    </div>
  );
}

InfoArea.defaultProps = {
  iconColor: "gray"
};

InfoArea.propTypes = {
  icon: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconColor: PropTypes.oneOf([
    "primary",
    "warning",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  vertical: PropTypes.bool
};
