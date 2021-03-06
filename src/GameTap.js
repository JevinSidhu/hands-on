import React, { Component } from 'react';
import styled, { injectGlobal } from 'styled-components';
import awakeWheely from './awake-wheel.png';
import happyWheely from './happy-wheel.png';
import sadWheely from './sad-wheel-non-circle.png';
import beerCan from './beer-can.png';
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
  font-size: 35px;
  margin-bottom: 0;
`;

const SubHeader = styled.h1`
  font-family: 'Avenir';
  margin: 0;
  font-size: 22px;
  opacity: 0.7;
`;

const Image = styled.img`
  width: 250px;
  margin-top: 250px;
`;

const SmallerImage = styled.img`
  width: 80px;
  margin-top: 25px;
  margin-bottom: -5px;
`;

const Explain = styled.div`
  margin-top: 50px;
`;

const Had  = styled.h3`
  font-family: 'Avenir';
  margin: 40px 0 0 0;
  font-size: 18px;
  opacity: 0.7;
  text-transform: uppercase;
`;

const BeerImage = styled.img`
  width: 60px;
  margin-top: 25px;
  margin-right: ${(props) => props.last ? '0px' : '10px'};
`;

const NumOfBeers  = styled.h3`
  font-family: 'Avenir';
  margin: 15px 0 0 0;
  font-size: 35px;
  opacity: 0.7;
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
margin-left: 20px;
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
            <SubHeader>{this.state.total / 1000 + ' sec'}</SubHeader>
          </ContentWrapper>
        </Wrapper>)
        } else {
          return (<Wrapper bg={'#BB2E2E'}>
            <ContentWrapper>
              <SmallerImage src={sadWheely} />
              <Header>FAILURE</Header>
              <SubHeader>{this.state.total / 1000 + ' sec'}</SubHeader>

              <Explain>
                <Had>It's As If You Had:</Had>
                <BeerImage src={beerCan} />
                <BeerImage src={beerCan} />
                <BeerImage last src={beerCan} />
                <NumOfBeers>3 BEERS</NumOfBeers>
                <Link to="/uber">
                  <Option> Uber </Option>
                </Link>
                <Link to="/handsOn">
                  <Option> Activate Hands On </Option>
                </Link>
              </Explain>
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
