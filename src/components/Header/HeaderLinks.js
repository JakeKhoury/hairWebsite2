/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload, FormatListBulleted, Event, Face, Devices } from "@material-ui/icons";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      {/* <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Services"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/login-page" className={classes.dropdownLink}>
              For Women
            </Link>,
            <Link to="/" className={classes.dropdownLink}>
              For Men
            </Link>
            // <a
            //   href=""
            //   target="_blank"
            //   className={classes.dropdownLink}
            // >
            //   For Men
            // </a>
          ]}
        />
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          href="local:3000/services"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <FormatListBulleted className={classes.icons} /> Services
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="localhost:3000/booking"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Event className={classes.icons} /> Book Now
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="localhost:3000/about"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Face className={classes.icons} /> About
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="localhost:3000/contact"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Devices className={classes.icons} /> Contact
        </Button>
      </ListItem>
    </List>
  );
}
