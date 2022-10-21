import React from 'react';
import {Routes, Route} from 'react-router'
import styled from 'styled-components';

import backgroundillust from './img/backgroundillust.jpg'

import Signin from './pages/Signin';
import Login from './pages/Login';
import Tips from './pages/Tips';
import Chat from './pages/Chat';
import Main from './pages/Main';
import Mypage from './pages/Mypage';
import Write from './pages/Write';

const App = (): JSX.Element => {
  return (
    <div className="App">
      <Background>
        <Container>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/main' element={<Main/>}/>
            <Route path='/tips' element={<Tips/>}/>
            <Route path='/chat' element={<Chat/>}/>
            <Route path='/mypage' element={<Mypage/>}/>
            <Route path='/write' element={<Write/>}/>
          </Routes>
        </Container>
      </Background>
    </div>
  );
}

const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${backgroundillust});
  background-size: cover;
  background-position: bottom;
  display:flex;
  justify-content: right;
`
const Container = styled.div`
  position: fixed;
  display:flex;
  justify-content: center;
  max-width: 720px;
  width: 500px;
  height: 100vh;
  background: #fff;
  @media (min-width: 992px) {
    margin-right: 10vw;
  }
`

export default App;
