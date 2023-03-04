import React from "react";
import {
  Table,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  Chip
} from "@material-ui/core";
import useStyles from "../../styles";

const states = {
  sent: "success",
  pending: "warning",
  declined: "secondary",
};

export default function TableComponent({ data }) {
  const classes = useStyles();
  var keys = Object.keys(data[0]).map(i => i.toUpperCase());
  keys.shift(); // delete "id" key

  return (
    <Table className="mb-0">
      <TableHead>
        <TableRow>
          {keys.map(key => (
            <TableCell key={key}>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map(({ id, CourseTitle, Course, TA_Name, Instructor, Section, Time, RoomCap, status}) => (
          <TableRow key={id}>
            <TableCell className="pl-3 fw-normal">{CourseTitle}</TableCell>
            <TableCell>{Course}</TableCell>
            <TableCell>{TA_Name}</TableCell>
            <TableCell>{Instructor}</TableCell>
            <TableCell>{Section}</TableCell>
            <TableCell>{Time}</TableCell>
            <TableCell>{RoomCap}</TableCell>
            <TableCell>
              <Chip label={status} classes={{root: classes[states[status.toLowerCase()]]}}/>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
