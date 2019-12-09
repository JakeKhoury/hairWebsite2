import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import Quote from "components/Typography/Quote.js";

import styles from "assets/jss/material-kit-react/views/servicesPage.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <Card className={classes.card}>
            <CardHeader color="info" style={{ fontSize: "1.4rem" }}>
              Men's Haircut - Starts at $35
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <Quote text="Complimentary neck and sideburn trim in between services" />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Women's Haircut - Starts at $55
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <Quote text="Complimentary bang trim in between services" />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="info" style={{ fontSize: "1.4rem" }}>
              Men's Beard Trim - Starts at $15
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="info" style={{ fontSize: "1.4rem" }}>
              Men's Gray Blending - Starts at $30
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="info" style={{ fontSize: "1.4rem" }}>
              Men's Color - Starts at $45
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Deep Conditioner - $20
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Shampoo / Blow-dry / Style - Starts at $40
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Base Color - Starts at $80
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              All-Over Color - Starts at $100
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Eyebrow Tinting - $15
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Partial Highlight - Starts at $95
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Full Highlight - Starts at $125
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Brazilian Blowout - Starts at $150
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <br></br>
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Up-Do's - Starts at $75 (on-site)
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <Quote text="Travel fee starts at $125" />
            </CardBody>
          </Card>
          <Card className={classes.card}>
            <CardHeader color="primary" style={{ fontSize: "1.4rem" }}>
              Hair Extensions - Starts at $300
            </CardHeader>
            <CardBody style={{ padding: "0.3rem 1.875rem" }}>
              <Quote text="(Price does not include the cost of the hair)" />
            </CardBody>
          </Card>
          <h4 style={{ float: "right", color: "black" }}>
            All services are à la carte
          </h4>
        </GridItem>
      </GridContainer>
    </div>
  );
}
