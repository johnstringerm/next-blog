import styled from "@emotion/styled";
import { rem } from "polished";
import Link from "next/link";
import Moment from "react-moment";

const ProjectCard = ({ project }) => {
  return (
    <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
      <CardStyled>
        <div className="title">{project.document.data.title}</div>
        <img className="image" src={project.document.data.hero_image} alt="" />
        <Moment className="date" format="Do MMM YYYY">
          {project.document.data.updatedAt}
        </Moment>
        <div className="description">{project.document.data.description}</div>
        <span className="more">Read More</span>
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
    padding: 0 ${rem(2)} 0 ${rem(2)};
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
  .image {
    padding: ${rem(2)};
  }
`;

export default ProjectCard;
