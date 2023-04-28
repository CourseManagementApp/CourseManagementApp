import React from 'react'
import ReactDOM from 'react-dom'
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


import { IconButton, Collapse, List, ListItem, ListItemText } from "@material-ui/core";
import { Add, ExpandLess, ExpandMore } from "@material-ui/icons";


// styles
// import useStyles from "./styles"

// components

import Widget from "../../Components/Widgets/Widget";
import PageTitle from "../../Components/PageTitle/PageTitle";
import { makeStyles } from "@material-ui/styles"; // add this line

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
import { db } from '../../Components/Firebase/firebaseConfig';
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import AddCircleIcon from "@mui/icons-material/AddCircle";

import CourseListTable from './CourseListTable'


const currentUserToken = "1234";

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });
  

export default function CourseTable(props) {


  useEffect(() => {
    getInstructorCourseList(currentUserToken);

  }, []);


  const empCollectionRef = collection(db, "Courses");
  const [courses, setCourses] = useState([]);
  const [instructorUID, setInstructurUID] = useState(false); // to manage the dialog state
  const [courseID, setCourseID] = useState(false); // to manage the dialog state

  const getInstructorCourseList = async (instructorUid = currentUserToken) => {
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
    const addEmployeeCollection = collection(db, `${newCourseAddRef.path}/Employees`)
    const initEmpCollection = await addDoc(addEmployeeCollection, {
      EmployeeName: '',
      CourseNumber: '',
      Role: '',
    });

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

          <CourseListTable courseList={courses} instructorUID={instructorUID}  getInstructorCourseList={getInstructorCourseList} />
        </Grid>
      </Grid>

   
    </>
  );
      }


