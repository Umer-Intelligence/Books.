import React from "react";
import "./Books.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import { useState } from "react";

const dropdown = ({ value, onChange }) => {
  return (
    <div>
      <InputLabel>
        <div className="Dropdown-text">Max Results</div>
      </InputLabel>
      <Select
        className="Dropdown"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        <MenuItem value={5}>5</MenuItem>
        <MenuItem value={10}>10</MenuItem>
        <MenuItem value={20}>20</MenuItem>
        <MenuItem value={30}>30</MenuItem>
        <MenuItem value={40}>40</MenuItem>
      </Select>
    </div>
  );
};

export default dropdown;
