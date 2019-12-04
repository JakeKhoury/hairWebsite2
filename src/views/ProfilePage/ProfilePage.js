import React from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import LocationCity from "@material-ui/icons/LocationCity";
import Devices from "@material-ui/icons/Devices";
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import NavPills from "components/NavPills/NavPills.js";
import Parallax from "components/Parallax/Parallax.js";
import MapContainer from "components/MapContainer/MapContainer.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import profile from "assets/img/faces/avatar.png";

import styles from "assets/jss/material-kit-react/views/profilePage.js";

import logo from "assets/img/badge.png";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
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
        small
        filter
        image={require("assets/img/antique-barbershop-blur.jpg")}
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={profile} alt="..." className={imageClasses} />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>Dalton Martin</h3>
                    <h6>HAIRSTYLIST</h6>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes.description}>
              <h4>
                A skilled beauty service professional specializing in the
                fashioning and treatment of hair. Dalton has years of experience
                providing cuts, colorings, and stylings to his many clients.{" "}
              </h4>
            </div>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <CustomTabs
                  headerColor="primary"
                  tabs={[
                    {
                      tabName: "Contact",
                      tabIcon: Devices,
                      tabContent: (
                        <div>
                          <h3>
                            <b>Cell Phone: </b>(903) 266-0405
                          </h3>
                          <h3>
                            <b>Email: </b>daltonmartin@gmail.com
                          </h3>
                        </div>
                      )
                    },
                    {
                      tabName: "Location",
                      tabIcon: LocationCity,
                      tabContent: (
                        <div>
                          <div
                            style={{
                              width: "100%",
                              height: 500,
                              position: "relative"
                            }}
                          >
                            <h4><b>Salon Boutique</b></h4>
                            <h4>
                              <b>301 W Heritage Dr, Tyler TX, Suite #201</b>
                            </h4>
                            <MapContainer />
                          </div>
                          <div>
                            <br></br>
                            <br></br>
                            <br></br>
                          </div>
                        </div>
                      )
                    }
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}