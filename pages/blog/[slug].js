import fetch from "isomorphic-unfetch";
import { Box } from "reflexbox";
import { rem } from "polished";
import styled from "@emotion/styled";
import Moment from "react-moment";
import { NotionRenderer } from "react-notion";
import { getBlogs } from "../blog";

const Blogs = ({ post, blocks }) => {
  return (
    <Box variant="container" flexGrow="1">
      <ProjectStyled>
        <h1>{post.page}</h1>
        <Moment className="date" format="Do MMM YYYY">
          {post.date}
        </Moment>
        <div className="description">{post.preview}</div>
        <NotionRenderer blockMap={blocks} />
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

export async function getStaticProps({ params: { slug } }) {
  // Get all posts again
  const posts = await getBlogs();
  // Find the current blogpost by slug
  const post = posts.find((t) => t.slug === slug);
  const blocks = await fetch(
    `https://notion-api.splitbee.io/v1/page/${post.id}`
  ).then((res) => res.json());

  if (!posts) {
    return {
      notFound: true,
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      blocks,
      post,
    },
  };
}

export async function getStaticPaths() {
  const blogs = await getBlogs();

  const paths = blogs.map((blog) => ({
    params: { slug: blog.slug },
  }));

  return {
    paths,
    fallback: false,
  };
}

export default Blogs;
