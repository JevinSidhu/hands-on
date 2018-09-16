import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import awakeWheely from './awake-wheel.png';
import happyWheely from './happy-wheel.png';
import sadWheely from './sad-wheel.png';

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

const Image = styled.img`
  width: 250px;
  margin-top: 250px;
`

class GameTap extends Component {
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
    const notTapped = () =>
      (<Wrapper bg={'#EAB038'}>
        <ContentWrapper>
          <Image onClick={this.wheelTapped} src={awakeWheely} />
          <Header>TAP THE WHEEL!</Header>
        </ContentWrapper>
      </Wrapper>);

      const tapped = () => {
        if (this.state.total < 700) {
        return (<Wrapper bg={'#4BCF7F'}>
          <ContentWrapper>
            <Image src={happyWheely} />
            <Header>SUCCESS</Header>
          </ContentWrapper>
        </Wrapper>)
        } else {
          return (<Wrapper bg={'#BB2E2E'}>
            <ContentWrapper>
              <Image src={sadWheely} />
              <Header>FAILURE</Header>
            </ContentWrapper>
          </Wrapper>)
        };
      }
    return (
      this.state.tapped ? tapped() : notTapped()
    );
  }
}

export default GameTap;
