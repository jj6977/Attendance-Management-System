import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill}
 from 'react-icons/bs'
 import { FcAcceptDatabase } from "react-icons/fc";
 import { RiAdminFill } from "react-icons/ri";
 import { FaHome, FaUser } from "react-icons/fa";
 import { IoCheckmarkDoneSharp } from "react-icons/io5";
 import { MdManageAccounts } from "react-icons/md";
 import { IoIosLogIn } from "react-icons/io";
 import { FaDeleteLeft } from "react-icons/fa6";
 import { GrSystem } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { MdOutlineDashboard } from "react-icons/md";


const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsGrid1X2Fill  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <Link to="/">
                    <FaHome className='icon'/> Home
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="UserLogin">
                    <FaUser className='icon'/> User Login
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="MarkAttendance">
                    <IoCheckmarkDoneSharp className='icon'/> Mark Attendance
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="ManageAttendance">
                    <MdManageAccounts className='icon'/> Manage Attendance
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="MarkLeave">
                    <FaDeleteLeft className='icon'/> Mark Leave
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="LeaveApproval">
                    <FcAcceptDatabase className='icon'/> Leave Approval
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="AdminLogin">
                    <RiAdminFill className='icon'/> Admin Login
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="UserDashboard">
                    <MdOutlineDashboardCustomize className='icon'/> User Dashboard
                </Link>
            </li>
            <li className='sidebar-list-item'>
                <Link to="AdminDashboard">
                    <MdOutlineDashboard className='icon'/> Admin Dashboard
                </Link>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar
