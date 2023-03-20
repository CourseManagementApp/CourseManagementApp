
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
    getInstructorCourseEmployeeList();
},
     []);

     const {courseUID,instructorUID } = props;
     const [employees, setEmployees] = useState([]);



     const getInstructorCourseEmployeeList = async () => {

      const InstructorCourseCollection = collection(db, `Instructor/${instructorUID}/Courses/${courseUID}/Employees`)
      const data = await getDocs(InstructorCourseCollection);
      data.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
      });    
      setEmployees(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      
      console.log("EMPLOYEEE LIST", employees)
   
      
    }
  


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


  


    

      const classes = useStyles();
return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="popup courses table">
        <TableHead>
          <TableRow>
            <TableCell>UF ID</TableCell>
            <TableCell align="right">Employee Name</TableCell>
            <TableCell align="right">Employee Role</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {employees.map((employee) => ( 
            <TableRow key={props.courseUID}>
              <TableCell component="th" scope="row">
                {employee.UFID}
              </TableCell>
              <TableCell align="right">{employee.Name}</TableCell>
              <TableCell align="right">{employee.Role}</TableCell>

            </TableRow>
          ))} 
        </TableBody>
      </Table>
    </TableContainer>
  ) };

export default PopupTable;