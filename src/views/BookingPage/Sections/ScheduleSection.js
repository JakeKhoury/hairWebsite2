import React, { Fragment, useState } from "react";
import Datetime from "react-datetime";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

import "./scheduleStyle.css";

const styles = {
  label: {
    cursor: "pointer",
    paddingLeft: "0",
    color: "rgba(0, 0, 0, 0.26)",
    fontSize: "14px",
    lineHeight: "1.428571429",
    fontWeight: "400",
    display: "inline-flex"
  }
};

const useStyles = makeStyles(styles);

export default function ScheduleSection() {
  const classes = useStyles();

  //The first commit of Material-UI
  //const [selectedDate, handleDateChange] = useState(new Date());

  //   const handleDateChange = date => {
  //     setSelectedDate(date);
  //   };

  return (
    <div>
      <InputLabel className={classes.label}>Choose The Date</InputLabel>
      <br />
      <FormControl fullWidth>
        <Datetime inputProps={{ placeholder: "Click Here To Select" }} />
      </FormControl>
    </div>
  );
}
