import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
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
  where,
} from "firebase/firestore";
import Swal from "sweetalert2";

export default function HireEmployeeDialog(props) {
  const { open,courseUID,instructorUID, handleClose, courses, row} = props;


  const handleSubmit = async (employee) => {
    console.log("employee",employee);
    console.log(selectedCourse)


    
    const InstructorCourseCollection = collection(db, `Instructor/${instructorUID}/Courses`);
    const q = query(InstructorCourseCollection, where("CourseName", "==", selectedCourse));
    const querySnapshot = await getDocs(q);
    const InstructorCourseEmployeeCollection = collection(db, `Instructor/${instructorUID}/Courses/${querySnapshot.docs.at(0).id}/Employees`);

    const newCourseAddRef = await addDoc(InstructorCourseEmployeeCollection, employee);

    handleClose();
    Swal.fire("Success", "Employee added successfully.", "success");

    
  }


  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [UFID, setUFID] = useState("");
  const [selectedCourse, setSelectedCourse] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleUFIDChange = (event) => {
    setUFID(event.target.value);
  };

  
  const handleRoleChange = (event) => {
    setRole(event.target.value);
  };

  const handleCourseChange = (event) => {
    setSelectedCourse(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const employee = {
      Name: row.Name,
      UFID: row.Role,
      Role: row.UFID,
      Course: "selectedCourse",
    };
    console.log(row);
    handleSubmit(employee);
    setName("");
    setRole("");
    setUFID("")
    setSelectedCourse("");
  };



  // const getInstructorCourseList = async (instructorUid = currentUserToken) => {
  //   const InstructorCollection = collection(db, "Instructor");
  //   const q = query(InstructorCollection, where("uid", "==", instructorUid));
  
  //   const querySnapshot = await getDocs(q);
    
  //   console.log(querySnapshot.docs.at(0).id)
  //   setInstructurUID(querySnapshot.docs.at(0).id)
  //   const InstructorCourseCollection = collection(db, `Instructor/${querySnapshot.docs.at(0).id}/Courses`)
  //   const data = await getDocs(InstructorCourseCollection);
  //   data.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   });    
  //   setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

 
    
  // }


  return (
    <Dialog open={open} onClose={handleClose}>
      <form onSubmit={handleFormSubmit}>
        <DialogTitle>Add Employee</DialogTitle>
        <DialogContent>

          <TextField
            margin="dense"
            id="role"
            label="Role"
            type="text"
            value={"TA"}
            onChange={handleRoleChange}
            fullWidth
          />
          <FormControl fullWidth>
            <InputLabel id="course-select-label">Course</InputLabel>
            <Select
              labelId="course-select-label"
              id="course-select"
              value={selectedCourse}
              onChange={handleCourseChange}
            >
              {courses.map((course) => ( 
                <MenuItem key={course.id} value={course.CourseName}>
                  {course.CourseName}
                 </MenuItem> 
               ))}
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button          
          handleSubmit={handleFormSubmit} 
          type="submit" color="primary">
            Add
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
