import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ForgotPassword.css";
import back_icon from "../assets/back_icon.png"
import { Link } from "react-router-dom";
export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim()) {
      setError("Email is required");
      return;
    }
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email");
      return;
    }
    setError("");
    navigate("/check-email");
  };
  return (
    <div className="forgot-password-container">
      <div className="forgot-password-navbar">
        <h2 className="forgot-password-logo">EduHire</h2>
        <div className="forgot-password-navbar-actions">
          <span>Support</span>
          <button className="forgot-password-help-btn">Help Center</button>
        </div>
      </div>
      <Link to="/">
      <button className="forgot-password-back-btn">
        <img src = {back_icon} alt="back_icon" className="forgot-password-back-btn-icon"/> Back
      </button></Link>

      <div className="forgot-password-content">
        <h1 className="forgot-password-title">Forgot Password ?</h1>
        <p className="forgot-password-description">Enter your registered ID or email to receive a password reset link.</p>
        <div className="forgot-password-form-group">
          <label className="forgot-password-label">Log in ID</label>
          <input type="text" placeholder="name@university.edu" className="forgot-password-input" value={email} onChange={(e) => setEmail(e.target.value)}/>
          {error && (
            <p className="forgot-password-error">
              {error}
            </p>
          )}
        </div>
        <button className="forgot-password-reset-btn" onClick={handleSubmit}> Send Reset Link </button>
        <div className="forgot-password-divider"></div>
        <p className="forgot-password-login-link">Back to Login </p>
      </div>

      <div className="forgot-password-footer">
        <p>© 2026 Placement Platform. All rights reserved</p>
        <div className="forgot-password-footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
}