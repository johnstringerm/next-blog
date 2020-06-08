import styled from "@emotion/styled";
import { rem } from "polished";
import DarkModeToggle from "components/DarkModeToggle";
import Link from "components/Link";
import { Flex, Box } from "reflexbox";

const Header = () => {
  return (
    <HeaderStyled>
      <a className="name">John Stringer</a>

      <div className="parent">
        <Box variant="container">
          <ul className="menu">
            <li className="">
              <Link activeClassName="active" href="/">
                <a>About</a>
              </Link>
            </li>
            <li className="menu">
              <Link activeClassName="active" href="/resume">
                <a>Resume</a>
              </Link>
            </li>
            <li className="menu">
              <Link activeClassName="active" href="/projects">
                <a>Projects</a>
              </Link>
            </li>
            <li className="menu">
              <Link activeClassName="active" href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <div className="toggle">
              <DarkModeToggle />
            </div>
          </ul>
        </Box>
      </div>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  ul {
    display: flex;
    justify-content: space-between;

    li {
      display: inline;
      font-size: ${rem(20)};
    }
  }

  .toggle {
    width: 30%;
  }

  .name {
    font-size: ${rem(22)};
    font-weight: 600;
    position: absolute;
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
  @media only screen and (max-width: 1200px) {
    .name {
      display: none;
    }

    .menu-container {
      max-width: 780px;
      width: 100%;
      margin: 0 auto;
      padding: 30px;
    }

    .nav {
      display: grid;
      grid-template-rows: minmax(min-content, 100px) min-content;
    }

    .content {
      display: grid;
      place-items: center;
      grid-auto-flow: column;
      align-content: space-evenly;
    }

    .links {
      display: grid;
      grid-gap: 15px;
      grid-auto-flow: column;
    }
  }

  @media only screen and (max-width: 700px) {
    a {
      font-size: ${rem(16)};
    }
  }
`;

export default Header;
