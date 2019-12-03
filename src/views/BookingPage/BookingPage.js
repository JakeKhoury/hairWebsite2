import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui imports
// import AppBar from "@material-ui/core/AppBar";
// import RaisedButton from "@material-ui/core/RaisedButton";
// import FlatButton from "@material-ui/core/FlatButton";
// import moment from "moment";
// import DatePicker from "@material-ui/core/DatePicker";
// import Dialog from "@material-ui/core/Dialog";
// import SelectField from "@material-ui/core/SelectField";
// import MenuItem from "@material-ui/core/MenuItem";
// import TextField from "@material-ui/core/TextField";
// import SnackBar from "@material-ui/core/Snackbar";
// import Card from "@material-ui/core/Card";
// import { Step, Stepper, StepLabel, StepContent } from "@material-ui/core/Stepper";
// import { RadioButton, RadioButtonGroup } from "@material-ui/core/RadioButton";
// import axios from "axios";

// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import ProductSection from "./Sections/ProductSection.js";
import TeamSection from "./Sections/TeamSection.js";
import WorkSection from "./Sections/WorkSection.js";
import ScheduleSection from "./Sections/ScheduleSection.js";

import logo from "assets/img/badge.png";

const API_BASE = "http://localhost:8080/";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const paraStyle = {
  display: "inline"
};

const titleStyle = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  containter: "true"
};

export default function LandingPage(props) {
  const classes = useStyles();
  const { ...rest } = props;

  return (
    <div>
      <Header
        color="transparent"
        routes={dashboardRoutes}
        logo={logo}
        brand="Hair by Dalton"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "white"
        }}
        {...rest}
      />
      <Parallax
        filter
        image={require("assets/img/back-view-blonde-curly-hair.jpg")}
      >
        <div className={classes.container}>
          <GridContainer name="titleText" /*style={titleStyle}*/>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Book your appointment online.</h1>
              <br></br>
              <h4 style={paraStyle}>
                See what{"'"}s available and request your appointent now.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6}>
              <div style={{ height: 300 }}></div>
            </GridItem>
          </GridContainer>
        </div>
      </div>
      <Footer />
    </div>
  );
}
