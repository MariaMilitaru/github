import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import UserInfo from "../components/UserInfo";
import axios from "axios";
import { useParams } from "react-router-dom";
import UserRepo from "../components/UserRepo";
import RepoRooting from "../components/RepoRooting";

export default function UserPage() {
  const [user, setUser] = useState();
  const [userRepo, setUserRepo] = useState();
  const [rooting, setRooting] = useState(false);
  const [activeRepo, setActiveRepo] = useState();
  const [searchText, setSearchText] = useState("");
  let { id } = useParams();
  const userName = id;

  useEffect(() => {
    fetchUser();
    fetchRepos();
  }, []);

  async function fetchUser() {
    const userInfo = await axios.get(
      `https://api.github.com/users/${userName}`
    );
    setUser(userInfo.data);
  }

  async function fetchRepos() {
    const userRepo = await axios.get(
      `https://api.github.com/users/${userName}/repos`
    );
    setUserRepo(userRepo.data);
  }

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
            />
          )}
        </div>
      )}
    </>
  );
}
