import { Global, css } from "@emotion/core";
import { rem } from "polished";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          font-family: inter, system-ui, -apple-system, system-ui, "Segoe UI",
            Roboto, "Helvetica Neue", sans-serif;
        }
        body {
          font-size: ${rem(20)};
        }
        body.light-mode {
          background-color: #f5f5f5;
          color: #212121;
          transition: background-color 0.3s ease;
        }
        body.dark-mode {
          background-color: #212121;
          color: #f5f5f5;
        }
        .container {
          max-width: 780px;
          width: 100%;
          margin: 0 auto;
          padding: 30px;
        }
        a {
          :hover {
            color: #fe346e;
            transition: color 0.3s ease;
          }
        }
        h1 {
          font-size: ${rem(40)};
          font-weight: 600;
        }
      `}
    />
  </>
);

export default GlobalStyles;
