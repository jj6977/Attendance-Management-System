import React from "react";
import { Link } from "react-router-dom";

const UserDashboard = () => {
  return (
    <div className="ppp">
      <div className="user-dashboard-container">
        <h1 className="dashboard-heading">User Dashboard</h1>
        <ul className="dashboard-links">
          <li><Link to="/MarkAttendance" className="dashboard-link">Mark Attendance</Link></li>
          <li><Link to="/MarkLeave" className="dashboard-link">Mark Leave</Link></li>
          <li><Link to="/ManageAttendance" className="dashboard-link">View Attendance</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default UserDashboard;
