import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
const Title = styled.div`
    text-align: center;
    padding-bottom: 20px;
    color: #333;
`
const Forms = styled.div`
    width: 300px;
    border: none;
    border-radius: 10px;
`
const TextArea = styled.div`
    width: 300px;
    height: 35px;
    border: 1px solid #ccc;
    border-radius: 10px;
    margin-bottom: 10px;
    input{
        width: 100%;
        border: none;
        height: 35px;
        padding-left: 1em;
        box-sizing: border-box;
        background: transparent;
        outline: none;
    }
`
const Submit = styled.div`
    width: 300px;
    height: 35px;
    background: #FFAE6D;
    border-radius: 10px;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
`
const LogIn = styled.div`
    font-size: 13px;
    color: #3c3c3c;
    text-align: center;
    margin-top: 7px;
`



const Siginin = (): JSX.Element =>{

 
    return(
        <Container>
            <Forms>
                <Title>
                    회원가입
                </Title>
                <TextArea>
                    <input type="text" placeholder='아이디를 입력해주세요'/>
                </TextArea>
                <TextArea>
                    <input type="password" placeholder='비밀번호를 입력해주세요'/>
                </TextArea>
                <Submit>
                    완료
                </Submit>
                <LogIn>
                    이미 멤버이신가요? <Link to ="/signin" style={{color:"#FFAE6D", fontWeight:'700'}}><u>로그인</u></Link>
                </LogIn>
            </Forms>
        </Container>
    )
}

export default Siginin