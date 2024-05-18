import React, { useState } from 'react'
import {Button} from "@mui/material"
import Search from '../Search/Search'
import { useNavigate } from "react-router-dom"
import "./Banner.css"


const Banner = () => {
    const [showSearch, setShowSearch] =  useState(false);

    const navigate = useNavigate()

  return (
    <div className="banner">
        <div className="banner__search">
            <Button className="banner__searchButton" variant="outlined" onClick={()=> setShowSearch((prev) => !prev)}>
                {showSearch ? "Hide" : "Search Dates"}
            </Button>
            {showSearch && <Search/>}
        </div>
        <div className="banner__info">
          <h1>Get out and stretch your imagination</h1>
          <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
          <Button variant ='outlined' onClick={() => navigate('/search')} >Explore Nearby</Button>
        </div>
    </div>
  )
}

export default Banner