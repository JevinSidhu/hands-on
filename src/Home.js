import React, { Component } from 'react';
import wheely from './wheely.png';
import moon from './moon.png';
import { Link } from "react-router-dom";
import styled, { injectGlobal } from 'styled-components'

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
  background-color: #7210C7;
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
  align-items: left;
  margin-left: 1.5em;
`;

const Header = styled.h1`
  font-family: 'Noto Serif KR', serif;
  font-size: 45px;
  margin-top: 3.5em;
  margin-bottom: 0;
  border-bottom: 1px solid #FFF;
  padding-bottom: 3px
`;

const Paragraph = styled.p`
  font-family: 'Avenir';
  font-size: 15px;
  margin: 10px 0 0 0;
  line-height: 1.5;
  width: 80%;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  left: -40px;
  width: 300px;
`

const PerformTest = styled.button`
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
`;

class Home extends Component {
  render() {
    return (
      <Wrapper>
        <ContentWrapper>
          <Header>Hands On</Header>
          <Paragraph>Drowsy driving is estimated to be a factor in 20% of fatal crashes. It's often difficult how sleepy you really are; 30% of the population is sleep deprived. </Paragraph>
          <Link to="/start">
            <PerformTest type="submit" className="submit">Take the Test!</PerformTest>
          </Link>
          <Image src={wheely} />
        </ContentWrapper>
      </Wrapper>


    );
  }
}

export default Home;
