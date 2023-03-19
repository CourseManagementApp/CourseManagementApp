import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function TAForm() {
  const classes = useStyles();
  const [fullName, setFullName] = useState('');
  const [workExperience, setWorkExperience] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [education, setEducation] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // do something with the form data
    console.log({
      fullName,
      workExperience,
      age,
      email,
      phoneNumber,
      education,
      additionalInfo,
    });
  };

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            id="fullName"
            label="Full Name"
            variant="outlined"
            fullWidth
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="workExperience"
            label="Work Experience"
            variant="outlined"
            fullWidth
            value={workExperience}
            onChange={(event) => setWorkExperience(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="age"
            label="Age"
            type="number"
            variant="outlined"
            fullWidth
            value={age}
            onChange={(event) => setAge(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="phoneNumber"
            label="Phone Number"
            variant="outlined"
            fullWidth
            value={phoneNumber}
            onChange={(event) => setPhoneNumber(event.target.value)}
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            required
            id="education"
            label="Education"
            variant="outlined"
            fullWidth
            value={education}
            onChange={(event) => setEducation(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="additionalInfo"
            label="Additional Information"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            value={additionalInfo}
            onChange={(event) => setAdditionalInfo(event.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </Grid>
      </Grid>
    </form>
  );
}

export default TAForm;
