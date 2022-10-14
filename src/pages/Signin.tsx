import React, { useRef } from 'react';
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'
import { auth, db } from '../shared/firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from 'firebase/firestore';



const Container = styled.div`
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #fff;
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



const Signin = (): JSX.Element =>{
  const navigate = useNavigate()
  const id = useRef<HTMLInputElement>(null);
  const pw = useRef<HTMLInputElement>(null);
  const name = useRef<HTMLInputElement>(null);

  const signupFB = async () => {
    if (id.current !== null && pw.current !== null){
      const user = await createUserWithEmailAndPassword(auth, id.current.value, pw.current.value)
      .then(()=>{
        navigate('/')
      })
      .catch((e)=>{
        const error = e.code
        if(error === 'auth/invalid-email'){
          alert('이메일주소를 입력해주세요')
        } else if (error === 'auth/weak-password'){
          alert('6자 이상의 비밀번호를 입력해주세요')
        } else if(error ==='auth/email-already-in-use'){
          alert('이미 가입된 이메일입니다')
        }
      })
      
      const user_data = await addDoc(collection(db,'user'),{
        user_id: id.current.value,
        name: name.current?.value
      })  
    }
  }

  return(
    <Container>
      <Forms>
        <Title>
            회원가입
        </Title>
        <TextArea>
            <input type="text" placeholder='이름을 입력해주세요' ref={name}/>
        </TextArea>
        <TextArea>
            <input type="text" placeholder='아이디를 입력해주세요' ref={id}/>
        </TextArea>
        <TextArea>
            <input type="password" placeholder='비밀번호를 입력해주세요' ref={pw}/>
        </TextArea>
        <Submit onClick={signupFB}>
            완료
        </Submit>
        <LogIn>
            이미 멤버이신가요? <Link to ="/" style={{color:"#FFAE6D", fontWeight:'700'}}><u>로그인</u></Link>
        </LogIn>
      </Forms>
    </Container>
  )
}

export default Signin