import React from 'react'

const MarkAttendance = () => {
    const handleAttendance = () => {
        // Implement mark attendance logic here
        console.log('Attendance marked');
      };
    
      return (
        <div className='MarkA'>
            <div className="mycc">
          <h1>Mark Attendance</h1>
          <div className="myb">
          <button onClick={handleAttendance}>Mark Attendance</button>
          </div>
            </div>
        </div>
      );
}

export default MarkAttendance
