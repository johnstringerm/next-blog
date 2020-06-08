import fetch from "isomorphic-unfetch";
import Card from "components/card";

const Blog = ({ blogs }) => {
  return (
    <div className="container flex-grow">
      <div className="">
        <h1>Blog</h1>
        {blogs.map((blog) => (
          <Card key={blog.id} blog={blog} />
        ))}
      </div>
      <style jsx>{`
    
            }
          `}</style>
    </div>
  );
};

export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/blogs`);

  const data = await res.json();

  return {
    props: {
      blogs: data,
    },
  };
}

export default Blog;
