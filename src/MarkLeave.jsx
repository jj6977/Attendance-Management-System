import React, { useState } from 'react';
 // Import your CSS file

const MarkLeave = () => {
  const [leaveReason, setLeaveReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement leave request logic here
    console.log('Leave requested:', leaveReason);
  };

  return (
    <div className="act">
    <div className="mark-leave-container">
      <h1 className="leave-heading">Mark Leave</h1>
      <form onSubmit={handleSubmit} className="leave-form">
        <label>
          Reason:
          <input
            type="text"
            value={leaveReason}
            onChange={(e) => setLeaveReason(e.target.value)}
            className="leave-input"
            />
        </label>
        <button type="submit" className="leave-submit-btn">
          Submit Leave Request
        </button>
      </form>
    </div>
    </div>
  );
};

export default MarkLeave;
