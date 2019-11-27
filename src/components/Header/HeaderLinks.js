/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// new changes for reference
// import recompose 
import { compose } from 'recompose';

// import router HOC
import { withRouter } from 'react-router';

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { FormatListBulleted, Event, Face, Devices, AccountCircle } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = (props) => {
  const classes = useStyles(props);
  
  const pushTo = (route = "/") => () =>  {
    // Object Destructing. Same as const push = props.history.push but shorter and nicer.
    const { history: { push } } = props;
    push(route);
  };
  
  const matchesRoute = (route) => {
    const { history: {location: { pathname } }} = props;
    return route === pathname;
  }

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={pushTo('/services')}
          className={matchesRoute('/services') ? classes.navLinkHover : classes.navLink}
        >
          <FormatListBulleted className={classes.icons} /> Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={pushTo('/booking')}
          className={matchesRoute('/booking') ? classes.navLinkHover : classes.navLink}
        >
          <Event className={classes.icons} /> Book Now
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          // href="localhost:3000/about"
          color="transparent"
          onClick={pushTo('/about')}
          className={matchesRoute('/about') ? classes.navLinkHover : classes.navLink}

        >
          <Face className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={pushTo('/register')}
          className={matchesRoute('/register') ? classes.navLinkHover : classes.navLink}
        >
          <AccountCircle className={classes.icons} /> Account
        </Button>
      </ListItem>
    </List>
  );
}

export default compose(withRouter)(HeaderLinks);