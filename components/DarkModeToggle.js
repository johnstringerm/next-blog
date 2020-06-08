import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "@emotion/styled";

import Toggle from "./Toggle";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <DivStyled>
      <Toggle checked={darkMode.value} />
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  float: right;
`;

export default DarkModeToggle;
