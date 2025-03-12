import React, { useState } from "react";

const CampaignForm = ({ addCampaign }) => {
  const [campaign, setCampaign] = useState({
    name: "",
    taskType: "",
    sourceType: "",
    schedule: "",
    lastRun: "",
    status: "Active",
  });

  const handleChange = (e) => {
    setCampaign({ ...campaign, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addCampaign(campaign);
    setCampaign({
      name: "",
      taskType: "",
      sourceType: "",
      schedule: "",
      lastRun: "",
      status: "Active",
    });
  };

  return (
    <div className="form-container">
      <h2>Campaign Functionality</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Campaign Name:</label>
          <input type="text" name="name" value={campaign.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Task Type:</label>
          <input type="text" name="taskType" value={campaign.taskType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Source Type:</label>
          <input type="text" name="sourceType" value={campaign.sourceType} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Schedule:</label>
          <input type="text" name="schedule" value={campaign.schedule} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Last Run:</label>
          <input type="text" name="lastRun" value={campaign.lastRun} onChange={handleChange} />
        </div>
        <button type="submit" className="submit-btn">Add Campaign</button>
      </form>
    </div>
  );
};

export default CampaignForm;
