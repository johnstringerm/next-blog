import styled from "@emotion/styled";
import { rem } from "polished";
import Link from "next/link";
import { server } from "../config";

const ProjectCard = ({ project }) => {
  return (
    <CardStyled>
      <div className="title">{project.title}</div>
      {project.project_banner && (
        <img
          className="image"
          src={server + project.project_banner.url}
          alt=""
        />
      )}
      <div className="date">{project.publish_date}</div>
      <div className="description">{project.description}</div>
      <Link href="/projects/[slug]" as={`/projects/${project.slug}`}>
        <span className="more">Read More</span>
      </Link>
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
    padding: 0 ${rem(2)} 0 ${rem(2)};
  }
  .date {
    font-size: ${rem(14)};
    line-height: ${rem(20)};
    opacity: 0.7;
  }
  .more {
    font-size: ${rem(18)};
  }
  .image {
    padding: ${rem(2)};
  }
`;

export default ProjectCard;
