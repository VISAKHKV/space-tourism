import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../includes/Header";
import Homepage from "./Homepage";
import Destination from "./Destination";
import Crew from "./Crew";
import Technology from "./Technology";

export default function MainRouter() {
    console.log("in main route");
    return (
        <Routes>
            <Route path="/" element={<Header />}>
                <Route path="/" element={<Homepage />} />
                <Route path="/destination" element={<Destination />} />
                <Route path="/crew" element={<Crew />} />
                <Route path="/technology" element={<Technology />} />
            </Route>
        </Routes>
    );
}

const Container = styled.div``;
