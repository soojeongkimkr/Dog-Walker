import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { auth } from '../shared/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

import {BsChatDotsFill, BsChatDots} from 'react-icons/bs'

import Geolocation from './Geolocation';

  const Container = styled.div`
  position: fixed;
  width: 500px;
  background: #fff;
  border-bottom: 1px solid rgba(230, 230, 230);
`
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  margin: 0 30px;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Header = () => {
  const link = document.location.href.split("/").reverse()[1];
  const [is_login, setIsLogin] = React.useState<boolean>();

  const loginCheck = async(user:User|null) => {
    if(user){
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  }

  React.useEffect(()=> {
    onAuthStateChanged(auth, loginCheck);
  }, [])


  return(
    <Container>
      <Inner>
        <Geolocation/>
        {is_login?
        <>
        <Item>
          <Link to="/chat">
            <BsChatDots size="24" color="#333"/>
          </Link>
        </Item>
        </>
        :
        <>
        <Item>
        로그인
        </Item>
        </>
        }
      </Inner>
    </Container>
  )
}


export default Header;