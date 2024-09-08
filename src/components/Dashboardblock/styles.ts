import styled from "styled-components";
import { Card } from "antd";

export const DashboardSection = styled.section`
  position: relative;
  padding: 7.5rem 0 3rem;
  display: flex;
  justify-content: space-between; /* Align items to the edges */
  align-items: flex-start; /* Align items to the start vertically */
  gap: 2rem; /* Space between the Dashboard and ProjectsWrapper */
  text-align: center;

  @media screen and (max-width: 1024px) {
    padding: 5.5rem 0 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 4rem 0 2rem;
    flex-direction: column; /* Stack vertically on smaller screens */
    gap: 1rem; /* Reduced gap for stacking */
  }
`;

export const Content = styled.p`
  padding: 0.75rem 0;
  margin: 0;
`;

export const ContentWrapper = styled.div`
  max-width: 640px;
  text-align: center;
  margin: 0 auto;
  padding: 0 1rem;

  @media only screen and (max-width: 768px) {
    max-width: 100%;
    padding: 0 0.5rem;
  }
`;

export const Dashboard = styled.div`
  padding: 1rem;
  background-color: #f0f2f5;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  text-align: left;
  flex: 1; /* Allow to grow and fill available space */

  @media only screen and (max-width: 1024px) {
    margin-bottom: 1.5rem;
  }

  @media only screen and (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const ProjectsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 0;

  @media only screen and (max-width: 768px) {
    gap: 0.5rem;
    padding: 0.5rem 0;
  }

  .project-title {
    text-align: left;
    font-weight: bold;
  }
`;

export const ProjectCard = styled(Card)`
  .ant-card-body {
    padding: 0.5rem 1rem;
  }

  p {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  @media only screen and (max-width: 768px) {
    p {
      font-size: 0.875rem;
    }
  }
`;

export const JobCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
  }
`;

export const JobCard = styled(Card)`
  width: 200px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;

  .ant-card-body {
    padding: 1rem;
  }
`;
