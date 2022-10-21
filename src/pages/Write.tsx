import React, {useRef, useCallback, useState} from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from "react-redux";
import {writePostDB} from '../redux/modules/posts'

import Header from '../components/Header'
import Sidebar from '../components/Sidebar'
import Calendar from '../components/Calendar'

import {AiOutlineCamera} from 'react-icons/ai'

const Inner = styled.div`
  max-width: 720px;
  width: 500px;
  height: 100vh;
  margin: 55px 25px 0 25px;
`
const ImgList = styled.div`
  display: flex;
  margin-top: 1vh;
`
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: 8vh;
  width: 8vh;
  border-radius: 10px;
  border: 1px solid rgba(220,220,220);
  box-sizing: border-box;
  margin-right: 1vw;
  label{
    display: flex;
    justify-content: center;
    align-items: center;
  }
  input{
    display: none;
  }
  img{
    position: relative;
    height: 7vh;
    widhth: 7vw;
    border-radius: 8px;
  }
`
const Title = styled.div`
  margin-top: 2vh;
  padding-bottom: 1vh;
  border-bottom: 1px solid rgba(240,240,240);
  input{
    border: none;
    outline: none;
    width: 100%;
  }
`
const Text = styled.div`
  textarea{
    width: 100%;
    height: 30vh;
    border: 1px solid rgba(240,240,240);
    border-radius: 7px;
    margin-top: 2vh;
    outline: none;
    resize: none;
    box-sizing: border-box;
    color: rgba(160,160,160);
    padding: 1em;
  }
`
const Button = styled.div`
  width: 100%;
  height: 5vh;
  border-radius: 7px;
  margin-top: 1vh;
  background: orange;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
`

const Write = () => {
  const inputRef = useRef<HTMLInputElement | null >(null);
  const [imgList, setImgList] = useState<File[]>([]);
  const [imgPreview, setImgPreview] = useState<string[]>([])
  const onUploadImage = useCallback((e: React.ChangeEvent<HTMLInputElement>) =>{
    if(!e.target.files){
      return;
    }
    const file = e.target.files[0]
    setImgList(pre => {
      const list = [...pre]
      list.push(file)
      return list
    })

    const imgSrc = URL.createObjectURL(file)
    setImgPreview(pre => {
      const src = [...pre]
      src.push(imgSrc)
      return src
    })

  },[imgList])

  const UploadImageHandler = useCallback(() => {
   if(!inputRef.current){
    return;
   }
    inputRef.current.click()
  },[])

    return(
      <>
        <Header/>
          <Inner>
            <ImgList>
              <Item>
                <label htmlFor='uploadimg'>
                  <input type="file" id="uploadimg" accept="image/*" ref={inputRef} onChange={onUploadImage}/>
                  <AiOutlineCamera size='26' color='rgba(220,220,220)'/>
                </label>
              </Item>
              {imgPreview.map((l,i)=>{
                return(
                  <Item key={i}>
                    <img src={l} alt={`강아지이미지${i}`}/>
                  </Item>
                )
              })}
            </ImgList>

            <Title>
              <input type="text" placeholder='제목을 입력해주세요'/>
            </Title>
            <Title>
              <input type="text" placeholder='원하시는 산책 시간을 입력해주세요'/>
            </Title>
            <Calendar/>
            <Text>
              <textarea defaultValue='강아지 체중: '/>
            </Text> 
            <Button>
              작성하기
            </Button>
          </Inner>
        <Sidebar/>
      </>
    )
}
export default Write;