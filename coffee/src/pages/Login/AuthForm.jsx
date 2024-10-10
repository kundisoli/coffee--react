import React, { useState } from 'react';
import './AuthForm.css'; 

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Registration forms

  const toggleForm = () => {
    setIsLogin(!isLogin); // Toggle between Login and Registration
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <div className="auth-header">
          <h2>{isLogin ? 'Log in' : 'Register'}</h2>
        </div>
        <form>
          {!isLogin && ( // If not login, show extra fields for Registration
            <>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" placeholder="Enter username" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" placeholder="Enter email" />
              </div>
            </>
          )}
          {isLogin && ( // If login, show username/email input
            <div className="form-group">
              <label htmlFor="login">Username or Email</label>
              <input type="text" id="login" name="login" placeholder="Enter username or email" />
            </div>
          )}
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Enter password" />
          </div>
          {!isLogin && ( // Confirm password only for Registration
            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm password" />
            </div>
          )}
          <button type="submit" className="submit-btn">{isLogin ? 'Log in' : 'Register'}</button>
        </form>
        <div className="toggle-link">
          {isLogin ? (
            <p>
              Don't have an account? <span onClick={toggleForm}>Register here</span>
            </p>
          ) : (
            <p>
              Already have an account? <span onClick={toggleForm}>Log in here</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
