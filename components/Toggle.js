import React from "react";
import useDarkMode from "use-dark-mode";

const Toggle = ({ checked }) => {
  const darkMode = useDarkMode(false);

  return (
    <>
      {checked ? (
        <button type="button" onClick={darkMode.disable}>
          ☀
        </button>
      ) : (
        <button type="button" onClick={darkMode.enable}>
          ☾
        </button>
      )}
    </>
  );
};

export default Toggle;
