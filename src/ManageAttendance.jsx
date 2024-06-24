import React from 'react';

const ManageAttendance = () => {
  const attendanceRecords = [
    { id: 1, date: '2023-01-01', status: 'Present' },
    { id: 2, date: '2023-01-02', status: 'Absent' },
    { id: 3, date: '2023-01-03', status: 'Leave' },
    { id: 4, date: '2023-01-04', status: 'Present' },
    { id: 5, date: '2023-01-05', status: 'Absent' },
  ];

  return (
    <div className="pcc">
    <div className="manage-attendance-container">
      <h1 className="attendance-heading">Manage Attendance</h1>
      <ul className="attendance-list">
        {attendanceRecords.map((record) => (
            <li key={record.id} className="attendance-item">
            <span className="record-date">{record.date}:</span> {record.status}
            {/* Add buttons for CRUD operations here */}
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ManageAttendance;
