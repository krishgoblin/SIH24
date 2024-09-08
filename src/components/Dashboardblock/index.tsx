import React from "react";
import { Row, Col, Card, Progress, Calendar } from "antd";
import { withTranslation, TFunction } from "react-i18next";
import { Slide } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import {
  DashboardSection,
  Content,
  ContentWrapper,
  Dashboard,
  ProjectCard,
  ProjectsWrapper,
  JobCardWrapper,  // New styled component for job cards
  JobCard  // Import the new JobCard component
} from "./styles";

interface DashboardProps {
  title: string;
  content: string;
  button: string;
  t: TFunction;
}

const Dashboardblock: React.FC<DashboardProps> = ({ title, content, button, t }) => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id) as HTMLDivElement;
    element.scrollIntoView({ behavior: "smooth" });
  };

  const renderRecentProjects = () => {
    const projects = [
      { title: "Full Stack e-commerce", progress: 20 },
      { title: "Cpp dev", progress: 75 },
      { title: "Tutions", progress: 40 },
    ];

    return projects.map((project, index) => (
      <ProjectCard key={index} title={project.title}>
        {/* <p className="project-title">{project.title}</p>  Added class for left alignment */}
        <Progress percent={project.progress} />
      </ProjectCard>
    ));
  };

  const renderJobCards = () => {
    const jobs = [
      { title: "Freelance Web Development", description: "Find gigs on various platforms" },
      { title: "Part-time Graphic Design", description: "Work on short-term design projects" },
      { title: "Remote Content Writing", description: "Opportunities for writers and bloggers" },
    ];

    return jobs.map((job, index) => (
      <JobCard key={index} title={job.title}>
        <p>{job.description}</p>
      </JobCard>
    ));
  };

  return (
    <DashboardSection>
      <Slide direction="up" triggerOnce>
        <Row gutter={16}>
          <Col lg={8} md={8} sm={24} xs={24}>
            <Dashboard>
              <h6>{t("Makers Board")}</h6>
              <Calendar fullscreen={false} />
            </Dashboard>
          </Col>
          <Col lg={15} md={16} sm={24} xs={24}>
            <ContentWrapper>
              <h6>{t("Ongoing Projects")}</h6>
              <ProjectsWrapper>{renderRecentProjects()}</ProjectsWrapper>
              <JobCardWrapper>{renderJobCards()}</JobCardWrapper>  {/* Rendering Job Cards */}
            </ContentWrapper>
          </Col>
        </Row>
      </Slide>
    </DashboardSection>
  );
};

export default withTranslation()(Dashboardblock);
