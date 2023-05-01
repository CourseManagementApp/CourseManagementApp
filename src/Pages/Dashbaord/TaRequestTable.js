import React, { useState, useEffect } from 'react';
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
import { firebase } from "../../Components/Firebase/firebase"
import { collection, getDocs } from 'firebase/firestore';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function TaRequestTable() {
  const classes = useStyles();

  const [requests, setRequests] = useState([]);

  useEffect(() => {
    const fetchRequests = async () => {
      const querySnapshot = await getDocs(collection(firebase, 'applications'));
      const requestsData = [];
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const request = {
          id: doc.id,
          name: data.firstName + ' ' + data.lastName,
          email: data.email,
          course: data.selectedCourse,
          status: data.status,
        };
        requestsData.push(request);
      });
      setRequests(requestsData);
    };

    fetchRequests();
  }, []);

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