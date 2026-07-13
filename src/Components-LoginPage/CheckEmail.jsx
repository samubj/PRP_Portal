import { useNavigate } from "react-router-dom";
import "./CheckEmail.css";
import back_icon from "../assets/back_icon.png"
import check_mail_icon from "../assets/Check_mail_icon.png"
import caution_icon from "../assets/caution_icon.png"

export default function CheckEmail() {
  const navigate = useNavigate();
  return (
    <div className="check-email-container">
      <div className="check-email-navbar">
        <h2 className="check-email-logo">EduHire</h2>
        <div className="check-email-navbar-actions">
          <span>Support</span>
          <button className="check-email-help-btn">Help Center</button>
        </div>
      </div>
      <button className="check-email-back-btn" onClick={() => navigate("/")} >
        <img src = {back_icon} alt="back_icon" className="check-email-back-btn-icon"/> Back</button>
      <div className="check-email-content">
        <div className="check-email-icon">
          <img src={check_mail_icon} alt="mail_icon" className=""/>
        </div>
        <h1 className="check-email-title"> Check Your Email</h1>
        <p className="check-email-description">We have sent a password reset link to your email address. Please check your inbox and follow the instructions to regain access to your portal.</p>
        <div className="check-email-info-box">
          <span><img src={caution_icon} alt="caution_icon" className="check-email-caution-icon"/></span>
          <p> Check your spam or junk folder if you don't see the email within a few minutes.</p>
        </div>
        <button className="check-email-login-btn" onClick={() => navigate("/")}> Back to Login</button>
        <div className="check-email-divider"></div>
        <p className="check-email-resend-text">
          Didn't receive the email?{" "}
          <span className="check-email-resend-link"> Resend Email </span>
        </p>
      </div>

      <div className="check-email-footer">
        <p>© 2026 Placement Platform. All rights reserved.</p>
        <div className="check-email-footer-links">
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
          <span>Cookie Policy</span>
        </div>
      </div>
    </div>
  );
}