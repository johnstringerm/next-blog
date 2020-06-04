import styled from "@emotion/styled";
import { rem } from "polished";

const Footer = ({ isDark }) => {
  return (
    <FooterStyled isDark={isDark}>
      <div className="container">
        <ul className="menu">
          <li className="menu">
            <a href="https://www.linkedin.com/in/johnstringerm/">LinkedIn</a>
          </li>
          <li className="menu">
            <a href="https://github.com/jhnstrngr">GitHub</a>
          </li>
        </ul>
      </div>
    </FooterStyled>
  );
};

const FooterStyled = styled.footer`
  padding: 20px;
  font-size: ${rem(18)};
  .menu {
    display: inline;
    margin-right: ${rem(25)};
  }
`;

export default Footer;
