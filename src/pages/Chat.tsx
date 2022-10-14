import react from 'react'
import styled from 'styled-components'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const Inner = styled.div`
  max-width: 720px;
  width: 500px;
  height: 100vh;
  margin: 55px 25px 0 25px;
`

const Chat = () => {

  return(
    <>
    <Header/>
      <Inner>
        chatlist
      </Inner>
    <Sidebar/>
    </>
  )
}

export default Chat;