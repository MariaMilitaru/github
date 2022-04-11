import Repository from "./Repository";
import TextField from "@mui/material/TextField";
import "../styles/UserRepo.css";

import { useState } from "react";

const cardClick = (setRooting) => {
  setRooting(true);
};

export default function UserRepo({ repo, setRooting }) {
  return (
    <>
      <div className="test">
        <TextField
          id="standard-basic"
          label="search repo.."
          variant="standard"
        />
        <div className="repos_container" onClick={() => cardClick(setRooting)}>
          {repo.map((repo) => (
            <Repository key={repo.id} repo={repo}></Repository>
          ))}
        </div>
      </div>
    </>
  );
}
