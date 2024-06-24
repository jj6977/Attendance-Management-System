import React from 'react'

const LeaveApproval = () => {

    const leaveRequests = [
        { id: 1, user: 'John Doe', reason: 'Sick', status: 'Pending' },
        { id: 2, user: 'Clairo Sofia', reason: 'Vacation', status: 'Approved' },
        { id: 3, user: 'John Wick', reason: 'Sick', status: 'Approved' },
        { id: 4, user: 'Tom Holland', reason: 'Vacation', status: 'Approved' },
        { id: 5, user: 'Tobey Maguire', reason: 'Sick', status: 'Pending' },
    ];
    
  return (
   <div className='pccc'>
    <div className="manage-attendance-container">
      <h1 className="attendance-heading">Leave Approval</h1>
      <ul className="attendance-list">
        {leaveRequests.map((request) => (
            <li key={request.id}>
            {request.user}: {request.reason} - {request.status}
            {/* Add buttons to approve/reject leave requests here */}
          </li>
        ))}
      </ul>
        </div>
    </div>
    )
}

export default LeaveApproval
