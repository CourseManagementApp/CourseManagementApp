import React, { useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  makeStyles,
} from '@material-ui/core';
import { db } from '../../firebase/firebase';
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TaRequestTable() {
  const classes = useStyles();

  const [requests, setRequests] = useState([
    { id: 1, name: 'John Doe', email: 'john.doe@example.com', course: 'Introduction to React' },
    { id: 2, name: 'Jane Doe', email: 'jane.doe@example.com', course: 'Intermediate React' },
    { id: 3, name: 'Bob Smith', email: 'bob.smith@example.com', course: 'Advanced React' },
  ]);

  const handleAction = (id, action) => {
    setRequests(requests.map((request) => {
      if (request.id === id) {
        return { ...request, status: action };
      }
      return request;
    }));
  };

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="ta request table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Course</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {requests.map((request) => (
            <TableRow key={request.id}>
              <TableCell>{request.name}</TableCell>
              <TableCell>{request.email}</TableCell>
              <TableCell>{request.course}</TableCell>
              <TableCell>{request.status || 'Pending'}</TableCell>
              <TableCell>
                {request.status === 'Accepted' || request.status === 'Rejected' ? (
                  <Button disabled>Already {request.status}</Button>
                ) : (
                  <>
                    <Button onClick={() => handleAction(request.id, 'Accepted')}>Accept</Button>
                    <Button onClick={() => handleAction(request.id, 'Rejected')}>Reject</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TaRequestTable;
