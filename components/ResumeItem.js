import { Flex, Box } from "reflexbox";
import styled from "@emotion/styled";
import { rem } from "polished";

function ResumeItem({ name, role, duration, description }) {
  return (
    <ResumeItemStyled>
      <Flex>
        <div className="name">{name}</div>
        <div className="dash"> - </div>
        <span className="role">{role}</span>
      </Flex>
      <div className="duration">{duration}</div>
      <div className="description">{description}</div>
    </ResumeItemStyled>
  );
}

const ResumeItemStyled = styled.div`
  margin-top: ${rem(10)};
  margin-bottom: ${rem(15)};
  .name {
    font-weight: 600;
  }

  .dash {
    margin: 0 ${rem(5)} 0 ${rem(5)};
  }

  .role {
  }

  .duration {
    font-size: ${rem(16)};
    opacity: 0.7;
  }

  .description {
    opacity: 0.8;
    font-size: ${rem(18)};
  }
  @media only screen and (max-width: 700px) {
    font-size: ${rem(16)};
  }
`;

export default ResumeItem;
