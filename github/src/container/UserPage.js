import React from 'react';
import Navbar from '../components/Navbar'
import UserInfo from '../components/UserInfo';

export default function UserPage() {
  return (
    <div>
        <Navbar></Navbar>
        <div style={{display:'flex', flexDirection:'row'}}>
            <UserInfo></UserInfo>
        </div>
    </div>
  )
}
