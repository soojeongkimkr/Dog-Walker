import React from 'react';
import styled from 'styled-components'

import Header from '../components/Header';
import Sidebar from '../components/Sidebar';


const Container = styled.div`
  width: 100%;
  height: 100vh;
`
const Inner = styled.div`
  max-width: 720px;
  width: 500px;
  height: 100vh;
  margin: 55px 25px 0 25px;
`

const Main = () => {

  return(
    <>
      <Header/>
        <Inner>
          <Container>
            
          </Container>
        </Inner>
      <Sidebar/>
    </>
  )
}

export default Main;