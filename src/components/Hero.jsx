import React from 'react'
import styled from 'styled-components'
import Navbar from './Navbar'

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
`
const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`
const Left = styled.div`

`
const Title = styled.h1`

`
const WhatWeDo = styled.div`

`
const Line = styled.img`

`
const Subtitle = styled.h2`

`
const Desc = styled.p`

`
const Button = styled.div`

`
const Right = styled.div`

`
const Img = styled.img`

`


const Hero = () => {
  return (
    <Section>
      <Navbar/>
      <Container>
      <Left>
      <Title>
      Think. Make. Solve.
      </Title>
      <WhatWeDo>
        <Line src=".img/line.png"/>
        <Subtitle></Subtitle>
      </WhatWeDo>
      <Desc>
        we enjoy creating delightful, human-created digital experiences
      </Desc>
      <Button>Learn more</Button>
      </Left>
      <Right>
       </Right>
       </Container>
    </Section>
  )
}

export default Hero