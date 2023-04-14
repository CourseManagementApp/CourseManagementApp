import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function TaRegistrationForm() {
  const classes = useStyles();

  const [year, setYear] = useState("");
  const [resume, setResume] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [ufid, setUfid] = useState("");
  const [email, setEmail] = useState("");
  const [telephone, setTelephone] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h5">
        TA Course Application
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="year"
              label="Year of Study"
              name="year"
              value={year}
              onChange={(event) => {
                setYear(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="resume"
              label="Resume (PDF)"
              name="resume"
              type="file"
              value={resume}
              onChange={(event) => {
                setResume(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="workExperience"
              label="Work Experience"
              name="workExperience"
              multiline
              rows={4}
              value={workExperience}
              onChange={(event) => {
                setWorkExperience(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="ufid"
              label="UFID"
              name="ufid"
              value={ufid}
              onChange={(event) => {
                setUfid(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Selected Course"
              name="Selected Course"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="telephone"
              label="Telephone Number"
              name="telephone"
              value={telephone}
              onChange={(event) => {
                setTelephone(event.target.value);
              }}
            />
         
         </Grid>
    </Grid>
    <Button
      type="submit"
      fullWidth
      variant="contained"
      color="primary"
      className={classes.submit}
    >
      Submit Application
    </Button>
  </form>
</Container>
);
}

export default TaRegistrationForm;