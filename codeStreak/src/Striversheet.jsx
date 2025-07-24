
import data from "./striverJson";
import React,{useState } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";

import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";

import Checkbox from "@mui/material/Checkbox";
import StarIcon from "./StarIcon"

export default function Striversheet(props){

 const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

 //Checkbox click //set initial state
  const [check, setCheck] = useState(
    props.problem.questions.map((item) => ({ ...item, Done: false, date: "" }))
  );

  console.log(check);

  const handleCheckboxChange = (index) => {
    const updated = [...check];
    const isChecked = !updated[index].Done;
    updated[index].Done = isChecked;
    updated[index].date = isChecked ? new Date().toLocaleDateString() : " ";
    setCheck(updated);
  };


  return (
    
    <Box>
      <List
        sx={{ width: "100%", bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleClick}>
          <ListItemText>
            {props.problem.position}.{props.problem.topicName}
          </ListItemText>

          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
      </List>
      
      <Collapse in={open} timeout="auto" unmountOnExit>
  <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Status</TableCell>
          <TableCell align="center">Problems</TableCell>
          <TableCell align="center">Link</TableCell>
          <TableCell align="center">Difficulty</TableCell>
          <TableCell align="center">Date</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {check.map((ques, index) => (
          <TableRow
            key={index}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              <Checkbox
                checked={ques.Done}
                onChange={() => handleCheckboxChange(index)}
              />
            </TableCell>
            <TableCell align="center">{ques.Problem}</TableCell>
            <TableCell align="center">
              <a href={ques.URL} target="_blank" rel="noopener noreferrer">
                Solve
              </a>
            </TableCell>
            <TableCell align="center">
              <StarIcon starCount={5} />
            </TableCell>
            <TableCell align="center">{ques.date || "-"}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
</Collapse>
    </Box>
  );
}