import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button';
import './Navigation.scss'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 50%;
  background-color: #2088b5;
`

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content:space-around;
`

const Navigation = ({ setShow }) => {
  return (
    <Container>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={() => setShow(false)}
      >
        PLAY
      </Button>
      <ButtonGroup>
      <Button variant="contained" size="small">
        Levels
      </Button>
      <Button variant="contained" size="small">
        Settings
      </Button>
      </ButtonGroup>
    </Container>
  )
}

export default Navigation
