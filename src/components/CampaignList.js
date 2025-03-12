import React from "react";

const CampaignList = ({ campaigns }) => {
  return (
    <div className="table-container">
      <h2>Campaign Functionality</h2>
      <table>
        <thead>
          <tr>
            <th>Campaign Name</th>
            <th>Task Type</th>
            <th>Source Type</th>
            <th>Last Run</th>
            <th>Status</th>
            <th>Schedule</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((camp, index) => (
            <tr key={index}>
              <td>{camp.name}</td>
              <td>{camp.taskType}</td>
              <td>{camp.sourceType}</td>
              <td>{camp.lastRun}</td>
              <td className={`status ${camp.status.toLowerCase()}`}>{camp.status}</td>
              <td>{camp.schedule}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignList;
