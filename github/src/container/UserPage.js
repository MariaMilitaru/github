import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import UserRepo from "../components/UserRepo";
import RepoRooting from "../components/RepoRooting";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProfileAction,
  fetchReposAction,
} from "../redux/slices/githubSlices";

export default function UserPage() {
  const [rooting, setRooting] = useState(false);
  const [activeRepo, setActiveRepo] = useState();
  const [searchText, setSearchText] = useState("");
  let { id } = useParams();
  const userName = id;

  const store = useSelector((state) => state?.repos);
  const { reposList, profile } = store;
  const user = profile;
  const userRepo = reposList;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProfileAction(userName));
    dispatch(fetchReposAction(userName));
  }, [dispatch]);

  const getFilteredRepos = () => {
    return userRepo.filter((val) => {
      const repoName = val.name.toLowerCase();
      const searchInput = searchText.toLowerCase();
      if (searchInput == "" || repoName.includes(searchInput)) {
        return true;
      } else {
        return false;
      }
    });
  };

  return (
    <>
      <Navbar />
      {user && userRepo && (
        <div style={{ display: "flex", flexDirection: "row" }}>
          <UserInfo user={user}></UserInfo>
          {rooting ? (
            <RepoRooting
              setRooting={setRooting}
              userName={userName}
              activeRepo={activeRepo}
            />
          ) : (
            <UserRepo
              repo={getFilteredRepos()}
              setSearchText={setSearchText}
              setRooting={setRooting}
              setActiveRepo={setActiveRepo}
              appear
            />
          )}
        </div>
      )}
    </>
  );
}
