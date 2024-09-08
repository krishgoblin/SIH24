import { lazy } from "react";
import DashboardContent from "../../content/DashboardContent.json";
import React from "react";

const Dashboardblock = lazy(() => import("../../components/Dashboardblock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));

const Dashboard_Makers = () => {
  return (
    <Container>
      <ScrollToTop />
      <Dashboardblock
        title={DashboardContent.title}
        content={DashboardContent.text}
        button={DashboardContent.button}
      />
    </Container>
  );
};

export default Dashboard_Makers;
