import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

import { spacing } from '@material-ui/system';

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";

import { cardTitle } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

import styles from "assets/jss/material-kit-react/views/servicesPage.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card className={classes.card}>
            <CardHeader color="info" style={{fontSize: "1.4rem"}}>Men's Express Haircut - $45</CardHeader>
            <CardBody>
              <Quote
                text="A classic haircut with just the style you want."
              />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="info" style={{fontSize: "1.4rem"}}>Men's Deluxe Haircut - $55</CardHeader>
            <CardBody>
              <Quote
                text="Haircut, shampoo/conditioner & hot towel finish."
              />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{fontSize: "1.4rem"}}>Women's Express Haircut - $55</CardHeader>
            <CardBody>
              <Quote
                text="A classic haircut with just the style you want."
              />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{fontSize: "1.4rem"}}>Women's Deluxe Haircut - $75</CardHeader>
            <CardBody>
              <Quote
                text="Haircut, shampoo/conditioner & hot towel finish."
              />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{fontSize: "1.4rem"}}>Women's Hair Coloring - $95</CardHeader>
            <CardBody>
              <Quote
                text="A hair coloring session to transform your look."
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}