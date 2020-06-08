import { Global, css } from "@emotion/core";
import { rem } from "polished";

const GlobalStyles = () => (
  <>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          font-family: "Inter", system-ui, -apple-system, system-ui, "Segoe UI",
            Roboto, "Helvetica Neue", sans-serif;
        }
        @font-face {
          font-family: "Inter";
          src: url("/fonts/Inter-Regular-slnt=0.ttf");
          font-display: swap;
        }
        body {
          font-size: ${rem(20)};
          line-height: ${rem(32)};
        }
        body.light-mode {
          background-color: #f5f5f5;
          color: #212121;
          transition: background-color 0.8s ease;
        }
        body.dark-mode {
          background-color: #212121;
          color: #f5f5f5;
          transition: background-color 0.8s ease;
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
          line-height: ${rem(50)};
          font-weight: 600;
        }
        h2 {
          font-size: ${rem(28)};
          line-height: ${rem(34)};
          font-weight: 600;
        }
        h3 {
          font-size: ${rem(24)};
          line-height: ${rem(30)};
          font-weight: 400;
        }
        span {
          color: #fe346e;
        }
        li {
          :active {
            color: #fe346e;
          }
        }
        .active {
          color: #fe346e;
        }
      `}
    />
  </>
);

export default GlobalStyles;
