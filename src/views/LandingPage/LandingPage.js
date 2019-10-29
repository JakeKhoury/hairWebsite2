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
      <Parallax filter image={require("assets/img/landingPageBG2.png")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Professional care for your hair.</h1>
              <h4 style={paraStyle}>
                Quality hair care services for <strong>men</strong> and <strong>women</strong>. Whether you
                just need a touch up or you want to reinvent your whole look, Dalton
                will take care of you with professional styling.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          {/* <ExtraSection /> */}
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
