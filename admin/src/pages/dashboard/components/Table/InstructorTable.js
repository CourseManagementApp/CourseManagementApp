import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, IconButton, Collapse, Box, Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const instructors = [
  {
    name: 'John Doe',
    courses: [
      'Introduction to Computer Science',
      'Web Development',
      'Database Management',
    ],
    STAFF: [
        
    ]
  },
  {
    name: 'Jane Smith',
    courses: [
      'Data Structures and Algorithms',
      'Object-Oriented Programming',
      'Software Engineering',
    ],
    STAFF: [

    ]
  },
];

function CollapsibleTableRow({ row }) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell>{row.name}</TableCell>
        <TableCell>
          {row.courses.map((course) => (
            <Button key={course}>{course}</Button>
          ))}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Courses Taught
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableBody>
                  {row.courses.map((course) => (
                    <TableRow key={course}>
                      <TableCell component="th" scope="row">
                        {course}
                      </TableCell>
                      <TableCell align="right">
                        <Button variant="contained" color="primary">
                          View Course
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}

function InstructorsTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="instructors table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Name</TableCell>
            <TableCell>Courses</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {instructors.map((instructor) => (
            <CollapsibleTableRow key={instructor.name} row={instructor} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default InstructorsTable;
