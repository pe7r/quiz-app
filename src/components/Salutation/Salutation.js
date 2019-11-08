import React from 'react'
import styled from 'styled-components'
import CenteredComponent from '../CenteredComponent/CenteredComponent'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  padding: 10px;
  color: #2088b5;
  font-size: 104px;
  background-color: black;
`

const Salutation = () => {
  return (
    <>
      <Container>
        <CenteredComponent>
          Random Quiz
        </CenteredComponent>
      </Container>
    </>
  )
}

export default Salutation
