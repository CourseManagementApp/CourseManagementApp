import React from 'react';
import { useFormik } from 'formik';
import { TextField, Button } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';

const AddUserForm = ({ addUserToDatabase }) => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      role: '',
    },
    onSubmit: (values, { resetForm }) => {
      addUserToDatabase(values);
      resetForm();
    },
  });

  const roles = ['Admin', 'Editor', 'Viewer'];

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        margin="normal"
        fullWidth
      />
      <TextField
        id="email"
        name="email"
        label="Email"
        type="email"
        value={formik.values.email}
        onChange={formik.handleChange}
        margin="normal"
        fullWidth
      />
      <Autocomplete
        id="role"
        name="role"
        options={roles}
        value={formik.values.role}
        onChange={(e, value) => formik.setFieldValue('role', value)}
        renderInput={(params) => (
          <TextField {...params} label="Role" margin="normal" fullWidth />
        )}
      />
      <Button type="submit" variant="contained" color="primary">
        Add User
      </Button>
    </form>
  );
};

export default AddUserForm;
