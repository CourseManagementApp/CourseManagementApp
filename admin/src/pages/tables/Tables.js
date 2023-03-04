import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/CourseTable";
import CreateTable from "../dashboard/CreateTable";

// data
import mock from "../dashboard/mock";

const datatableData = [
  ["John", "CEN3031", "Junior", "Computer Science", "1234567"],
  ["Sarah", "EGN3211", "Senior", "Mechanical Engineering", "2345678"],
  ["David", "EGM2511", "Sophomore", "Mechanical Engineering", "3456789"],
  ["Emily", "EGN3365", "Junior", "Civil Engineering", "4567890"],
  ["Michael", "EEL3123", "Senior", "Electrical Engineering", "5678901"],
  ["Sophia", "EML2023", "Freshman", "Materials Science and Engineering", "6789012"],
  ["William", "CEN4072", "Junior", "Computer Science", "7890123"],
  ["Olivia", "EGN3443C", "Senior", "Chemical Engineering", "8901234"],
  ["Daniel", "EEL4914C", "Junior", "Computer Engineering", "9012345"],
  ["Isabella", "EGM3401C", "Sophomore", "Mechanical Engineering", "0123456"],
  ["Aiden", "CEN4211C", "Freshman", "Computer Science", "1234567"],
  ["Mia", "EGN3613C", "Junior", "Civil Engineering", "2345678"],
  ["Ethan", "EEL3744C", "Senior", "Electrical Engineering", "3456789"],
  ["Charlotte", "EGN3615", "Junior", "Environmental Engineering", "4567890"],
  ["Alexander", "EEL4855C", "Senior", "Computer Engineering", "5678901"],
  ["Amelia", "EML4500", "Sophomore", "Materials Science and Engineering", "6789012"],
  ["Benjamin", "CEN4213C", "Freshman", "Computer Science", "7890123"],
  ["Abigail", "EGN4641C", "Senior", "Civil Engineering", "8901234"],
  ["Lucas", "EGM3402C", "Junior", "Mechanical Engineering", "9012345"],
  ["Emma", "EGN3614C", "Sophomore", "Environmental Engineering", "0123456"]
];
const useStyles = makeStyles(theme => ({
  tableOverflow: {
    overflow: 'auto'
  }
}))

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Tables" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Employee List"
            data={datatableData}
            columns={ ["Name", "Course", "Year", "Dept", "ID"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Widget title="Course List" upperTitle noBodyPadding bodyClass={classes.tableOverflow}>
            <CreateTable/>
          </Widget>
        </Grid>
      </Grid>
    </>
  );
}
