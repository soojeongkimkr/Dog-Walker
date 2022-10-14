import React from "react";
import styled from "styled-components"
import {Link, useNavigate} from 'react-router-dom'
import { auth, db } from '../shared/firebase'
import { signOut } from "firebase/auth";

import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


const Inner = styled.div`
max-width: 720px;
width: 500px;
height: 100vh;
margin: 55px 25px 0 25px;
`
const Profile = styled.div`
  height: 80px;
  display: flex;
`
const Profile_pic = styled.div`
  width: 80px;
  height: 80px;
  background: orange;
  border-radius: 100px;
`
const Profile_txt = styled.div`
  margin-left: 30px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Profile_Id = styled.div`
  height: 35%;
  display: flex;
  div:nth-child(1){
    flex-grow: 1;
  }
  div:nth-child(2){
    display: flex;
    width: 70px;
    justify-content: center;
    align-items: center;
    border: 1px solid rgba(240,240,240);
    border-radius: 7px;
    color: rgba(180,180,180);
    font-size: 14px;
  }
`
const Profile_detail = styled.div`
  font-size: 14px;
  color: #333;
`

const Mypage = () => {
  const navigate = useNavigate();
  const Logout = () => {
      signOut(auth).then(()=>{
        alert('로그아웃되었습니다')
        navigate('/')
      }).catch((err)=>{

      })
  }

  return(
    <>
    <Header/>
      <Inner>
        <Profile>
          <Profile_pic>

          </Profile_pic>
          <Profile_txt>
            <Profile_Id>
              <div>프로필 아이디</div>
              <div onClick={Logout}>logout</div>
            </Profile_Id>
            <Profile_detail>
              프로필 디테일
            </Profile_detail>
          </Profile_txt>
        </Profile>
      </Inner>
    <Sidebar/>
    </>
  )
}

export default Mypage;