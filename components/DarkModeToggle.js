import React from "react";
import useDarkMode from "use-dark-mode";
import styled from "@emotion/styled";

import Toggle from "./Toggle";

const DarkModeToggle = () => {
  const darkMode = useDarkMode(false);

  return (
    <DivStyled>
      <button type="button" onClick={darkMode.disable}>
        ☀
      </button>
      {/* <Toggle checked={darkMode.value} onChange={darkMode.toggle} /> */}
      <button type="button" onClick={darkMode.enable}>
        ☾
      </button>
    </DivStyled>
  );
};

const DivStyled = styled.div`
  display: flex;
  float: right;
`;

export default DarkModeToggle;
