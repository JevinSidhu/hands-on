import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import sleepyWheely from './sleepy-wheel.png';
import { Redirect } from "react-router-dom";

injectGlobal`
  @font-face {
    font-family: 'Noto Serif KR';
    src: url(https://fonts.googleapis.com/css?family=Noto+Serif+KR:600);
  }

  @font-face {
    font-family: 'Avenir';
    src: url('./fonts/Avenir.ttc');
  }
`

const Wrapper = styled.div`
  background-color: #313131;
  color: #FFF;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.h1`
  font-family: 'Avenir';
  font-size: 30px;
  margin-top: 3.5em;
  padding: 25px;
  margin-bottom: 0;
`;

const Image = styled.img`
  width: 250px;
  margin-top: 250px;
`

class GameFinish extends Component {
  constructor(props) {
    super(props);
    this.state = {
      redirect: false,
    };
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  render() {
    const ms = this.getRandomArbitrary(3, 8) * 1000;
    console.log(ms);
    setTimeout(() => {
      this.setState({
        redirect: true,
      });
    }, ms);
    return (
      <Wrapper>
        {this.state.redirect ? <Redirect to="/tap"/> : ''}
        <ContentWrapper>
          <Image src={sleepyWheely} />
          <Header>SUCCES</Header>
        </ContentWrapper>
      </Wrapper>
    );
  }
}

export default GameFinish;
