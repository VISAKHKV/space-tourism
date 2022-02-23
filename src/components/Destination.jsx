import React, { useState } from "react";
import styled from "styled-components";
import { getData } from "../Data";

import bg from "../assets/images/destination/background-destination-desktop.jpg";
import moon from "../assets/images/destination/image-moon.png";
import mars from "../assets/images/destination/image-mars.png";
import europa from "../assets/images/destination/image-europa.png";
import titan from "../assets/images/destination/image-titan.png";

function Destination() {
    const data = getData();
    const destinations = data[0];
    const [selectedId, setSelectedId] = useState("0");
    const selection = (d) => {
        setSelectedId(d.id);
    };
    console.log("id : ", selectedId);
    return (
        <Container>
            <Title>
                <Num>01</Num>PICK YOUR DESTINATION
            </Title>
            <InnerContainer>
                <Left>
                    <ImageContainer>
                        <Image
                            src={
                                selectedId == "0"
                                    ? moon
                                    : selectedId == "1"
                                    ? mars
                                    : selectedId == "2"
                                    ? europa
                                    : selectedId == "3"
                                    ? titan
                                    : null
                            }
                            alt="destinations"
                        />
                    </ImageContainer>
                </Left>
                <Right>
                    <Destinations>
                        {destinations.map((d) => (
                            <DestinationNames
                                onClick={() => selection(d)}
                                key={d.id}
                                className={d.id == selectedId && "active"}
                            >
                                {d.name}
                            </DestinationNames>
                        ))}
                    </Destinations>
                    <DestinationTitle>
                        {destinations[`${selectedId}`].name}
                    </DestinationTitle>
                    <Description>
                        {destinations[`${selectedId}`].description}
                    </Description>
                    <Informations>
                        <InfoContainer>
                            <Heading>AVG. DISTANCE</Heading>
                            <Matter>
                                {destinations[`${selectedId}`].distance}
                            </Matter>
                        </InfoContainer>
                        <InfoContainer>
                            <Heading>EST. TRAVEL TIME</Heading>
                            <Matter>
                                {destinations[`${selectedId}`].time}
                            </Matter>
                        </InfoContainer>
                    </Informations>
                </Right>
            </InnerContainer>
        </Container>
    );
}

export default Destination;

const Container = styled.div`
  font-family: Bellefair-Regular;
  background: url(${bg});
  padding 250px 0 70px;
`;
const InnerContainer = styled.div`
    padding: 0 10%;
    display: flex;
    padding-top: 50px;
`;
const Left = styled.div`
    width: 50%;
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
const Right = styled.div`
    width: 50%;
    padding-left: 100px;
`;
const ImageContainer = styled.div`
    margin-left: 50px;
    width: 450px;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
const Destinations = styled.ul`
    display: flex;
    align-items: center;
`;
const DestinationNames = styled.li`
    font-family: "BarlowCondensed-Regular";
    font-size: 28px;
    color: #d0d6f9;
    margin-right: 30px;
    cursor: pointer;
    text-transform: uppercase;
    &:last-child {
        margin-right: 0px;
    }
    position: relative;
    &::after {
        content: "";
        width: 0px;
        height: 2px;
        background: #d0d6f97a;
        position: absolute;
        bottom: -10px;
        left: 0;
    }
    &:hover:after {
        width: 100%;
        transition: 500ms;
        transform-origin: center;
    }
    &.active:after {
        width: 100%;
        background: #fff;
    }
`;
const DestinationTitle = styled.h5`
    margin-top: 40px;
    font-size: 120px;
    text-transform: uppercase;
    font-family: Bellefair-Regular;
    color: #fff;
`;
const Description = styled.p`
    font-family: "BarlowCondensed-Regular";
    font-size: 22px;
    height: 150px;
    color: #fff;
    line-height: 2rem;
    padding-bottom: 50px;
    border-bottom: 1px solid #d0d6f9;
`;
const Informations = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 40px;
`;
const InfoContainer = styled.div``;
const Heading = styled.span`
    display: block;
    font-family: "BarlowCondensed-Regular";
    font-size: 18px;
    color: #d0d6f9;
    margin-bottom: 10px;
`;
const Matter = styled.span`
    display: block;
    font-family: Bellefair-Regular;
    font-size: 26px;
    color: #fff;
    text-transform: uppercase;
`;
