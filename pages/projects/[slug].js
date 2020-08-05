import { Flex, Box } from "reflexbox";
import { rem } from "polished";
import styled from "@emotion/styled";
const ReactMarkdown = require("react-markdown");
import Moment from "react-moment";
import matter from "gray-matter";

const Project = (props) => {
  const markdownBody = props.content;
  const frontmatter = props.data;
  return (
    <Box variant="container" flexGrow="1">
      <ProjectStyled>
        <h1>{frontmatter.title}</h1>
        <Moment className="date" format="Do MMM YYYY">
          {frontmatter.updatedAt}
        </Moment>
        <div className="description">{frontmatter.description}</div>
        <ReactMarkdown source={markdownBody} />
      </ProjectStyled>
    </Box>
  );
};

const ProjectStyled = styled.div`
  .image {
    padding: ${rem(2)};
  }
  .date {
    font-size: ${rem(14)};
    line-height: ${rem(20)};
    opacity: 0.7;
    padding: ${rem(4)} 0 ${rem(4)} 0;
  }
  .description {
    font-size: ${rem(18)};
    opacity: 0.9;
    margin: ${rem(10)} 0 ${rem(10)} 0;
    background-color: rgba(181, 181, 181, 0.4);
    padding: ${rem(6)};
    border-radius: ${rem(4)};
  }
`;

Project.getInitialProps = async function (context) {
  const { slug } = context.query;
  // grab the file in the posts dir based on the slug
  const content = await import(`../../posts/projects/${slug}.md`);
  // also grab the config file so we can pass down siteTitle
  // const config = await import(`../../data/config.json`);
  //gray-matter parses the yaml frontmatter from the md body
  const data = matter(content.default);
  return {
    ...data,
  };
};

export default Project;
