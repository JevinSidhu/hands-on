import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Link } from "react-router-dom";
import awakeWheely from './awake-wheel.png';

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
  background-color: ${ (props) => props.bg };
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
  padding: 25px;
  margin-bottom: 0;
`;

const Option = styled.button`
font-family: 'Avenir';
font-weight: 900;
background-color: #FFF;
border: none;
padding: 18px;
margin: 20px 0px;
color: #313131;
font-size: 15px;
appearance: none;
box-shadow: none;
border-radius: 12px;
box-shadow: 3px 3px #313131;
`

const Image = styled.img`
  width: 250px;
  margin-top: 250px;
`

const Warning  = styled.h3`
  font-family: 'Avenir';
  margin: 40px 0 0 0;
  font-size: 18px;
  opacity: 0.7;
  text-transform: uppercase;
`;


class HandsOn extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <Wrapper bg={'#EAB038'}>
            <ContentWrapper>
            <Image src={awakeWheely} />
              <Header>HANDS ON ACTIVE</Header>
              <Warning> Remember to pay attention and drive safe </Warning>
            </ContentWrapper>
          </Wrapper>
    );
  }
}

export default HandsOn;
