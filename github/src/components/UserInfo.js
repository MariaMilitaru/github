import React from 'react';
import '../styles/UserInfo.css';
import PublicIcon from '@mui/icons-material/Public';
import Grid from '@mui/material/Grid';
import EventIcon from '@mui/icons-material/Event';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';



export default function UserInfo({ user }) {
    const dataCreated = (user.created_at).substring(0,10);
    const dataUpdated = (user.updated_at).substring(0,10);
    return (
        <div className="user_container" data-testid="userinfo-test" >
            <div className="user_info_header">
                <img src={user.avatar_url} className="profile_pic" alt="profileimage"></img>
                <h3>{user.login}</h3>
            </div>
            <div className="user_info_container" >
                <div className="user_info_details" >
                    <Grid container direction="row" alignItems="center">
                        <PublicIcon fontSize="small" /> <p className="user_info"> {user.public_repos} PUBLIC REPOS </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <EventIcon fontSize="small" />  <p className="user_info">CREATED AT {dataCreated} </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <EventIcon fontSize="small" />  <p className="user_info">LAST UPDATE {dataUpdated}  </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <PersonOutlineIcon fontSize="small" />  <p className="user_info"> {user.followers} Followers  </p>
                    </Grid>
                    <Grid container direction="row" alignItems="center">
                        <FavoriteBorderIcon fontSize="small" />  <p className="user_info"> {user.following} Following  </p>
                    </Grid>
                </div>
            </div>
        </div>
    )
}
