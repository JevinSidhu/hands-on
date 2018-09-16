import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import { Link } from "react-router-dom";


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
  margin-top: 3.5em;
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

class GameEnd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tapped: false,
      startTime: new Date(),
      total: undefined,
    };
  }

  wheelTapped = () => {
    this.setState({
      tapped: true,
    });
    this.end();
  };

  end = () => {
    const endTime = new Date();
    const timeDiff = endTime - this.state.startTime;
    const ms = Math.round(timeDiff);
    console.log(ms);

    this.setState({
      total: ms,
    });
  }

  render() {
    return (
        <Wrapper bg={'#19baff'}>
            <ContentWrapper>
              <Header>Hello</Header>
              <Link to="/uber">
                <Option> Uber </Option>
              </Link>
              <Link to="/handsOn">
              <Option> Activate Hands On </Option>
              </Link>
            </ContentWrapper>
          </Wrapper>
    );
  }
}

export default GameEnd;
