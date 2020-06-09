import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import { rem } from "polished";
import styled from "@emotion/styled";
const ReactMarkdown = require("react-markdown");
import Moment from "react-moment";
import { server } from "../../config";

const Project = ({ project }) => {
  return (
    <Box variant="container" flexGrow="1">
      <ProjectStyled>
        <h1>{project.title}</h1>
        <Moment className="date" format="Do MMM YYYY">
          {project.publish_date}
        </Moment>
        {/* {project.project_banner && (
          <img
            className="image"
            src={server + project.project_banner.url}
            alt=""
          />
        )} */}
        <div className="description">{project.description}</div>
        <ReactMarkdown source={project.text_content} />
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

export async function getServerSideProps(context) {
  const { slug } = context.query;

  const res = await fetch(`${server}/projects?slug=${slug}`);

  const data = await res.json();
  return {
    props: {
      project: data[0],
    },
  };
}

export default Project;
