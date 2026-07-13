import { Link } from "react-router-dom";
import "./LandingPage.css";
import dot from "../assets/dot.png"
import meetingimg from "../assets/amico.png"
import claude from "../assets/claude.png"
import copilot from "../assets/copilot.png"
import deepseek from "../assets/deepseek.png"
import gemini from "../assets/gemini.png"
import gooogle from "../assets/google.png"
import arrowleft from "../assets/proicons_arrow-left.png"
import rig_arrow from "../assets/rig_arrow.png"
import gradio from "../assets/gradio.png"
import people from "../assets/people.png"
import candidate from "../assets/candidate.png"
import emp from "../assets/emp.png"
import institutes from "../assets/institutes.png"
import tick_icon from "../assets/Icon.png"
import tick_icon2 from "../assets/icon2.png"
import tick_icon3 from "../assets/icon3.png"
import SUCCESS_STORIES_img from "../assets/img.png"
import SUCCESS_STORIES_img2 from "../assets/img-1.png"
import star from "../assets/star.png"
import quote from "../assets/quote.png"
import share from "../assets/share.png"
import mail from "../assets/mail.png"
import button from "../assets/button.png"

export default function LandingPage() {
    return (
        <div className="landing-page">
            <header className="landing-page-navbar">
                <h2 className="landing-page-logo">EduHire</h2>
                <div className="landing-page-nav-actions">
                    <a href="/">Log In</a>
                    <Link to="/register">
                        <button>Register</button>
                    </Link>
                </div>
            </header>
            <div className="landing-page-hero">
                <div className="landing-page-hero-content">
                    <span className="landing-page-badge">
                        <img src={dot} alt="dot" /> NOW POWERED BY AI 2.0
                    </span>
                    <h1>
                        Bridging <span style={{ color: "#7700F5" }}>Ambition</span> with
                        <br />
                        Opportunity.
                    </h1>
                    <p className="landing-page-hero-description">Empowering the next generation of talent by connecting high-performing candidates with industry-leading organizations through AI-driven matching.</p>
                    <div className="landing-page-users">
                        <img src={people} alt="users" />
                    </div>
                    <p className="landing-page-small-text">
                        Join 50k+ professionals hired this month
                    </p>
                </div>
                <div className="landing-page-hero-image">
                    <img src={meetingimg} alt="Meeting Illustration" />
                </div>
            </div>
            <div className="landing-page-companies">
                <p>TRUSTED BY INDUSTRY LEADERS</p>
                <div className="landing-page-company-logos">
                    <img src={rig_arrow} className="landing-page-arrow" alt="rig_arrow" />
                    <img src={gooogle} className="landing-page-google" alt="google_img" />
                    <img src={claude} className="landing-page-claude" alt="claude_img" />
                    <img src={deepseek} className="landing-page-deepseek" alt="deepseek_img" />
                    <img src={gemini} className="landing-page-gemini" alt="gemini_img" />
                    <img src={gradio} className="landing-page-gradio" alt="gradio_img" />
                    <img src={copilot} className="landing-page-copilot" alt="copilot_img" />
                    <img src={arrowleft} className="landing-page-arrow1" alt="left_arrow" />
                </div>
            </div>
            <div className="landing-page-solutions">
                <h2>Tailored Solutions for Everyone</h2>
                <p>Accelerate your career growth with AI-powered job matching and direct access to top-tier hiring managers across the globe</p>
                <div className="landing-page-cards">
                    <div className="landing-page-card">
                        <img src={candidate} alt="candidate_img" className="landing-page-card-icon" />
                        <h3>For Candidates</h3>
                        <p>Accelerate your career growth with AI-powered job matching and direct access to top-tier hiring managers across the globe. </p>
                        <ul className="landing-page-feature-list">
                            <li>
                                <img src={tick_icon} alt="tick_icon" />
                                Personalized Job Alerts
                            </li>
                            <li>
                                <img src={tick_icon} alt="tick_icon" />
                                AI Resume Optimization
                            </li>
                        </ul>
                        <a href="/">
                            Get Started{" "}
                            <img src={arrowleft} className="landing-page-arrow1" alt="arrowleft" />
                        </a>
                    </div>

                    <div className="landing-page-card">
                        <img src={emp} alt="" className="landing-page-card-icon" />
                        <h3>For Employers</h3>
                        <p>Build a sustainable talent pipeline with automated screening and high-precision sourcing tools designed for modern recruitment. </p>
                        <ul className="landing-page-feature-list">
                            <li>
                                <img src={tick_icon2} alt="tick_icon" />
                                Instant Talent Sourcing
                            </li>
                            <li>
                                <img src={tick_icon2} alt="tick_icon" />
                                Hiring Analytics Dashboard
                            </li>
                        </ul>
                        <a href="/">
                            Start Hiring{" "}
                            <img src={arrowleft} className="landing-page-arrow1" alt="arrowleft" />
                        </a>
                    </div>
                    <div className="landing-page-card">
                        <img src={institutes} alt="" className="landing-page-card-icon" />
                        <h3>For Institutions</h3>
                        <p>Streamline placement tracking and strengthen industry partnerships with a centralized hub for student success and alumni engagement.</p>
                        <ul className="landing-page-feature-list">
                            <li>
                                <img src={tick_icon3} alt="tick_icon" />
                                Placement Success Metrics
                            </li>
                            <li>
                                <img src={tick_icon3} alt="tick_icon" />
                                Corporate Network Access
                            </li>
                        </ul>
                        <a href="/" className="landing-page-institutes-class">
                            Partner with Us{" "}
                            <img src={arrowleft} className="landing-page-arrow1" alt="arrowleft" />
                        </a>
                    </div>
                </div>
            </div>
            <div className="landing-page-stats">
                <div className="landing-page-stat-box">
                    <h2>500k+</h2>
                    <p>Jobs Posted Annually</p>
                    <span className="landing-page-stat-line"></span>
                </div>
                <div className="landing-page-stat-box">
                    <h2>10k+</h2>
                    <p>Hiring Partners</p>
                    <span className="landing-page-stat-line"></span>
                </div>
                <div className="landing-page-stat-box">
                    <h2>95%</h2>
                    <p>Placement Rate</p>
                    <span className="landing-page-stat-line"></span>
                </div>
            </div>
            <div className="landing-page-testimonials">
                <h4>SUCCESS STORIES</h4>
                <h2>Voices from our thriving community</h2>
                <div className="landing-page-testimonial-cards">
                    <div className="landing-page-testimonial">
                        <img src={quote} alt="quote" className="landing-page-quote" />
                        <div className="landing-page-testimonial-header">
                            <img src={SUCCESS_STORIES_img} alt="Sarah Chen" className="landing-page-profile" />
                            <div className="landing-page-user-info">
                                <div className="landing-page-stars">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                                <h3>Sarah Chen</h3>
                                <span>Product Designer @ Aura Systems</span>
                            </div>
                        </div>
                        <p>“ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.” </p>
                    </div>
                    <div className="landing-page-testimonial">
                        <img src={quote} alt="quote" className="landing-page-quote" />
                        <div className="landing-page-testimonial-header">
                            <img src={SUCCESS_STORIES_img2} alt="David Miller" className="landing-page-profile_2" />
                            <div className="landing-page-user-info">
                                <div className="landing-page-stars">
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                    <img src={star} alt="star" />
                                </div>
                                <h3>David Miller</h3>
                                <span>Talent Director @ Zenith Capital</span>
                            </div>
                        </div>
                        <p>“The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.”</p>
                    </div>
                </div>
            </div>
            <div className="landing-page-cta">
                <h2>Ready to build your <br />
                    professional future?
                </h2>
                <p>Join thousands of professionals and companies who have already found their perfect match through ConnectHire.</p>
                <div className="landing-page-cta-buttons">
                    <button className="landing-page-white-btn"> Find Your Next Role</button>
                    <button className="landing-page-purple-btn">Hire Top Talent </button>
                </div>
            </div>
            <footer className="landing-page-footer">
                <div className="landing-page-footer-top">
                    <div className="landing-page-footer-column">
                        <h3>ConnectHire</h3>
                        <p>The leading platform for professional placements and talent acquisition. Connecting ambition with industry excellence.
                        </p>
                        <div className="landing-page-social-icons">
                            <img src={share} alt="share_icon" />
                            <img src={mail} alt="mail_icon" />
                        </div>
                    </div>
                    <div className="landing-page-footer-column">
                        <h4>COMPANY</h4>
                        <p>About Us</p>
                        <p>Success Stories</p>
                        <p>Partner Program</p>
                        <p>Careers</p>
                    </div>
                    <div className="landing-page-footer-column">
                        <h4>SUPPORT</h4>
                        <p>Contact Support</p>
                        <p>Privacy Policy</p>
                        <p>Terms of Service</p>
                        <p>Cookie Policy</p>
                    </div>
                    <div className="landing-page-footer-column">
                        <h4>NEWSLETTER</h4>
                        <p className="landing-page-newsletter-text"> Get the latest career opportunities delivered to your inbox.</p>
                        <div className="landing-page-newsletter">
                            <input type="email" placeholder="Email" />
                            <img src={button} alt="button" />
                        </div>
                    </div>
                </div>
                <hr />
                <div className="landing-page-footer-bottom">
                    <p> 2024 ConnectHire. Empowering professional futures across the globe</p>
                    <div className="landing-page-footer-links">
                        <span>Status</span>
                        <span>Sitemap</span>
                        <span>Security</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}