import styled from "@emotion/styled";
import { rem } from "polished";
import DarkModeToggle from "components/DarkModeToggle";
import { useRouter } from "next/router";
import Link from "components/Link";

const Header = ({ isDark }) => {
  const router = useRouter();
  return (
    <HeaderStyled isDark={isDark}>
      <a className="name">John Stringer</a>

      <div className="parent">
        <div className="container">
          <ul className="menu">
            <li className="menu">
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
            <DarkModeToggle />
          </ul>
        </div>
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
`;

export default Header;
