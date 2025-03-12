import React from "react";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>SANAD</h2>
      <ul>
        <li>📊 Analyze News</li>
        <li>📰 Multi-Source Analysis</li>
        <li>🤖 Generate News</li>
        <li>📈 Analyze Trends</li>
        <li className="active">📂 Campaigns</li>
      </ul>
      <div className="login-section">
        <button className="login-btn">Sign in ➜</button>
      </div>
    </div>
  );
};

export default Sidebar;
