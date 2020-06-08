import fetch from "isomorphic-unfetch";
import ProjectCard from "components/ProjectCard";
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
import { useRouter } from "next/router";

const Projects = ({ projects, page, numberOfProjects }) => {
  const router = useRouter();

  const lastPage = Math.ceil(numberOfProjects / 3);

  return (
    <Box variant="container">
      {/* <div className=" "> */}
      <ProjectsStyled>
        <h1>Projects</h1>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
        {/* </div> */}
        <Flex justifyContent="space-between">
          {page <= 1 ? null : (
            <button
              onClick={() => router.push(`/projects?page=${page - 1}`)}
              disabled={page <= 1}
            >
              Previous
            </button>
          )}
          {page >= lastPage ? null : (
            <button
              className="next"
              onClick={() => router.push(`/projects?page=${page + 1}`)}
              disabled={page >= lastPage}
            >
              Next
            </button>
          )}
        </Flex>
      </ProjectsStyled>
    </Box>
  );
};

const ProjectsStyled = styled.div`
  .next {
    margin-left: auto;
  }
`;

export async function getServerSideProps({ query: { page = 1 } }) {
  const { API_URL } = process.env;

  const start = +page === 1 ? 0 : (+page - 1) * 3;

  const numberOfProjectsResponse = await fetch(`${API_URL}/projects/count`);

  const numberOfProjects = await numberOfProjectsResponse.json();

  const res = await fetch(`${API_URL}/projects?_limit=3&_start=${start}`);

  const data = await res.json();

  return {
    props: {
      projects: data,
      page: +page,
      numberOfProjects,
    },
  };
}

export default Projects;
