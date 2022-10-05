import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import {MdOutlineTipsAndUpdates, MdOutlinePersonOutline} from 'react-icons/md'
import {AiOutlineHome} from 'react-icons/ai'



const Container = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  height: 45px;
  bottom:0;
  background: #fff;
  border-top: 1px solid #939393;
`
const Item = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 45px;
  background: #fff;
  border: none;
`


const Sidebar = () => {

  return(
    <Container>
        <Item>
          <Link to="/tips">
            <MdOutlineTipsAndUpdates size="24" color="#333" style={{marginTop:'2px'}}/>
          </Link>
        </Item>
      <Item>
        <AiOutlineHome size="24" color="#333"/>
      </Item>
      <Item>
        <MdOutlinePersonOutline size="26" color="#333"/>
      </Item>
    </Container>
  )
}

export default Sidebar;