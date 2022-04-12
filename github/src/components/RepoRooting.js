import React, { useEffect, useState } from "react";
import RepoRootingStyle from "../styles/RepoRootingStyle.css";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import axios from "axios";
import RootingComponent from "./RootingComponent";

export default function RepoRooting({ setRooting, userName, activeRepo }) {
  const [rootingFiles, setRootingFiles] = useState();

  useEffect(() => {
    fetchingRooting();
  }, []);

  async function fetchingRooting() {
    const rootingFiles = await axios.get(
      `https://api.github.com/repos/${userName}/${activeRepo}/git/trees/master`
    );
    setRootingFiles(rootingFiles.data);
    console.log(rootingFiles.data);
  }

  return (
    <>
      <div className="repo-card">
        <CloseIcon
          onClick={() => setRooting(false)}
          className="xBTN"
          sx={{
            fontSize: 25,
            paddingTop: 0.4,
            paddingLeft: 0.8,
            paddingRight: 0.8,
            paddingBottom: 0.5,
            color: "white",
            paddingBottom: 0.4,
            alignSelf: "flex-end",
            borderTopRightRadius: 15,
          }}
        />
        <Box
          sx={{
            background: "#F5F5F5",
            marginLeft: 3,
            marginRight: 3,
            marginTop: 4,
            height: 1,
          }}
        >
          {rootingFiles &&
            rootingFiles.tree.map((file) => <RootingComponent file={file} />)}
        </Box>
      </div>
    </>
  );
}
