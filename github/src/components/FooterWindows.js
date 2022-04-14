import { useEffect, useState } from "react";
import FooterWin from "../styles/FooterWin.css";
import Clock from "react-digital-clock";
import axios from "axios";
import GitHubIcon from "@mui/icons-material/GitHub";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import ScreenSearchDesktopIcon from "@mui/icons-material/ScreenSearchDesktop";

const displayLanguage = (repoLang) => {
  let langArray = Object.keys(repoLang);

  return (
    <div className="display_lang_icns">
      {langArray.map((lang) => (
        <i
          key={lang}
          className={`programming lang-${lang.toLocaleLowerCase()}`}
        ></i>
      ))}
    </div>
  );
};

const get_data = () => {
  const date = new Date();
  let day = date.getDate();
  let year = date.getFullYear();
  let month = date.getMonth();

  const display_date = day + "/" + month + "/" + year;
  console.log(display_date);

  console.log(year);
  return display_date;
};

export default function FooterWindows({ repoLang, userName, activeRepo }) {
  const [repoToDisplay, setRepoToDisplay] = useState();

  async function fetchingRepo() {
    const active_repo = await axios.get(
      `https://api.github.com/repos/${userName}/${activeRepo}`
    );
    setRepoToDisplay(active_repo.data);
    console.log(JSON.stringify(active_repo.data));
  }

  return (
    <>
      {() => fetchingRepo()}
      <div class="windows-footer">
        <div className="left_footer_icns">
          <GitHubIcon
            sx={{
              fontSize: 40,
              marginLeft: 2,
              marginTop: 1,
            }}
          />
          <ScreenSearchDesktopIcon
            sx={{
              fontSize: 40,
              marginLeft: 4,
              marginTop: 1,
            }}
          />
          <LocalPostOfficeIcon
            sx={{
              fontSize: 40,
              marginLeft: 4,
              marginTop: 1,
            }}
          />
        </div>
        <div className="middle_footer"></div>

        <div class="right_footer_icns">
          <KeyboardArrowUpIcon
            sx={{
              fontSize: 40,
              marginLeft: 4,
              marginTop: 1,
            }}
          />
          <VolumeUpIcon
            sx={{
              fontSize: 40,
              marginLeft: 4,
              marginTop: 1,
              marginRight: 4,
            }}
          />
          {repoLang && displayLanguage(repoLang)}
          <div
            className="data_and_time"
            style={{
              marginTop: 4,
            }}
          >
            <Clock />
            <div
              style={{
                color: "#FEFEFE",
                marginLeft: 16,
                marginBottom: 1,
              }}
            >
              {get_data()}
            </div>
          </div>

          <NotificationsActiveIcon
            sx={{
              fontSize: 40,
              marginLeft: 4,
              marginRight: 4,
              marginTop: 1,
            }}
          />
        </div>
      </div>
    </>
  );
}
