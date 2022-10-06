import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { auth } from '../shared/firebase';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';

import {BsChatDotsFill, BsChatDots} from 'react-icons/bs'


const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 45px;
  top:0;
  background: #fff;
  border-bottom: 1px solid #ccc;
`
const Title = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background: #fff;
`
const Item = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background: #fff;
`

const Header = () => {
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
      <Title>

      </Title>
      {is_login?
      <>
      {/* <Item>
        <Link to="/tips">
          <BsChatDotsFill size="24" color="#333" style={{marginTop:'2px'}}/>
        </Link>
      </Item> */}
      <Item>
        <Link to="/tips">
          <BsChatDots size="26" color="#333"/>
        </Link>
      </Item>
      </>
      :
      <>
      로그인
      </>
      }
      
    </Container>
  )
}

export default Header;