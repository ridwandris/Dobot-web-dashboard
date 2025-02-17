import React, { useState } from "react";

const Alerts = () => {
  const [alert, setAlert] = useState("No Alerts");

  return (
    <div className="alerts-container">
      <h2>Safety Alerts</h2>
      <p>{alert}</p>
    </div>
  );
};

export default Alerts;