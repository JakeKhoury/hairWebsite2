import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

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

import logo from 'assets/img/badge.png';

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

const paraStyle = {
  display: 'inline'
};

const titleStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  alignContent: 'center',
  containter: 'true'
}

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
      {/* <Parallax filter image={require("assets/img/woman-hair-styling.jpg")}> */}
      {/* <Parallax filter image={require("assets/img/brunette-woman-in-salon-chair.jpg")}> */}
      <Parallax filter image={require("assets/img/hairdresser.jpg")}>
        <div className={classes.container}>
          <GridContainer name="titleText" /*style={titleStyle}*/>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Book your appointment online.</h1>
              <br></br>
              <h4 style={paraStyle}>
                See what{"'"}s available and request your appointent now.
              </h4>
              {/* <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button> */}
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <TeamSection /> */}
          {/* <WorkSection /> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
