import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="pppp">
    <div className="user-dashboard-containerr">
      <h1 className="dashboard-headingg">Admin Dashboard</h1>
      <ul className="dashboard-links">
      <li><Link to="/MarkLeave" className="dashboard-link">Mark Leave</Link></li>
        <li><Link to="/LeaveApproval" className="dashboard-link">Leave Approval</Link></li>
        <li><Link to="/ManageAttendance" className="dashboard-link">Manage Attendance</Link></li>
      </ul>
    </div>
    </div>
  );
};

export default AdminDashboard;
