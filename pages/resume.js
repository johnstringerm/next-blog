import { Flex, Box } from "reflexbox";
import styled from "@emotion/styled";
import ResumeItem from "components/ResumeItem";
import { rem } from "polished";
import Head from "next/head";

const Resume = () => {
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
            <ResumeItem
              name="The Range"
              role="Junior Software Developer"
              duration="October 2020 - Present"
              description="After graduating university, I've started working at The Range - a multi-channel retailer as a Junior Software Developer working on internal applications."
            />
            <ResumeItem
              name="Formell Ltd."
              role="Junior Developer"
              duration="September 2016 - June 2017"
              description="During my A Levels I worked part time for a business software solutions company in Roborough."
            />

            <div className="title">Education</div>
            <ResumeItem
              name="University of Plymouth"
              role="Internet Design"
              duration="September 2017- May 2020"
              description="A course centered around designing web based applications such as websites and mobile applications from design to programming."
            />
            <ResumeItem
              name="Ivybridge Community College"
              role="A Levels & GCSEs"
              duration="September 2011 - June 2016"
              description="I studied ICT, Computing and Spanish during my A Level studies."
            />

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
