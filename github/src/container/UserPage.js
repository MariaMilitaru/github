import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import UserRepo from '../components/UserRepo';


export default function UserPage() {
  const [user, setUser] = useState();
  const [userRepo, setUserRepo]= useState();
  let {id} = useParams();
  const userName =id;

  useEffect(() => {
      fetchUser();
      fetchRepos();
  }, [])



  async function fetchUser () {
    const userInfo = await axios.get(`https://api.github.com/users/${userName}`);
    setUser(userInfo.data);
  }

  async function fetchRepos () {
    const userRepo = await axios.get(`https://api.github.com/users/${userName}/repos`);
    console.log(userRepo.data)
    setUserRepo(userRepo.data);
  }

  return (
    <>
        <Navbar></Navbar>
        {user && userRepo &&
        <div style={{display:'flex', flexDirection:'row'}}>
            <UserInfo user={user}></UserInfo>
            <UserRepo repo={userRepo}/>
        </div>
        }
    </>
  )
}
