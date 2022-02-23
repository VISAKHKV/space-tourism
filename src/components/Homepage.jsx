import React from "react";
import styled from "styled-components";
import bg from "../assets/images/home/background-home-desktop.jpg";

function Homepage() {
    return (
        <Container>
            <InnerContainer className="wrapper">
                <Left>
                    <SubTitle>SO, YOU WANT TO TRAVEL TO</SubTitle>
                    <Title>SPACE</Title>
                    <Description>
                        {" "}
                        Let’s face it; if you want to go to space, you might as
                        well genuinely go to outer space and not hover kind of
                        on the edge of it. Well sit back, and relax because
                        we’ll give you a truly out of this world experience!{" "}
                    </Description>
                </Left>
                <Right>
                    <ExploreButton>EXPLORE</ExploreButton>
                </Right>
            </InnerContainer>
        </Container>
    );
}

export default Homepage;

const Container = styled.div`
  font-family: Bellefair-Regular;
  background: url(${bg});
  padding 400px 0 100px;
`;
const InnerContainer = styled.div`
    padding: 0 10%;
    display: flex;
    justify-content: space-between;
`;
const SubTitle = styled.h4`
    font-family: "BarlowCondensed-Regular";
    font-size: 28px;
    color: #d0d6f9;
`;
const Title = styled.h2`
    font-size: 150px;
    color: #fff;
`;
const Description = styled.p`
    font-family: "BarlowCondensed-Regular";
    font-size: 20px;
    margin-top: 30px;
    max-width: 450px;
    line-height: 1.8rem;
    color: #fff;
`;
const Left = styled.div``;
const Right = styled.div`
    display: flex;
    justify-content: end;
    flex-direction: column;
`;
const ExploreButton = styled.div`
    width: 200px;
    height: 200px;
    background: #fff;
    color: #0b0d17;
    border-radius: 50%;
    font-size: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    z-index: 1;
    &:hover:after {
        transform: scale(1.5);
        transition: 400ms;
    }
    &::after {
        content: "";
        width: 200px;
        height: 200px;
        border-radius: 50%;
        background-color: #fff;
        position: absolute;
        z-index: -1;
        opacity: 0.2;
    }
`;
