import React, { useState } from "react";
import styled from "styled-components";
import { getData } from "../Data";

import bg from "../assets/images/crew/background-crew-desktop.jpg";
import commander from "../assets/images/crew/image-douglas-hurley.png";
import pilot from "../assets/images/crew/image-victor-glover.png";
import engineer from "../assets/images/crew/image-anousheh-ansari.png";
import specialist from "../assets/images/crew/image-mark-shuttleworth.png";

function Crew() {
    const data = getData();
    const crew = data[1];
    const [selectedId, setSelectedId] = useState("0");
    const selection = (i) => {
        setSelectedId(i.id);
    };
    console.log(selectedId);
    return (
        <Container>
            <InnerContainer>
                <Left>
                    <Title>
                        <Num>02</Num>MEET YOUR CREW
                    </Title>
                    <Designation>
                        {crew[`${selectedId}`].designation}
                    </Designation>
                    <Name>{crew[`${selectedId}`].name}</Name>
                    <Details>{crew[`${selectedId}`].details}</Details>
                    <DotList>
                        {crew.map((i) => (
                            <Dot
                                onClick={() => selection(i)}
                                key={i.id}
                                className={i.id == selectedId && "active"}
                            ></Dot>
                        ))}
                    </DotList>
                </Left>
                <Right>
                    <ImageContainer>
                        <Image
                            src={
                                selectedId == "0"
                                    ? commander
                                    : selectedId == "1"
                                    ? specialist
                                    : selectedId == "2"
                                    ? pilot
                                    : selectedId == "3"
                                    ? engineer
                                    : ""
                            }
                            alt="crew"
                        />
                    </ImageContainer>
                </Right>
            </InnerContainer>
        </Container>
    );
}

export default Crew;

const Container = styled.div`
    font-family: Bellefair-Regular;
    background: url(${bg});
    padding 250px 0 10px;
`;
const Title = styled.h4`
    font-family: "BarlowCondensed-Regular";
    font-size: 28px;
    color: #fff;
`;
const Num = styled.span`
    display: inline-block;
    margin-right: 20px;
    color: #d0d6f9;
`;
const InnerContainer = styled.div`
    padding: 0 10%;
    display: flex;
    padding-top: 50px;
`;
const Left = styled.div`
    width: 50%;
`;
const Designation = styled.h6`
    padding-top: 90px;
    text-transform: uppercase;
    font-family: Bellefair-Regular;
    font-size: 34px;
    color: #d0d6f9;
`;
const Name = styled.span`
    display: block;
    text-transform: uppercase;
    font-family: Bellefair-Regular;
    font-size: 58px;
    margin-top: 40px;
    color: #fff;
`;
const Details = styled.p`
    margin-top: 30px;
    font-family: "BarlowCondensed-Regular";
    font-size: 22px;
    height: 150px;
    color: #fff;
    line-height: 2rem;
`;
const DotList = styled.ul`
    margin-top: 50px;
    display: flex;
`;
const Dot = styled.li`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #d0d6f97a;
    cursor: pointer;
    margin-right: 15px;
    &:hover {
        background: #d0d6f9;
    }
    &.active {
        background: #fff;
    }
`;
const Right = styled.div`
    width: 50%;
    position: relative;
    // padding-left: 100px;
`;
const ImageContainer = styled.div`
    width: 400px;
    position: absolute;
    bottom: 0;
    right: 0;
`;
const Image = styled.img`
    width: 100%;
    display: block;
`;
