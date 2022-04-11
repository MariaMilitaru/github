import React from "react";
import '../styles/Repository.css';
import { Card, Grid } from '@mui/material';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import ForkRightOutlinedIcon from '@mui/icons-material/ForkRightOutlined';

export default function Repository({ repo }) {
  return (
    <Card  sx={{ minWidth: 330 }} className="repo_card">
      <Grid container direction="row" alignItems="center">
        <CollectionsBookmarkIcon fontSize="small"/> <p className="repo_info"> {repo.name}  </p>
      </Grid>
      <Grid container direction="row" alignItems="center">
        {repo.language && <CodeOutlinedIcon  fontSize="small"/> }
        {repo.language && <p className="repo_info" > {repo.language}  </p>}
        <ForkRightOutlinedIcon  fontSize="small"/> <p className="repo_info"> {repo.forks_count}  </p>
      </Grid>
    </Card>
  );
}
