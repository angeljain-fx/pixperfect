import React, { Component } from 'react';
import './styles/projectSummary.css';

class ProjectSummary extends Component {
  render() {
    return(
      <div className="summary-container">
        <h1 className="summary-head">Asset Process</h1>
        <hr className="overview-divider"/>

        <div style={{ display: "flex", alignItems: "flexStart", margin: "5.5px 0px" }}>
          <i className="fas fa-user-edit"></i>
          <div className="asset-pro-cont">Create a project brief (It's free!).</div>
        </div>
        <div style={{ display: "flex", alignItems: "flexStart", margin: "5.5px 0px" }}>
          <i className="fas fa-tasks" style={{ marginRight: "8.5px" }}></i>
          <div className="asset-pro-cont">Project Manager reviews it and sends email confirmation.</div>
        </div>
        <div style={{ display: "flex", alignItems: "flexStart", margin: "5.5px 0px" }}>
          <i className="fas fa-wallet" style={{ marginRight: "8.5px" }}></i>
          <div className="asset-pro-cont">Add credits to your PixPerfect Wallet after confirmation.</div>
        </div>
        <div style={{ display: "flex", alignItems: "flexStart", margin: "5.5px 0px" }}>
          <i className="fab fa-slack slack-mod2" style={{ marginRight: "8.6px" }}></i>
          <div className="asset-pro-cont">Chat with your team on Slack.</div>
        </div>
        <div style={{ display: "flex", alignItems: "flexStart", margin: "5.5px 0px" }}>
          <i className="fas fa-sync-alt" style={{ marginRight: "8.4px" }}></i>
          <div className="asset-pro-cont">Review the designs sent, ask for necessary adjustments and get your finalised assets.</div>
        </div>
      </div>
    );
  }
}

export default ProjectSummary;
