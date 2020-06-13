import styled from "@emotion/styled";
import { rem } from "polished";
import { Flex, Box } from "reflexbox";
import Link from "next/link";
import Moment from "react-moment";

const Card = ({ blog }) => {
  console.log(blog);
  return (
    <Link href="/blog/[slug]" as={`/blog/${blog.slug}`}>
      <CardStyled>
        <div className="title">{blog.title}</div>
        <Moment className="date" format="Do MMM YYYY">
          {blog.publish_date}
        </Moment>
        <div className="description">{blog.description}</div>
        <Flex justifyContent="space-between">
          <span className="more">Read More</span>
          <div className="type">{blog.blog_types.type}</div>
        </Flex>
      </CardStyled>
    </Link>
  );
};

const CardStyled = styled.div`
  display: block;
  margin: ${rem(16)} 0 ${rem(16)} 0;
  padding: ${rem(10)};
  background-color: rgba(181, 181, 181, 0.4);
  border-radius: ${rem(4)};
  :hover {
    background-color: rgba(181, 181, 181, 0.6);
    transition: background-color 0.5s ease;
    cursor: pointer;
  }
  .title {
    font-weight: 600;
  }
  .date {
    font-size: ${rem(14)};
    line-height: ${rem(20)};
    opacity: 0.7;
  }
  .more {
    font-size: ${rem(18)};
    font-weight: 600;
  }
  .type {
    background-color: rgba(181, 181, 181, 1);
    color: #212121;
    width: 100%;
    max-width: ${rem(110)};
    text-align: center;
    vertical-align: middle;
    border-radius: 20px;
    font-size: ${rem(16)};
    opacity: 0.85;
  }
`;

export default Card;
