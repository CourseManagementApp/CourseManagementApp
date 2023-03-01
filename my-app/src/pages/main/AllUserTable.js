import React, { useState, useEffect } from 'react';
import { database } from '../../firebase/firebase';
import MaterialTable from 'material-table';

const AllUserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const usersRef = database.ref('users');
    usersRef.on('value', (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const usersArray = Object.entries(data).map(([key, value]) => ({ id: key, ...value }));
        setUsers(usersArray);
      } else {
        setUsers([]);
      }
    });
  }, []);

  const handleRowAdd = (newData, resolve) => {
    const usersRef = database.ref('users');
    usersRef.push(newData, (error) => {
      if (error) {
        console.error(error);
        resolve();
      } else {
        resolve();
      }
    });
  };

  const handleRowUpdate = (newData, oldData, resolve) => {
    const usersRef = database.ref(`users/${oldData.id}`);
    usersRef.update(newData, (error) => {
      if (error) {
        console.error(error);
        resolve();
      } else {
        resolve();
      }
    });
  };

  const handleRowDelete = (oldData, resolve) => {
    const usersRef = database.ref(`users/${oldData.id}`);
    usersRef.remove((error) => {
      if (error) {
        console.error(error);
        resolve();
      } else {
        resolve();
      }
    });
  };

  const columns = [    { title: 'Name', field: 'name' },    { title: 'Email', field: 'email' },    {      title: 'Role',      field: 'role',      lookup: { Admin: 'Admin', Editor: 'Editor', Viewer: 'Viewer' },    },  ];

  return (
    <MaterialTable
      title="User Table"
      columns={columns}
      data={users}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            handleRowAdd(newData, resolve);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            handleRowUpdate(newData, oldData, resolve);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            handleRowDelete(oldData, resolve);
          }),
      }}
    />
  );
};

export default AllUserTable;
