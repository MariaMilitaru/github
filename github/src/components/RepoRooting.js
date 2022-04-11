import React from "react";
import RepoRootingStyle from "../styles/RepoRootingStyle.css";
import CloseIcon from "@mui/icons-material/Close";

export default function RepoRooting({ setRooting }) {
  return (
    <div className="repo-card">
      <CloseIcon
        onClick={() => setRooting(false)}
        className="xBTN"
        sx={{
          fontSize: 50,
          paddingTop: 0.4,
          color: "white",
          paddingBottom: 0.4,
          alignSelf: "flex-end",
          borderTopRightRadius: 15,
        }}
      />
      <div>test</div>
    </div>
  );
}
