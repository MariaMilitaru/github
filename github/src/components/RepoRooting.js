import React, { useEffect, useState } from "react";
import RepoRootingStyle from "../styles/RepoRootingStyle.css";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import axios from "axios";
import RootingComponent from "./RootingComponent";
import FooterWindows from "./FooterWindows";

export default function RepoRooting({ setRooting, userName, activeRepo }) {
  const [rootingFiles, setRootingFiles] = useState();
  const [repoLang, setRepoLang] = useState();

  useEffect(() => {
    fetchingRooting();
    fetchingLanguages();
    repoLang && console.log(Object.keys(repoLang).length);
  }, []);

  async function fetchingLanguages() {
    const repoLanguages = await axios.get(
      `https://api.github.com/repos/${userName}/${activeRepo}/languages`
    );
    setRepoLang(repoLanguages.data);
    console.log(repoLanguages.data);
  }

  async function fetchingRooting() {
    let get_default_branch = await axios.get(
      `https://api.github.com/repos/${userName}/${activeRepo}`
    );
    const get_branch = get_default_branch.data.default_branch;
    console.log(get_branch);

    const rootingFiles = await axios.get(
      `https://api.github.com/repos/${userName}/${activeRepo}/git/trees/${get_branch}`
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
            borderBottomLeftRadius: 15,
          }}
        />

        <Box
          sx={{
            // background: "#F5F5F5",
            marginLeft: 3,
            marginRight: 3,
            marginTop: 4,
            height: 1,
          }}
        >
          {rootingFiles &&
            rootingFiles.tree.map((file) => <RootingComponent file={file} />)}
        </Box>
        <FooterWindows repoLang={repoLang} />
      </div>
    </>
  );
}
