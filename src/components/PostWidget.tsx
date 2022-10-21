import React from "react";
import styled from 'styled-components'
import { useNavigate } from "react-router-dom";

import {HiOutlinePencil} from 'react-icons/hi'

const Container = styled.div`
    width: 50px;
    height: 50px;
    background: orange;
    border-radius: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    bottom: 70px;
    right: 30px;
`

const PostWidget = () => {
    const navigate = useNavigate();
    const WritePostHandler = () => {
        navigate('/write')
    }

    return(
      <Container>
        <HiOutlinePencil size="24" color="#fff" onClick={WritePostHandler}/>
      </Container>
    )
}
export default PostWidget;