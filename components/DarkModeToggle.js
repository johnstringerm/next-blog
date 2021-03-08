import React from "react";
import styled from "@emotion/styled";

import Toggle from "./Toggle";

const DarkModeToggle = () => {
  return (
    <DivStyled>
      <Toggle />
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  float: right;
`;

export default DarkModeToggle;
