import React, { useState } from "react";
import styled from "styled-components";

const NavBarContainer = styled.nav`
  width: 100%;
  display: flex;
  background-color: rgba(184, 106, 119, 255);
  margin-top: 60px;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
`;

const FirstSection = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  
`;

const SecondSection = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  
`;

export function Page(props) {
  return (
    <NavBarContainer>
      <ul>
        <li>Home</li>
        <li>Lunchit</li>
        <li>SpenditCard</li>
      </ul>
    </NavBarContainer>
    <FirstSection>

    </FirstSection>
    <SecondSection></SecondSection>
  );
}
