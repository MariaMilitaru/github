import React, {useEffect, useState} from 'react';
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo';
import axios from 'axios';


export default function UserPage() {
  const [user, setUser] = useState();
  const userName = "WebDevSimplified";

  useEffect(() => {
      fetchUser();
  }, [])

  async function fetchUser () {
    const userInfo = await axios.get(`https://api.github.com/users/${userName}`);
    setUser(userInfo.data);
  }

  return (
    <>
        <Navbar></Navbar>
        {user &&
        <div style={{display:'flex', flexDirection:'row'}}>
            <UserInfo user={user}></UserInfo>
        </div>
        }
    </>
  )
}
