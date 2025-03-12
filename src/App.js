import React, { useState } from "react";
import CampaignForm from "./components/CampaignForm";
import CampaignList from "./components/CampaignList";
import Sidebar from "./components/Sidebar";
import "./App.css";

const App = () => {
  const [campaigns, setCampaigns] = useState([]);

  const addCampaign = (campaign) => {
    setCampaigns([...campaigns, campaign]);
  };

  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-content">
        <CampaignForm addCampaign={addCampaign} />
        <CampaignList campaigns={campaigns} />
      </div>
    </div>
  );
};

export default App;
