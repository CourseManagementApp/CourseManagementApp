import * as React from 'react';
import MaterialTable from 'material-table';
import { ThemeProvider } from '@mui/styles'
import { createTheme } from '@mui/material';

import { forwardRef } from 'react';

import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };


//  export default function BasicTable() {
// const data = [
//         { name: "John", surname: "12345678", birthYear: 1995 },
//         { name: "Bill ", surname: "12345678", birthYear: 1994 },
//       ];
//       const columns = [
//         { title: "Name", field: "name" },
//         { title: "ID", field: "surname" },
//         { title: "Birth Year", field: "birthYear", type: "numeric" },
//       ];
//       const mytheme =  createTheme({
//       });

	  

//     return (
//         <ThemeProvider theme={mytheme}>
//         <MaterialTable title="Basic Table" columns={columns} data={data}/>
//         </ThemeProvider>
//       );


// 	}


const theme = createTheme({
    palette: {
      primary: {
        main: '#4caf50',
      },
      secondary: {
        main: '#ff9100',
      },
    },})

export function BasicTable() {
	const { useState } = React;
  
	const [columns, setColumns] = useState([
	  { title: 'Name', field: 'name' },
	  { title: 'Role', field: 'rolename', initialEditValue: 'initial edit value' },
	  { title: 'ID', field: 'id', type: 'numeric' },
	  {
		title: 'Department',
		field: 'dept',
	  },
	]);
  
	const [data, setData] = useState([
	  { name: 'Bob', rolename: 'TA', id: 12345678, dept: 'ECE' },
	  { name: 'Will', rolename: 'RA', id: 87654321, dept: 'CISE' },
	  { name: 'TEST', rolename: 'RA', id: 32432432, dept: 'CISE' },

	]);
  
	return (
		<ThemeProvider theme={theme}>
	  <MaterialTable
	    icons={tableIcons}

		title="ECE Dept"
		columns={columns}
		data={data}
		editable={{
		  onBulkUpdate: changes =>
			new Promise((resolve, reject) => {
			  setTimeout(() => {
				resolve();
			  }, 1000);
			}),     
		  onRowDelete: oldData =>
			new Promise((resolve, reject) => {
			  setTimeout(() => {
				resolve();
			  }, 1000);
			}),     
		}}
	  />
	  </ThemeProvider>
	)
  }
  