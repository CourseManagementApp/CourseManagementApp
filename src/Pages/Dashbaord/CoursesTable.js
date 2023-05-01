import React, { useMemo, useState, useEffect } from 'react';
import MaterialReactTable from 'material-react-table';
import { Box, Button, IconButton } from '@mui/material';
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDoc,
  doc,
  query, collectionGroup, where
} from "firebase/firestore";
import { firebase } from '../../Components/Firebase/firebase'
const data = [
  {
    Title: 'course',
    Professor: '',
    CourseNumber: ''
  },
];


let db = firebase;

const CourseTable = () => {


  useEffect(() => {
    getInstructorCourseList("1234");

  }, []);


  const empCollectionRef = collection(db, "Courses");
  const [courses, setCourses] = useState([]);
  const [instructorUID, setInstructurUID] = useState(false); // to manage the dialog state
  const [courseID, setCourseID] = useState(false); // to manage the dialog state

  const getInstructorCourseList = async (instructorUid = "1234") => {
    const InstructorCollection = collection(db, "Instructor");
    const q = query(InstructorCollection, where("uid", "==", instructorUid));
  
    const querySnapshot = await getDocs(q);
    
    console.log(querySnapshot.docs.at(0).id)
    setInstructurUID(querySnapshot.docs.at(0).id)
    const InstructorCourseCollection = collection(db, `Instructor/${querySnapshot.docs.at(0).id}/Courses`)
    const data = await getDocs(InstructorCourseCollection);
    data.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });    

    
    setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

 
    
  }





 
  
  
  


  



  const columns = useMemo(
    () => [
      {
        accessorKey: 'CourseName',
        header: 'Course Title',
      },
      {
        accessorKey: 'CourseNumber',
        header: 'Professor Name',
      },
      {
        accessorKey: 'Credits',
        header: 'Course Number',
      },
    ],
    [],
  );

  const handleRowClick = () => {
    console.log("Print Courses", courses);
  };

  const rowRenderer = (props) => {
    const { rowData } = props;

    return (
      <div onClick={() => handleRowClick(rowData)}>
        {props.columns.map((column) => (
          <div key={column.accessorKey}>{props.cellData[column.accessorKey]}</div>
        ))}
      </div>
    );
  };

  return (
    <MaterialReactTable
      columns={columns}
      data={courses}
      

      renderTopToolbarCustomActions={({ table }) => (
        <Box sx={{ display: 'flex', gap: '1rem', p: '4px' }}>
            <h4>
            Courses Table
          </h4>
        
          <Button
            color="secondary"
            onClick={() => {
              alert('Add Course');
            }}
            variant="contained"
          >
            Add Course
          </Button>
        
        </Box>
      )}
      //clicking anywhere on the row will select it
      muiTableBodyRowProps={({ row }) => ({
        onClick: () => {
          handleRowClick();
        },
        sx: { cursor: 'pointer' },
      })}  
    />
  );
};

export default CourseTable;
