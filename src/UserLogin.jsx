import React, { useState } from 'react';
import { FaUser,FaLock } from "react-icons/fa";
import "./UserLogin.css"

const UserLogin = ({ username, password, onLogin }) => {
  const [form, setForm] = useState({ username: username || '', password: password || '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement login logic here
    console.log('User logged in:', form);
    if (onLogin) onLogin(form);
  };

  return (
    <div className="userlogin-container">
      
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>

      <div className="input-box">   
      <label>
        <input type="text" name="username" placeholder='Username:' value={form.username} onChange={handleChange} />
        <FaUser className='icon'/>
      </label>
      </div>

      <div className="input-box">   
      <label>
        <input type="password" name="password" placeholder='Password:' value={form.password} onChange={handleChange} />
        <FaLock className='icon'/>
      </label>
      </div>

      <div className="remember">
        <label>
        Remember me
        <input type="checkbox" /> 
        </label>
        <a href="#">Forgot Password?</a> 
      </div>
      
      <div className="mybb">
      <button type="submit">Login</button>
      </div>

      <div className="register">
        <p>Don't have an account? <a href="#">Register</a></p>
      </div>

    </form>
      
    </div>
  );
};

export default UserLogin;
