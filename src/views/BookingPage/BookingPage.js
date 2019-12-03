import React, { Component } from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui imports
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import FlatButton from "material-ui/FlatButton";
import moment from "moment";
import DatePicker from "material-ui/DatePicker";
import Dialog from "material-ui/Dialog";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import TextField from "material-ui/TextField";
import SnackBar from "material-ui/Snackbar";
import Card from "material-ui/Card";
import { Step, Stepper, StepLabel, StepContent } from "material-ui/Stepper";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";
import axios from "axios";

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

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [schedule, setschedule] = React.useState([]);
  const [confirmationModalOpen, setConfirmationModalOpen] = React.useState(false);
  const [appointmentDateSelected, setAppointmentDateSelected] = React.useState(false);
  const [appointmentMeridiem, setAppointmentMeridiem] = React.useState(0);
  const [validEmail, setValidEmail] = React.useState(true);
  const [validPhone, setValidPhone] = React.useState(true);
  const [finished, setFinished] = React.useState(false);
  const [smallScreen, setSmallScreen] = React.useState(window.innerWidth < 768);
  const [stepIndex, setStepIndex] = React.useState(0);

  const componentWillMount = () => {
    axios.get(API_BASE + `api/retrieveSlots`).then(response => {
      console.log("response via db: ", response.data);
      this.handleDBReponse(response.data);
    });
  };
  const handleSetAppointmentDate = (date) => {
    this.setState({ appointmentDate: date, confirmationTextVisible: true });
  };
  const handleSetAppointmentSlot = (slot) => {
    this.setState({ appointmentSlot: slot });
  };
  const handleSetAppointmentMeridiem = (meridiem) => {
    this.setState({ appointmentMeridiem: meridiem });
  };
  const handleSubmit = () => {
    this.setState({ confirmationModalOpen: false });
    const newAppointment = {
      name: this.state.firstName + " " + this.state.lastName,
      email: this.state.email,
      phone: this.state.phone,
      slot_date: moment(this.state.appointmentDate).format("YYYY-DD-MM"),
      slot_time: this.state.appointmentSlot
    };
    axios
      .post(API_BASE + "api/appointmentCreate", newAppointment)
      .then(response =>
        this.setState({
          confirmationSnackbarMessage: "Appointment succesfully added!",
          confirmationSnackbarOpen: true,
          processed: true
        })
      )
      .catch(err => {
        console.log(err);
        return this.setState({
          confirmationSnackbarMessage: "Appointment failed to save.",
          confirmationSnackbarOpen: true
        });
      });
  };

  const handleNext = () => {
    const { stepIndex } = this.state;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 2
    });
  };

  const handlePrev = () => {
    const { stepIndex } = this.state;
    if (stepIndex > 0) {
      this.setState({ stepIndex: stepIndex - 1 });
    }
  };
  const validateEmail = (email) => {
    const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return regex.test(email)
      ? this.setState({ email: email, validEmail: true })
      : this.setState({ validEmail: false });
  };
  const validatePhone = (phoneNumber) => {
    const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return regex.test(phoneNumber)
      ? this.setState({ phone: phoneNumber, validPhone: true })
      : this.setState({ validPhone: false });
  };
  const checkDisableDate = (day) => {
    const dateString = moment(day).format("YYYY-DD-MM");
    return (
      this.state.schedule[dateString] === true ||
      moment(day)
        .startOf("day")
        .diff(moment().startOf("day")) < 0
    );
  };

  const handleDBReponse = (response) => {
    const appointments = response;
    const today = moment().startOf("day"); //start of today 12 am
    const initialSchedule = {};
    initialSchedule[today.format("YYYY-DD-MM")] = true;
    const schedule = !appointments.length
      ? initialSchedule
      : appointments.reduce((currentSchedule, appointment) => {
          const { slot_date, slot_time } = appointment;
          const dateString = moment(slot_date, "YYYY-DD-MM").format(
            "YYYY-DD-MM"
          );
          !currentSchedule[slot_date]
            ? (currentSchedule[dateString] = Array(8).fill(false))
            : null;
          Array.isArray(currentSchedule[dateString])
            ? (currentSchedule[dateString][slot_time] = true)
            : null;
          return currentSchedule;
        }, initialSchedule);

    for (let day in schedule) {
      let slots = schedule[day];
      slots.length
        ? slots.every(slot => slot === true)
          ? (schedule[day] = true)
          : null
        : null;
    }

    this.setState({
      schedule: schedule
    });
  };
  const renderAppointmentConfirmation = () => {
    const spanStyle = { color: "#00C853" };
    return (
      <section>
        <p>
          Name:{" "}
          <span style={spanStyle}>
            {this.state.firstName} {this.state.lastName}
          </span>
        </p>
        <p>
          Number: <span style={spanStyle}>{this.state.phone}</span>
        </p>
        <p>
          Email: <span style={spanStyle}>{this.state.email}</span>
        </p>
        <p>
          Appointment:{" "}
          <span style={spanStyle}>
            {moment(this.state.appointmentDate).format(
              "dddd[,] MMMM Do[,] YYYY"
            )}
          </span>{" "}
          at{" "}
          <span style={spanStyle}>
            {moment()
              .hour(9)
              .minute(0)
              .add(this.state.appointmentSlot, "hours")
              .format("h:mm a")}
          </span>
        </p>
      </section>
    );
  };
  const renderAppointmentTimes = () => {
    if (!this.state.isLoading) {
      const slots = [...Array(8).keys()];
      return slots.map(slot => {
        const appointmentDateString = moment(this.state.appointmentDate).format(
          "YYYY-DD-MM"
        );
        const time1 = moment()
          .hour(9)
          .minute(0)
          .add(slot, "hours");
        const time2 = moment()
          .hour(9)
          .minute(0)
          .add(slot + 1, "hours");
        const scheduleDisabled = this.state.schedule[appointmentDateString]
          ? this.state.schedule[
              moment(this.state.appointmentDate).format("YYYY-DD-MM")
            ][slot]
          : false;
        const meridiemDisabled = this.state.appointmentMeridiem
          ? time1.format("a") === "am"
          : time1.format("a") === "pm";
        return (
          <RadioButton
            label={time1.format("h:mm a") + " - " + time2.format("h:mm a")}
            key={slot}
            value={slot}
            style={{
              marginBottom: 15,
              display: meridiemDisabled ? "none" : "inherit"
            }}
            disabled={scheduleDisabled || meridiemDisabled}
          />
        );
      });
    } else {
      return null;
    }
  };
  const renderStepActions = (step) => {
    const { stepIndex } = this.state;

    return (
      <div style={{ margin: "12px 0" }}>
        <RaisedButton
          label={stepIndex === 2 ? "Finish" : "Next"}
          disableTouchRipple={true}
          disableFocusRipple={true}
          primary={true}
          onClick={this.handleNext}
          backgroundColor="#00C853 !important"
          style={{ marginRight: 12, backgroundColor: "#00C853" }}
        />
        {step > 0 && (
          <FlatButton
            label="Back"
            disabled={stepIndex === 0}
            disableTouchRipple={true}
            disableFocusRipple={true}
            onClick={this.handlePrev}
          />
        )}
      </div>
    );
  };

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
