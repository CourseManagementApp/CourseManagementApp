import { useState } from "react";
import {
  Button,
  MenuItem,
  TextField,
  Typography,
  Container,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { collection, addDoc } from "firebase/firestore";
import { firebase } from "../../Firebase/firebase";

let db = firebase
const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    backgroundColor: "#F1F1F1", // Add this line to set background color
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

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [year, setYear] = useState("");
  const [dept, setDept] = useState("");
  const [degreeType, setDegreeType] = useState("");
  const [succeedingSemester, setSucceedingSemester] = useState("");
  const [courseGrades, setCourseGrades] = useState("");
  const [resume, setResume] = useState("");
  const [workExperience, setWorkExperience] = useState("");
  const [ufid, setUfid] = useState("");
  const [email, setEmail] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");
  const [telephone, setTelephone] = useState("");


  const courses = ["Course1", "Course2", "Course3"];

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const applicationData = {
        firstName: firstName,
        lastName: lastName,
        year: year,
        resume: resume,
        workExperience: workExperience,
        ufid: ufid,
        email: email,
        selectedCourse: selectedCourse,
        telephone: telephone,
      };
      const docRef = await addDoc(collection(db, "applications"), applicationData);

      console.log("Application submitted with ID: ", docRef.id);

      setFirstName("");
      setLastName("");
      setYear("");
      setResume("");
      setDept("");
      setDegreeType("");
      setWorkExperience("");
      setUfid("");
      setEmail("");
      setSelectedCourse("");
      setTelephone("");
      ;

    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <div className="center">
    <Container component="main" maxWidth="xs" className={classes.container}>
      <Typography component="h1" variant="h5">
      APPLICATION TO BE A TA, UPI OR GRADER
      </Typography>


      <form className={classes.form} onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              value={firstName}
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={(event) => {
                setLastName(event.target.value);
              }}
            />
          </Grid>
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
              id="Dept"
              label="Department Affiliation"
              name="Department"
              value={dept}
              onChange={(event) => {
                setDept(event.target.value);
              }}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="succeeedingSemestser"
              label="Next Semester, I will be"
              name="Succeeding Semeter"
              value={succeedingSemester}
              onChange={(event) => {
                setSucceedingSemester(event.target.value);
              }}
            />
            
          </Grid>

          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="DegreeType"
              label="Degree Type"
              name="Degree Type"
              value={degreeType}
              onChange={(event) => {
                setDegreeType(event.target.value);
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
          select
          id="selectedCourse"
          label="Selected Course"
          name="selectedCourse"
          value={selectedCourse}
          onChange={(event) => {
            setSelectedCourse(event.target.value);
          }}
        >
          {courses.map((course) => (
            <MenuItem key={course} value={course}>
              {course}
            </MenuItem>
          ))}
        </TextField>
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
</div>
);
}

export default TaRegistrationForm;