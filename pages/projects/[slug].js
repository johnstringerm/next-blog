import fetch from "isomorphic-unfetch";
import { Flex, Box } from "reflexbox";
import { rem } from "polished";
import styled from "@emotion/styled";

const Project = ({ project }) => {
  const { API_URL } = process.env;

  return (
    <Box variant="container">
      <ProjectStyled>
        <h1>{project.title}</h1>
        <div className="date">{project.publish_date}</div>
        {project.project_banner && (
          <img
            className="image"
            src={API_URL + project.project_banner.url}
            alt=""
          />
        )}
        <div className="description">{project.description}</div>
        <p dangerouslySetInnerHTML={{ __html: project.text_content }}></p>
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
  const { API_URL } = process.env;

  const { slug } = context.query;

  const res = await fetch(`${API_URL}/projects?slug=${slug}`);

  const data = await res.json();
  return {
    props: {
      project: data[0],
    },
  };
}

export default Project;
