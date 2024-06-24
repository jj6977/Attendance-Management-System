import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Home from "./Home";
import UserLogin from "./UserLogin";
import MarkAttendance from "./MarkAttendance";
import ManageAttendance from "./ManageAttendance";
import MarkLeave from "./MarkLeave";
import LeaveApproval from "./LeaveApproval";
import AdminLogin from "./AdminLogin";
import UserDashboard from "./UserDashboard";
import AdminDashboard from "./AdminDashboard";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleLogin = (form) => {
    // Implement login logic here
    console.log('Logged in user:', form);
  };

  return (
    <BrowserRouter>
      <div className="grid-container">
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar
          openSidebarToggle={openSidebarToggle}
          OpenSidebar={OpenSidebar}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/UserLogin" element={<UserLogin onLogin={handleLogin} username="" password="" />} />        
          <Route path="/MarkAttendance" element={<MarkAttendance/>} />
          <Route path="/ManageAttendance" element={<ManageAttendance/>} />
          <Route path="/MarkLeave" element={<MarkLeave/>} />
          <Route path="/LeaveApproval" element={<LeaveApproval/>} />
          <Route path="/AdminLogin" element={<AdminLogin onLogin={handleLogin} username="" password=""/>} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/AdminDashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

