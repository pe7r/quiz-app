import React from 'react';
import styled from 'styled-components'
import { BrowserRouter, Route } from 'react-router-dom';
import WelcomePage from './pages/WelcomePage';

const Container = styled.div`
  height: 100vh;
  overflow: hidden;
  font-family: SkolSerifa;
`

const Content = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
`

const App = () => {
  return (
    <Container>
      <Content>
        <BrowserRouter>
          <Route exact path="/" render={() => <WelcomePage />}/>
          <Route exact path="/play" render={() => <WelcomePage />}/>
        </BrowserRouter>
      </Content>
    </Container>
  );
}

export default App;
