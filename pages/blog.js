import fetch from "isomorphic-unfetch";
import Card from "components/Card";
import { Flex, Box } from "reflexbox";
import { useRouter } from "next/router";
import { server } from "../config";

const Blog = ({ blogs, page, numberOfBlogs }) => {
  const router = useRouter();

  const lastPage = Math.ceil(numberOfBlogs / 3);

  return (
    <Box variant="container">
      {/* <div className="container flex-grow"> */}
      <div className="">
        <h1>Blog</h1>
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
      <Flex justifyContent="space-between">
        {page <= 1 ? null : (
          <button
            onClick={() => router.push(`/blog?page=${page - 1}`)}
            disabled={page <= 1}
          >
            Previous
          </button>
        )}
        {page >= lastPage ? null : (
          <button
            className="next"
            onClick={() => router.push(`/blog?page=${page + 1}`)}
            disabled={page >= lastPage}
          >
            Next
          </button>
        )}
      </Flex>
      {/* </div> */}
    </Box>
  );
};

export async function getServerSideProps({ query: { page = 1 } }) {
  // const res = await fetch(`${server}/blogs`);

  // const data = await res.json();

  // return {
  //   props: {
  //     blogs: data,
  //   },
  // };
  const start = +page === 1 ? 0 : (+page - 1) * 5;

  const numberOfBlogsResponse = await fetch(`${server}/blogs/count`);

  const numberOfBlogs = await numberOfBlogsResponse.json();

  const res = await fetch(`${server}/blogs?_limit=3&_start=${start}`);

  const data = await res.json();

  return {
    props: {
      blogs: data,
      page: +page,
      numberOfBlogs,
    },
  };
}

export default Blog;
