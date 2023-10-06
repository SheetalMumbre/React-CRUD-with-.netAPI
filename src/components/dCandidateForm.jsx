import {
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  withStyles,
  Button,
} from "@material-ui/core";
import React, { useState } from "react";
import useForm from "./useForm";
import Box from "@mui/material/Box";

const styles = (theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      minWidth: 230,
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 230,
  },
  smMargin: {
    margin: theme.spacing(1),
  },
});

const initialFieldValues = {
  fullName: "",
  mobile: "",
  email: "",
  age: "",
  bloodGroup: "",
  address: "",
};

const DCandidateForm = ({ classes, ...props }) => {
  const validate = () => {
    let temp = {}
    temp.fullName = values.fullName?"" : "This field is required."
    temp.mobile = values.mobile?"" : "This field is required."
    temp.bloodGroup = values.bloodGroup?"" : "This field is required."
    temp.email = (/^$|.+@.+..+/).test(values.email)?"":"Email is not valid"
    setErrors({
      ...temp
    })
  };

  const { values, setValues, handleInputChange, errors, setErrors } = useForm(initialFieldValues);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  return (
    <form
      autoComplete="off"
      noValidate
      className={classes.root}
      onSubmit={handleSubmit}
    >
      <Grid container>
        <Grid item xs={6}>
          <TextField
            name="fullName"
            variant="outlined"
            label="Full Name"
            value={values.fullName}
            onChange={handleInputChange}
          />
          <TextField
            name="email"
            variant="outlined"
            label="Email"
            value={values.email}
            onChange={handleInputChange}
          />
          <FormControl variant="outlined">
            <InputLabel>Blood Group</InputLabel>
            <Select
              name="bloodGroup"
              value={values.bloodGroup}
              onChange={handleInputChange}
            >
              <MenuItem value="">Select Blood Group</MenuItem>
              <MenuItem value="AB+"> AB +ve</MenuItem>
              <MenuItem value="AB-"> AB -ve</MenuItem>
              <MenuItem value="A+"> A +ve</MenuItem>
              <MenuItem value="A-"> A -ve</MenuItem>
              <MenuItem value="B+"> B +ve</MenuItem>
              <MenuItem value="B-"> B -ve</MenuItem>
              <MenuItem value="O+"> O +ve</MenuItem>
              <MenuItem value="O-"> O -ve</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={6}>
          <TextField
            name="mobile"
            variant="outlined"
            label="Mobile"
            value={values.mobile}
            onChange={handleInputChange}
          />
          <TextField
            name="age"
            variant="outlined"
            label="Age"
            value={values.age}
            onChange={handleInputChange}
          />
          <TextField
            name="address"
            variant="outlined"
            label="Address"
            value={values.address}
            onChange={handleInputChange}
          />
          <div>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              className={classes.smMargin}
            >
              Submit
            </Button>
            <Button variant="contained" className={classes.smMargin}>
              Reset
            </Button>
          </div>
        </Grid>
      </Grid>
    </form>
  );
};

export default withStyles(styles)(DCandidateForm);
