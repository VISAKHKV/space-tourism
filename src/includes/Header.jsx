import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/images/shared/logo.svg";

function Header() {
    console.log("in header");
    return (
        <Div>
            <Container>
                <Left>
                    <LogoContainer>
                        <Logo src={logo} alt="Logo" />
                    </LogoContainer>
                </Left>
                <Right>
                    <Menu>
                        <MenuItems
                            to="/"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            <Num>00</Num>HOME
                        </MenuItems>
                        <MenuItems
                            to="/destination"
                            className={({ isActive }) =>
                                isActive ? "active" : ""
                            }
                        >
                            <Num>01</Num>DESTINATION
                        </MenuItems>
                        <MenuItems to="/crew">
                            <Num>02</Num>CREW
                        </MenuItems>
                        <MenuItems to="/technology">
                            <Num>03</Num>TECHNOLOGY
                        </MenuItems>
                    </Menu>
                </Right>
            </Container>
            <Outlet />
        </Div>
    );
}

export default Header;
const Div = styled.div``;

const Container = styled.div`
    position: fixed;
    width: 100%;
    height: 100px;
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "BarlowCondensed-Regular";
`;
const Left = styled.div``;
const LogoContainer = styled.div`
    margin-left: 50px;
`;
const Logo = styled.img``;
const Right = styled.div`
    height: inherit;
    width: 60%;
    background: #dfd0d024;
    color: #fff;
    backdrop-filter: blur(10px);
`;
const Menu = styled.ul`
    height: inherit;
    padding-left: 100px;
    display: flex;
    align-items: center;
    position: relative;
    &::after {
        content: "";
        height: 1px;
        background: #ffffff6e;
        width: 45%;
        position: absolute;
        left: -40%;
    }
`;
const MenuItems = styled(NavLink)`
    font-size: 26px;
    margin-right: 40px;
    cursor: pointer;
    position: relative;
    color: #fff;
    &::after {
        content: "";
        width: 0px;
        height: 2px;
        background: #fff;
        position: absolute;
        bottom: -33px;
        left: 0;
    }
    &:hover:after {
        width: 100%;
        transition: 500ms;
        transform-origin: center;
    }
    &.active:after {
        width: 100%;
        height: 3px;
    }
`;
const Num = styled.span`
    display: inline-block;
    font-weight: 800;
    margin-right: 10px;
`;
