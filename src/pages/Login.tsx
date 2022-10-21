import React,{useRef} from 'react';
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { auth, db } from '../shared/firebase'
import { signInWithEmailAndPassword } from "firebase/auth";
import {getDocs, where, query, collection} from 'firebase/firestore';

import logo from '../img/logo.png'

const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
`
const Logo = styled.div`
    width: 120px;
    height: 120px;
    margin-bottom: 30px;
    background-image:url(${logo});
    background-size: cover;
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
const SignIn = styled.div`
    font-size: 13px;
    color: #3c3c3c;
    text-align: center;
    margin-top: 7px;
`


const Login = (): JSX.Element =>{
    const navigate = useNavigate()
    const id = useRef<HTMLInputElement>(null)
    const pw = useRef<HTMLInputElement>(null)

    const loginFB = async () =>{
        if(id.current !== null && pw.current !== null){
            const user = await signInWithEmailAndPassword(auth, id.current.value, pw.current.value)
            .then(()=>{
                navigate('/main')
            })
            .catch((error) => {
                const errorCode = error.code;
                alert(errorCode)
                console.log(errorCode)
              });

        // 이메일주소와 회원고유번호인 아이디를 똑같이 만들기
        const user_docs = await getDocs(
            query(collection(db, "users"), where("user_id", "==", id.current.value))
        );
        console.log(user_docs)

        user_docs.forEach((u) => {
            console.log(u.data());
        })
        }
    }
 
    return(
        <Container>
            <Logo>
            </Logo>
            <Forms>
                <TextArea>
                    <input type="text" placeholder='아이디를 입력해주세요' ref={id}/>
                </TextArea>
                <TextArea>
                    <input type="password" placeholder='비밀번호를 입력해주세요' ref={pw}/>
                </TextArea>
                <Submit onClick={loginFB}>
                    로그인
                </Submit>
                <SignIn>
                    아직 회원이 아니신가요? <Link to ="/signin" style={{color:"#FFAE6D", fontWeight:'700'}}><u>회원가입</u></Link>
                </SignIn>
            </Forms>
        </Container>
    )
}

export default Login