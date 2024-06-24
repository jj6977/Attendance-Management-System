import React from 'react'
import manage from "./assets/manage.jpg"
import './Home.css';


const Home = () => {
  return (
    <div className="home-container">      
      <div className="headerr">
        <h1>Welcome to the Attendance Management System</h1>
      </div>
      <main className="main-content"> 
        <section className="features-section">
          <h2>Features</h2>
          <ul>
            <li><a href="#">Register new students</a></li>
            <li><a href="#">Manage student attendance</a></li>
            <li><a href="#">Submit and approve leave requests</a></li>
            <li><a href="#">Generate attendance reports</a></li>
            <li><a href="#">Edit and update student profiles</a></li>
          </ul>
        </section>
        <section className="cta-section">
          <button>Get Started</button>
        </section>
      </main>
    </div>
  )
}

export default Home
