import React from "react";
import styled from 'styled-components'

const Container = styled.div`
    flex-grow: 1;
`

const Geolocation = () =>{

    const searchLocation = () =>{
        const loca = navigator.geolocation.getCurrentPosition((position) => {
            const latitude  = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log(latitude)
            console.log(longitude)
          });
    }
    
    return(
        <Container onClick={searchLocation}>
            위치를 등록해주세요
        </Container>
    )
}

export default Geolocation;