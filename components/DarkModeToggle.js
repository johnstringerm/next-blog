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
  margin-left: 100%;
  display: flex;
  width: 100%;
`;

export default DarkModeToggle;
