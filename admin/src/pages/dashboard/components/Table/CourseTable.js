import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, Modal, Grid } from "@material-ui/core";
import { db } from "../../../../firebase/firebase";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
  doc,
} from "firebase/firestore";
import PopupTable from "./PopupTable";
import Widget from "../../../../components/Widget/Widget";
import DeleteIcon from "@mui/icons-material/Delete"


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

function CourseTable(props) {
  const [open, setOpen] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [courseUID, setCourseUID] = useState(null);

  const empCollectionRef = collection(db, "Courses");


  useEffect(() => {
    console.log(props.courseList);
}, []);



  const classes = useStyles();


  const handleButtonClick =  (course) => {

    setCourseUID(course.id)
    setSelectedCourse(course);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="props table">
          <TableHead>
            <TableRow>
              <TableCell>Course Name</TableCell>
              <TableCell align="right">Course Code</TableCell>
              <TableCell align="right">Credits</TableCell>
              <TableCell align="right">Button</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>

          {props.courseList.map((course) => (
              <TableRow key={course.id}>
                <TableCell component="th" scope="row">
                  {course.CourseName}
                  {console.log(course)}
                </TableCell>
                <TableCell align="right">{course.CourseNumber}</TableCell>
                <TableCell align="right">{course.Credits}</TableCell>
                <TableCell align="right">
                  <Button variant="contained" color="primary" onClick={() => handleButtonClick(course)}>
                    Employee List
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Modal
        open={open}
        onClose={handleClose}
        className={classes.modal}
      >
        <div className={classes.paper}>

          <Widget title="Employee List" upperTitle >

            {console.log("test", props.instructorUID)}
            <PopupTable courseUID={courseUID} instructorUID={props.instructorUID} />
          </Widget>
        </div>

      </Modal>
    </>
  );
}

export default CourseTable;
