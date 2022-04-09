import React from 'react';
import '../styles/UserInfo.css';
import PublicIcon from '@mui/icons-material/Public';
import Grid from '@mui/material/Grid';
import EventIcon from '@mui/icons-material/Event';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

export default function UserInfo() {
    return (
        <div className="user_container" >
            <img src="https://avatars.githubusercontent.com/u/83230134?v=4" className="profile_pic" alt="profileimage"></img>
            <div className="user_info_container" >
                <h3>MariaMilitaru</h3>
                <div className="user_info_details" >
                    <Grid container direction="row" alignItems="center">
                        <PublicIcon fontSize="small"/>  <p> 10 PUBLIC REPOS </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <EventIcon fontSize="small"/>  <p>CREATED AT 26.04.2021 </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <EventIcon fontSize="small"/>  <p>LAST UPDATE 29.03.2022  </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <PersonOutlineIcon fontSize="small"/>  <p> 0 Followers  </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <FavoriteBorderIcon fontSize="small"/>  <p> 0 Following  </p>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
