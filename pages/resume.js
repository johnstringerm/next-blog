import { useState, useEffect } from "react";
import { Flex, Box } from "reflexbox";
import styled from "@emotion/styled";
import ResumeItem from "components/ResumeItem";
import { rem } from "polished";
import Head from "next/head";

export const getExperience = async () => {
  return await fetch(
    "https://notion-api.splitbee.io/v1/table/b845e8ee1843447ca61df7d9b1ae5ce5?v=d00d1e657ba84e438a160d2d8caf8805"
  ).then((res) => res.json());
};

export async function getStaticProps() {
  const experience = await getExperience();

  return {
    props: {
      experience,
    },
  };
}

const Resume = ({ experience }) => {
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>📝</text></svg>"
        ></link>
      </Head>
      <Box variant="container" flexGrow="1">
        <div className="about-container">
          <h1>Resume</h1>
          <ResumeStyled>
            <div className="title">Experience</div>
            {experience
              .filter((item) => item.type.includes(1))
              .map((item) => (
                <ResumeItem
                  name={item.title}
                  role={item.role}
                  duration={`${item.dateFrom} - ${item.dateTo}`}
                  description={item.body}
                  key={item.id}
                />
              ))}

            <div className="title">Education</div>
            {experience
              .filter((item) => item.type.includes(2))
              .map((item) => (
                <ResumeItem
                  name={item.title}
                  role={item.role}
                  duration={`${item.dateFrom} - ${item.dateTo}`}
                  description={item.body}
                />
              ))}

            <div className="title">Skills</div>
            <div className="text-content">
              JavaScript • React • React Native • Git • T-SQL • MySQL •
              Microsoft SQL Server • C# • ASP.NET • Photoshop • Illustrator •
              After Effects • Figma • HTML • CSS
            </div>
            <div className="title">Languages</div>
            <div className="text-content">
              I can speak fluent English and Spanish, originally growing up in
              Spain and relocating to the UK as child.
            </div>
          </ResumeStyled>
        </div>
      </Box>
    </>
  );
};

const ResumeStyled = styled.div`
  .title {
    font-size: ${rem(24)};
    font-weight: 600;
    padding-top: ${rem(20)};
  }
  .text-content {
    margin-top: ${rem(10)};
    opacity: 0.9;
    font-size: ${rem(18)};
    @media only screen and (max-width: 700px) {
      font-size: ${rem(16)};
    }
  }
`;

export default Resume;
