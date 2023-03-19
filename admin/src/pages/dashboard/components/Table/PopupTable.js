
import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@material-ui/core";




 function  PopupTable() {
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
            <TableCell>Course Name</TableCell>
            <TableCell align="right">Course Code</TableCell>
            <TableCell align="right">Credits</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {courses.map((course) => ( */}
            <TableRow key={"course.id"}>
              <TableCell component="th" scope="row">
                {"course.name"}
              </TableCell>
              <TableCell align="right">{"course.code"}</TableCell>
              <TableCell align="right">{"course.credits"}</TableCell>
            </TableRow>
         {/* ))} */}
        </TableBody>
      </Table>
    </TableContainer>
  ) };

export default PopupTable;