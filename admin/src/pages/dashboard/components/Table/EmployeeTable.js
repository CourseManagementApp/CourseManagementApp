import { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
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
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material'
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete"
import Swal from "sweetalert2";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { createTheme } from '@material-ui/core/styles';

export default function EmployeeTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [rows, setRows] = useState([]);
  const empCollectionRef = collection(db, "Employees");

  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id})));
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const deleteUser = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        deleteApi(id);
      }
    });
  };

  const deleteApi = async (id) => {
    const userDoc = doc(db, "Employees", id);
    await deleteDoc(userDoc);
    Swal.fire("Deleted!", "Your file has been deleted.", "success");
    getUsers();
  };

  const filterData = (v) => {
    if (v) {
      setRows([v]);
    } else {
      getUsers();
    }
  };
  
  

  const handleAddEmployee = async (employee) => {
    const newEmployeeRef = await addDoc(empCollectionRef, employee);
    
    handleClose();
    Swal.fire("Success", "Employee added successfully.", "success");
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function AddEmployeeDialog({ open, handleClose, handleSubmit }) {
    const [name, setName] = useState("");
    const [role, setRole] = useState("");
    const [course, setCourse] = useState("");
    const [instructor, setInstructor] = useState("");
  
    const handleNameChange = (event) => {
      setName(event.target.value);
    };
  
    const handleRoleChange = (event) => {
      setRole(event.target.value);
    };
  
    const handleCourseChange = (event) => {
      setCourse(event.target.value);
    };
  
    const handleInstructorChange = (event) => {
      setInstructor(event.target.value);
    };
  
    const handleSubmitClick = (event) => {
      event.preventDefault();
      handleSubmit({
        Name: name,
        Role: role,
        Course: course,
        Instructor: instructor,
      });
      handleClose();
      getUsers();

    };
  
    return (
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>
          <form onSubmit={handleSubmitClick}>
            <TextField
              autoFocus
              margin="dense"
              label="Name"
              type="text"
              fullWidth
              required
              value={name}
              onChange={handleNameChange}
            />
            <TextField
              margin="dense"
              label="Role"
              type="text"
              fullWidth
              required
              value={role}
              onChange={handleRoleChange}
            />
            <TextField
              margin="dense"
              label="Course"
              type="text"
              fullWidth
              required
              value={course}
              onChange={handleCourseChange}
            />
            <TextField
              margin="dense"
              label="Instructor"
              type="text"
              fullWidth
              required
              value={instructor}
              onChange={handleInstructorChange}
            />
            <DialogActions>
              <Button onClick={handleClose}>Cancel</Button>
              <Button onClick={handleSubmitClick}>Add</Button>
            </DialogActions>
          </form>
        </DialogContent>
      </Dialog>
    );
  }
  
return (
    <Box>
      <Stack direction="row" spacing={2} alignItems="center">
        <Typography variant="h6">Employee Table</Typography>
        <Divider orientation="vertical" flexItem />
        <Autocomplete
          freeSolo
          options={rows.map((row) => row.Name)}
          onChange={(event, value) => filterData(value)}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search Name"
              margin="normal"
              variant="outlined"
            />
          )}
        />
        <Divider orientation="vertical" flexItem />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddCircleIcon />}
          onClick={handleClickOpen}
        >
          Add Employee
        </Button>
        <AddEmployeeDialog
          open={open}
          handleClose={handleClose}
          handleSubmit={handleAddEmployee}
        />
      </Stack>
      <TableContainer component={Paper} sx={{ mt: 2 }}>
        <Table aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell>Course</TableCell>
              <TableCell>Instructor</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Role</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.Course}
                  </TableCell>
                  <TableCell>{row.Instructor}</TableCell>
                  <TableCell>{row.Name}</TableCell>
                  <TableCell>{row.Role}</TableCell>
                  <TableCell>
                    <Button
                      variant="contained"
                      color="primary"
                      startIcon={<EditIcon />}
                      onClick={() => console.log(`Edit ${row.Name} clicked`)}
                    >
                      Edit
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button
                      variant="contained"
                      color="secondary"
                      startIcon={<DeleteIcon />}
                      onClick={() => deleteUser(row.id)}
                    >
                      Delete
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </TableContainer>
    </Box>
  );

}

 
