import { useEffect, useState, useContext } from "react";
import {
  Grid,
  LinearProgress,
  Select,
  OutlinedInput,
  MenuItem,
  Button,  
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@material-ui/core";
import { useTheme } from "@material-ui/styles";
import {
  ResponsiveContainer,
  ComposedChart,
  AreaChart,
  LineChart,
  Line,
  Area,
  PieChart,
  Pie,
  Cell,
  YAxis,
  XAxis,
} from "recharts";



import { IconButton, Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { Add, ExpandLess, ExpandMore } from "@material-ui/icons";


// styles
import useStyles from "./styles";

// components
import mock from "./mock";
import Widget from "../../components/Widget";
import PageTitle from "../../components/PageTitle";
import { Typography } from "../../components/Wrappers";
import Dot from "../../components/Sidebar/components/Dot";
import Table from "./components/Table/CourseTable";
import BigStat from "./components/BigStat/BigStat";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
  doc,
  query, collectionGroup, where
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import CourseListTable from "./components/Table/CourseTable";


const mainChartData = getMainChartData();
const PieChartData = [
  { name: "Group A", value: 400, color: "primary" },
  { name: "Group B", value: 300, color: "secondary" },
  { name: "Group C", value: 300, color: "warning" },
  { name: "Group D", value: 200, color: "success" },
];


const currentUserToken = "1234";




export default function Dashboard(props) {
  var classes = useStyles();
  var theme = useTheme();

  useEffect(() => {
    getInstructorCourseList(currentUserToken);

  }, []);


  const empCollectionRef = collection(db, "Courses");
  const [courses, setCourses] = useState([]);
  const [instructorUID, setInstructurUID] = useState(false); // to manage the dialog state


  const getInstructorCourseList = async (instructorUid) => {
    const InstructorCollection = collection(db, "Instructor");
    const q = query(InstructorCollection, where("uid", "==", instructorUid));
  
    const querySnapshot = await getDocs(q);
    
    console.log(querySnapshot.docs.at(0).id)
    setInstructurUID(querySnapshot.docs.at(0).id)
    const InstructorCourseCollection = collection(db, `Instructor/${querySnapshot.docs.at(0).id}/Courses`)
    const data = await getDocs(InstructorCourseCollection);
    data.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });    
    setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

 
    
  }




  const [open, setOpen] = useState(false); // to manage the dialog state

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleAddCourse = async (course) => {

    const InstructorCollection = collection(db, "Instructor");
    const q = query(InstructorCollection, where("uid", "==", currentUserToken));
  
    const querySnapshot = await getDocs(q);
    
    console.log(querySnapshot.docs.at(0).id)
    const InstructorCourseCollection = collection(db, `Instructor/${querySnapshot.docs.at(0).id}/Courses`)
    const newCourseAddRef = await addDoc(InstructorCourseCollection, course);

    getInstructorCourseList();
    handleClose();
    Swal.fire("Success", "Course added successfully.", "success");
  };


  

function AddCourseDialog({ open, handleClose, handleSubmit }) {
  const [courseTitle, setCourseTitle] = useState("");
  const [courseNumber, setCourseNumber] = useState("");
  const [Credits, setCredits] = useState("");

  const handleCourseNameChange = (event) => {
    setCourseTitle(event.target.value);
  };

  const handleCourseNumberChange = (event) => {
    setCourseNumber(event.target.value);
  };

  const handleCreditsChange = (event) => {
    setCredits(event.target.value);
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    handleSubmit({
      CourseName: courseTitle,
      CourseNumber: courseNumber,
      Credits: Credits,
    });

    handleClose();

  };

  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Create Course</DialogTitle>
      <DialogContent>
        <form onSubmit={handleSubmitClick}>
          <TextField
            autoFocus
            margin="dense"
            label="Course Name"
            type="text"
            fullWidth
            required
            value={courseTitle}
            onChange={handleCourseNameChange}
          />
          <TextField
            margin="dense"
            label="Course Number"
            type="text"
            fullWidth
            required
            value={courseNumber}
            onChange={handleCourseNumberChange}
          />

          <TextField
            margin="dense"
            label="Credits"
            type="text"
            fullWidth
            required
            value={Credits}
            onChange={handleCreditsChange}
          />
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={handleSubmitClick}>Add</Button>
          </DialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
}



  // local
  var [mainChartState, setMainChartState] = useState("monthly");
  return (
    <>
      <PageTitle
        title="Your Courses"
        button={
          <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleClickOpen}
        >
          Create Course
        </Button>
 
        }
      />

      

     
      <AddCourseDialog
          open={open}
          handleClose={handleClose}
          handleSubmit={handleAddCourse}
        />
      <Grid container spacing={4}>
        <Grid item xs={12}>

          <CourseListTable courseList={courses} instructorUID={instructorUID}  />
        </Grid>
      </Grid>

   
    </>
  );
      }

// #######################################################################
function getRandomData(length, min, max, multiplier = 10, maxDiff = 10) {
  var array = new Array(length).fill();
  let lastValue;

  return array.map((item, index) => {
    let randomValue = Math.floor(Math.random() * multiplier + 1);

    while (
      randomValue <= min ||
      randomValue >= max ||
      (lastValue && randomValue - lastValue > maxDiff)
    ) {
      randomValue = Math.floor(Math.random() * multiplier + 1);
    }

    lastValue = randomValue;

    return { value: randomValue };
  });
}

function getMainChartData() {
  var resultArray = [];
  var tablet = getRandomData(31, 3500, 6500, 7500, 1000);
  var desktop = getRandomData(31, 1500, 7500, 7500, 1500);
  var mobile = getRandomData(31, 1500, 7500, 7500, 1500);

  for (let i = 0; i < tablet.length; i++) {
    resultArray.push({
      tablet: tablet[i].value,
      desktop: desktop[i].value,
      mobile: mobile[i].value,
    });
  }

  return resultArray;
}
