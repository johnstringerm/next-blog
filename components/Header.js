import styled from "@emotion/styled";
import { rem } from "polished";
import DarkModeToggle from "components/DarkModeToggle";

const Header = ({ isDark }) => {
  return (
    <HeaderStyled isDark={isDark}>
      <div className="parent">
        <a className="name">John Stringer</a>

        <div className="menu-container">
          <ul className="menu">
            <li className="menu">
              <a href="/">About</a>
            </li>
            <li className="menu">
              <a href="/resume">Resume</a>
            </li>
            <li className="menu">
              <a href="/projects">Projects</a>
            </li>
            <li className="menu">
              <a href="/blog">Blog</a>
            </li>
          </ul>
        </div>
        <DarkModeToggle />
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  padding: 20px;

  .menu {
    display: inline;
    margin-right: ${rem(25)};
    font-size: ${rem(20)};
  }

  .name {
    font-size: ${rem(22)};
    font-weight: 600;
    display: inline;
    padding: 30px 0 0 30px;
    margin-left: 30px;
  }

  .parent {
    display: flex;
  }

  .menu-container {
    max-width: 940px;
    width: 100%;
    margin: 0 auto;
    padding: 30px;
  }
`;

export default Header;
