import React, {useState} from 'react'
import "./Search.css"
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import {DateRangePicker} from "react-date-range"
import { People } from "@mui/icons-material";
import { Button } from "@mui/material";



const Search = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key : "selection",
    };


    const handleSelection = (ranges) => {
      setStartDate(ranges.selection.startDate);
      setEndDate(ranges.selection.endDate);
    };
 
  return (
    <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelection} />
        <h2>Number of guests <People/> </h2>
        <input type="number" min={0} defaultValue={2}/>
        <Button>Search Airbnb</Button>
    </div>
  )
}

export default Search;