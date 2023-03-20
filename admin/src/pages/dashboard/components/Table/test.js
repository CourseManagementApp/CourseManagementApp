import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const studentEmployees = [
  { id: 1, name: "John Doe", position: "Teaching Assistant" },
  { id: 2, name: "Jane Doe", position: "Grader" },
  { id: 3, name: "Bob Smith", position: "Teaching Assistant" },
];

const TestCourseTable = () => {
  const classes = useStyles();
  const [selectedRows, setSelectedRows] = useState([]);

  const handleSelectRow = (row) => {
    if (selectedRows.includes(row)) {
      setSelectedRows(selectedRows.filter((r) => r !== row));
    } else {
      setSelectedRows([...selectedRows, row]);
    }
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="Course Table">
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Position</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentEmployees.map((row) => (
              <TableRow key={row.id}>
                <TableCell padding="checkbox">
                  <Button
                    variant="contained"
                    color={selectedRows.includes(row) ? "secondary" : "primary"}
                    onClick={() => handleSelectRow(row)}
                  >
                    {selectedRows.includes(row) ? "Remove" : "Add"}
                  </Button>
                </TableCell>
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.position}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TestCourseTable;
