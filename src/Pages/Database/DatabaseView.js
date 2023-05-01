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

function removeSpacesInJsonKeys(json) {
  const newJson = {};

  Object.keys(json).forEach((key) => {
    const newKey = key.replace(/\s/g, ""); // remove spaces from key
    newJson[newKey] = json[key]; // add modified key-value pair to new object
  });

  return newJson;
}

let db = firebase;



const DatabaseTable = () => {

  
  useEffect(() => {
    getDatabase();

  }, []);


  const empCollectionRef = collection(db, "Courses");
  const [courses, setCourses] = useState([]);
  const [instructorUID, setInstructurUID] = useState(false); // to manage the dialog state
  const [courseID, setCourseID] = useState(false); // to manage the dialog state

  const getDatabase = async (instructorUid = "1234") => {
    const InstructorCollection = collection(db, "Instructor");
    const q = query(InstructorCollection, where("uid", "==", instructorUid));
  
    const querySnapshot = await getDocs(q);
    
    console.log(querySnapshot.docs.at(0).id)
    setInstructurUID(querySnapshot.docs.at(0).id)
    const ecedatabase = collection(db, `fall_2022_ECE`)
    const data = await getDocs(ecedatabase);
    
    data.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const newKey = doc.id.replace(/\s/g, ""); // remove spaces from key
      console.log(doc.id, " => ", doc.data());
    });    

    
    setCourses(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

 
    
  }


  const cleanKeysInFirestoreDocData = async (docRef) => {
    const docSnapshot = await getDoc(docRef);
    const data = docSnapshot.data();
  
    const cleanedData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => [
        key.replace(/\s+/g, ""), // remove all whitespace characters from key
        value
      ])
    );
  
    await updateDoc(docRef, cleanedData);
  }
  
  const cleanKeysInFirestoreCollection = async (collectionRef) => {
    const data = await getDocs(collectionRef);
    data.forEach((doc) => {
      cleanKeysInFirestoreDocData(doc.ref);
    });
  };
  

  
  


 
  
  
  


  



  const columns = useMemo(
    () => [
      {
        accessorKey: 'Course Title',
        header: 'Course Title',
      },
      {
        accessorKey: 'Instructor',
        header: 'Instructor',
      },
      {
        accessorKey: 'Course',
        header: 'Course Code',
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
            ECE Table
          </h4>
       
        
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

export default DatabaseTable;
