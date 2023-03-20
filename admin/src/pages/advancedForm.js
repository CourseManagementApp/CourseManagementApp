import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Collapse,
  IconButton,
  Box,
} from "@mui/material";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

const courses = [
  {
    id: 1,
    name: "Course A",
    users: [
      { id: 1, name: "User A" },
      { id: 2, name: "User B" },
    ],
  },
  {
    id: 2,
    name: "Course B",
    users: [
      { id: 3, name: "User C" },
      { id: 4, name: "User D" },
    ],
  },
];

const CourseTable = () => {
  const [openRows, setOpenRows] = useState([]);

  const handleRowClick = (id) => {
    if (openRows.includes(id)) {
      setOpenRows(openRows.filter((rowId) => rowId !== id));
    } else {
      setOpenRows([...openRows, id]);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Course Name</TableCell>
            <TableCell>Users</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {courses.map((course) => (
            <React.Fragment key={course.id}>
              <TableRow onClick={() => handleRowClick(course.id)}>
                <TableCell>
                  <IconButton>
                    {openRows.includes(course.id) ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>{course.users.length}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                  <Collapse in={openRows.includes(course.id)} timeout="auto" unmountOnExit>
                    <Box margin={1}>
                      <Table size="small" aria-label="users">
                        <TableBody>
                          {course.users.map((user) => (
                            <TableRow key={user.id}>
                              <TableCell><button>{user.name}</button></TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CourseTable;
 