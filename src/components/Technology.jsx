import React, { useState } from "react";
import styled from "styled-components";
import { getData } from "../Data";

import bg from "../assets/images/technology/background-technology-desktop.jpg";
import vehicle from "../assets/images/technology/image-launch-vehicle-portrait.jpg";
import port from "../assets/images/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/images/technology/image-space-capsule-portrait.jpg";

function Technology() {
    const data = getData();
    const technologies = data[2];
    const [selectedId, setSelectedId] = useState("0");
    const selection = (t) => {
        setSelectedId(t.id);
    };
    return (
        <Container>
            <Title>
                <Num>03</Num>SPACE LAUNCH 101
            </Title>
            <InnerContainer>
                <DetailSection>
                    <Left>
                        {technologies.map((t) => (
                            <Round
                                onClick={() => selection(t)}
                                key={t.id}
                                className={t.id == selectedId && "active"}
                            >
                                {t.id + 1}
                            </Round>
                        ))}
                    </Left>
                    <Right>
                        <Terminology>THE TERMINOLOGY...</Terminology>
                        <TechName>
                            {technologies[`${selectedId}`].name}
                        </TechName>
                        <Definition>
                            {technologies[`${selectedId}`].definition}
                        </Definition>
                    </Right>
                </DetailSection>
                <ImageSection>
                    <ImageContainer>
                        <Image
                            src={
                                selectedId == "0"
                                    ? vehicle
                                    : selectedId == "1"
                                    ? port
                                    : selectedId == "2"
                                    ? capsule
                                    : ""
                            }
                            alt="space tech"
                        />
                    </ImageContainer>
                </ImageSection>
            </InnerContainer>
        </Container>
    );
}

export default Technology;

const Container = styled.div`
  font-family: Bellefair-Regular;
  background: url(${bg});
  padding 250px 0 150px;
`;
const InnerContainer = styled.div`
    display: flex;
`;
const Title = styled.h4`
    font-family: "BarlowCondensed-Regular";
    font-size: 28px;
    color: #fff;
    padding-left: 100px;
`;
const Num = styled.span`
    display: inline-block;
    margin-right: 20px;
    color: #d0d6f9;
`;
const DetailSection = styled.div`
    width: 70%;
    padding-left: 100px;
    margin-top: 100px;
    display: flex;
`;
const Left = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
`;
const Round = styled.div`
    width: 70px;
    height: 70px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Bellefair-Regular;
    font-size: 28px;
    color: #fff;
    border: 1px solid #fff;
    cursor: pointer;
    &.active {
        background: #fff;
        color: #0b0d17;
    }
`;
const Right = styled.div`
    margin-left: 70px;
`;
const Terminology = styled.span`
    dispaly: block;
    font-family: "BarlowCondensed-Regular";
    font-size: 28px;
    color: #fff;
`;
const TechName = styled.h4`
    font-family: Bellefair-Regular;
    font-size: 70px;
    color: #fff;
    text-transform: uppercase;
    margin-top: 10px;
`;
const Definition = styled.p`
    font-family: "BarlowCondensed-Regular";
    font-size: 22px;
    max-width: 70%;
    color: #fff;
    line-height: 2rem;
    margin-top: 30px;
`;
const ImageSection = styled.div``;
const ImageContainer = styled.div`
    width: 450px;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
