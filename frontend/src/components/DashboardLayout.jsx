import React from "react";
import Grid from "@material-ui/core/Grid";
import SideBar from "../components/SideBar";
import ProfileBar from "../components/ProfileBar";
import "./statics/css/dashboardLayout.css";

const DashboardLayout = ({ children }) => {
  return (
    <Grid container direction="row" className="dashboardLayout_mainRoot">
      <Grid xs={1} item className="dashboardLayout_sideBar">
        <SideBar />
      </Grid>
      <Grid xs={8} item className="dashboardLayout_mainArea">
        {children}
      </Grid>
      <Grid xs={3} item className="dashboardLayout_profileBar">
        <ProfileBar />
      </Grid>
    </Grid>
  );
};

export default DashboardLayout;
