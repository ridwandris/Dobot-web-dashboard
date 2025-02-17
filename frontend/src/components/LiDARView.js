import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import "../styles/LiDARView.css"; // Import styles

const socket = io("http://localhost:5000");

const LiDARView = () => {
  const [lidarData, setLidarData] = useState([]);

  useEffect(() => {
    socket.emit("request_lidar");
    socket.on("lidar_update", (data) => setLidarData(data));

    return () => socket.off("lidar_update");
  }, []);

  return (
    <div className="lidar-container">
      <h2>LiDAR Visualization</h2>
      <svg width="400" height="400" style={{ background: "#ddd" }}>
        {lidarData.map((point, index) => (
          <circle
            key={index}
            cx={200 + (point.distance / 20) * Math.cos(point.angle * (Math.PI / 180))}
            cy={200 + (point.distance / 20) * Math.sin(point.angle * (Math.PI / 180))}
            r="2"
            fill="red"
          />
        ))}
      </svg>
    </div>
  );
};

export default LiDARView;