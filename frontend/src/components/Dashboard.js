import React from "react";
import LiDARView from "./LiDARView";
import RobotControls from "./RobotControls";
import Alerts from "./Alerts";
import "../styles/Dashboard.css"; // Import styles

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>DOBOT MG400 Control Dashboard</h1>
      <div className="dashboard-sections">
        <div className="lidar-section">
          <LiDARView />
        </div>
        <div className="controls-section">
          <RobotControls />
          <Alerts />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;