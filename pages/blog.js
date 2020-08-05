import Card from "components/Card";
import { Flex, Box } from "reflexbox";
import matter from "gray-matter";

const Blog = (props) => {
  const posts = props.allBlogs;

  return (
    <Box variant="container" flexGrow="1">
      <div className="">
        <h1>Blog</h1>
        {posts.map((blog) => (
          <Card key={blog.slug} blog={blog} />
        ))}
      </div>
      <Flex justifyContent="space-between">
        {/* {page <= 1 ? null : (
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
        )} */}
      </Flex>
    </Box>
  );
};

// export async function getServerSideProps({ query: { page = 1 } }) {
//   const start = +page === 1 ? 0 : (+page - 1) * 5;

//   const numberOfBlogsResponse = await fetch(`${server}/blogs/count`);

//   const numberOfBlogs = await numberOfBlogsResponse.json();

//   const res = await fetch(`${server}/blogs?_limit=3&_start=${start}`);

//   const data = await res.json();

//   return {
//     props: {
//       blogs: data,
//       page: +page,
//       numberOfBlogs,
//     },
//   };
// }

Blog.getInitialProps = async function () {
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
  })(require.context("../posts/blog", true, /\.md$/));
  return {
    allBlogs: posts,
    // ...siteConfig,
  };
};

export default Blog;
