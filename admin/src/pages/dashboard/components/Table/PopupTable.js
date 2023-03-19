
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@material-ui/core";
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
  query,
  where
} from "firebase/firestore";



 function  PopupTable(props) {
  useEffect(() => {
    getInstructorCourseEmployeeList()},
     []);



    let useStyles = makeStyles({
        table: {
          minWidth: 650,
        },
        modal: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        },
        paper: {
          backgroundColor: '#fff',
          border: '2px solid #000',
          padding: '16px',
        },
      });


      const [employees, setEmployees] = useState([]);
  

      const getInstructorCourseEmployeeList = async () => {

        console.log(props.instructorUID, "popup");
     
        const InstructorCourseEmployeeCollection = collection(db, `Instructor/${props.instructorUID}/Courses/${props.courseUID}/Employees`)
        const data = await getDocs(InstructorCourseEmployeeCollection);
        data.forEach((doc) => {
          // doc.data() is never undefined for query doc snapshots
          console.log(doc.id, " => ", doc.data());
        });    
        setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    
     
        
      }
    
    
      
      const classes = useStyles();
return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="popup courses table">
        <TableHead>
          <TableRow>
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Course Code</TableCell>
            <TableCell align="right">Credits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => ( 
            <TableRow key={props.courseUID}>
              <TableCell component="th" scope="row">
                {employee.Name}
              </TableCell>
              <TableCell align="right">{employee.Name}</TableCell>
            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  ) };

export default PopupTable;