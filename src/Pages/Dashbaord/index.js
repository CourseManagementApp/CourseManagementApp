import React, { useState } from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider, createTheme } from '@mui/material';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  makeStyles,
} from '@material-ui/core';
import TaRequestTable from './TaRequestTable';
import CourseTable from './CoursesTable';
const useStyles = makeStyles((theme) => ({
  dialog: {
    '& .MuiDialog-paper': {
      minWidth: '500px',
      maxWidth: '80%',
      margin: theme.spacing(2),
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '1rem',
  },
}));

function Dashboard() {
  const classes = useStyles();
  const defaultMaterialTheme = createTheme();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <Box>
      <Box className={classes.buttonContainer}>
        <Button variant="contained" onClick={handleOpen}>View TA Requests</Button>
      </Box>
      <Dialog open={open} onClose={handleClose} className={classes.dialog}>
        <DialogTitle>TA Requests</DialogTitle>
        <DialogContent>
          <TaRequestTable />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </Box>
    <CourseTable/>
    </div>
  );
}

export default Dashboard;
