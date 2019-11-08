import React, { useState } from 'react'
import Salutation from '../components/Salutation/Salutation'
import Navigation from '../components/Navigation/Navigation'
import Animation from '../components/Animation/Animation'
import Zoom from 'react-reveal/Zoom';
import styled from 'styled-components'

const Container = styled.div`
  width: inherit;
  height: 100%;
`

const WelcomePage = () => {
  const [show, setShow] = useState(true)

  return (
    <div>
      {/* <Animation show={show}> */}
        <Salutation />
      {/* </Animation> */}
      <Navigation setShow={setShow}/>
    </div>
  )
}

export default WelcomePage
