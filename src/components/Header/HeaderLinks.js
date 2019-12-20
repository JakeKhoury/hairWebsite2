/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// new changes for reference
// import recompose
import { compose } from "recompose";

// import router HOC
import { withRouter } from "react-router";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";
import { useDispatch, useSelector } from "react-redux";
import { USER_SIGN_OUT } from "actions/actionTypes";
import Swal from "sweetalert2";
// @material-ui/icons
import {
  FormatListBulleted,
  Event,
  Face,
  Devices,
  AccountCircle
} from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

const HeaderLinks = props => {
  const classes = useStyles(props);
  const name = useSelector(state => state.user.name);
  const token = useSelector(state => state.user.token);
  const dispatch = useDispatch();

  const pushTo = (route = "/") => () => {
    // Object Destructing. Same as const push = props.history.push but shorter and nicer.
    const {
      history: { push }
    } = props;
    push(route);
  };

  const logout = async () => {
    try {
      dispatch({
        type: USER_SIGN_OUT,
        payload: {}
      });
    } catch (e) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: e
      });
    }
  };

  const matchesRoute = route => {
    const {
      history: {
        location: { pathname }
      }
    } = props;
    return route === pathname;
  };

  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={pushTo("/services")}
          className={
            matchesRoute("/services") ? classes.navLinkHover : classes.navLink
          }
        >
          <FormatListBulleted className={classes.icons} /> Services
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={pushTo("/booking")}
          className={
            matchesRoute("/booking") ? classes.navLinkHover : classes.navLink
          }
        >
          <Event className={classes.icons} /> Book Now
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          onClick={pushTo("/about")}
          className={
            matchesRoute("/about") ? classes.navLinkHover : classes.navLink
          }
        >
          <Face className={classes.icons} /> About
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText={name ? name : "Account"}
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={AccountCircle}
          dropdownList={
            name
              ? [
                  <Link to="/" onClick={logout} className={classes.dropdownLink}>
                    Log Out
                  </Link>,
                  <Link to="/dashboard" className={classes.dropdownLink}>
                    Dashboard
                  </Link>
                ]
              : [
                  <Link to="/register" className={classes.dropdownLink}>
                    Create Account
                  </Link>,
                  <Link to="/login" className={classes.dropdownLink}>
                    Log In
                  </Link>
                ]
          }
        />
      </ListItem> */}
    </List>
  );
};

export default compose(withRouter)(HeaderLinks);
