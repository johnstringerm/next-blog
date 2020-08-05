import ProjectCard from "components/ProjectCard";
import styled from "@emotion/styled";
import { Flex, Box } from "reflexbox";
import matter from "gray-matter";
import Head from "next/head";

const Projects = (props) => {
  const posts = props.allProjects;

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🏆</text></svg>"
        ></link>
      </Head>
      <Box variant="container" flexGrow="1">
        <ProjectsStyled>
          <h1>Projects</h1>
          {posts.map((post) => (
            <ProjectCard key={post.slug} project={post} />
          ))}
          <Flex justifyContent="space-between">
            {/* {page <= 1 ? null : (
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
          )} */}
          </Flex>
        </ProjectsStyled>
      </Box>
    </>
  );
};

const ProjectsStyled = styled.div`
  .next {
    margin-left: auto;
  }
`;

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const start = +page === 1 ? 0 : (+page - 1) * 3;

//   const numberOfProjectsResponse = await fetch(`${server}/projects/count`);

//   const numberOfProjects = await numberOfProjectsResponse.json();

//   const res = await fetch(`${server}/projects?_limit=3&_start=${start}`);

//   const data = await res.json();

//   return {
//     props: {
//       projects: data,
//       page: +page,
//       numberOfProjects,
//     },
//   };
// }

Projects.getInitialProps = async function () {
  // const siteConfig = await import(`../data/config.json`)
  // get all .md files from the src/posts dir
  const posts = ((context) => {
    // grab all the files matching this context
    const keys = context.keys();
    // grab the values from these files
    const values = keys.map(context);
    // go through each file
    const data = keys.map((key, index) => {
      // Create slug from filename
      const slug = key
        .replace(/^.*[\\\/]/, "")
        .split(".")
        .slice(0, -1)
        .join(".");
      // get the current file value
      const value = values[index];
      // Parse frontmatter & markdownbody for the current file
      const document = matter(value.default);
      // return the .md content & pretty slug
      return {
        document,
        slug,
      };
    });
    // return all the posts
    return data;
  })(require.context("../posts/projects", true, /\.md$/));
  return {
    allProjects: posts,
    // ...siteConfig,
  };
};

export default Projects;
