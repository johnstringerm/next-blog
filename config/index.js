const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://strapi-blog-john.herokuapp.com"
  : "https://strapi-blog-john.herokuapp.com";
