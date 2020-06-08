import styled from "@emotion/styled";
import { rem } from "polished";

const Card = ({ blog }) => {
  return (
    <CardStyled>
      <div className="title">{blog.title}</div>
      <div className="date">{blog.publish_date}</div>
      <div className="description">{blog.description}</div>
      <span className="more">Read More</span>
    </CardStyled>
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
  }
`;

export default Card;
