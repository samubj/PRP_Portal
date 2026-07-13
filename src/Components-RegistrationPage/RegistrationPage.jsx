import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./RegistrationPage.css";
import logo from "../assets/Background.png";
import placement_officer from "../assets/placement_officer.png";
import recuriter from "../assets/recuriter.png";
import Student from "../assets/Student.png";
import training from "../assets/training.png";
import user_reg from "../assets/user_reg.png";
import Vector from "../assets/vector.png";
import arrow from "../assets/container.png";
import { useNavigate } from "react-router-dom";


const RegistrationPage = () => {
    const [selectedRole, setSelectedRole] = useState(
        "Training Coordinator"
    );
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        organization: "",
        department: "",
        employeeId: "",
        designation: "",
        password: "",
        confirmPassword: "",
        terms: false,
    });

    const [errors, setErrors] = useState({});

    const roles = [
        {
            title: "Placement Officer",
            desc: "Manage drive postings, student placements and company relations.",
            icon: placement_officer,
        },
        {
            title: "Recruiter",
            desc: "Post jobs, search students, manage applications and shortlist candidates.",
            icon: recuriter,
        },
        {
            title: "Student",
            desc: "Explore opportunities, apply for jobs and track application status.",
            icon: Student,
        },
        {
            title: "Training Coordinator",
            desc: "Manage training programs, batches, schedules and training records.",
            icon: training,
        },
    ];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.fullName.trim()) {
            newErrors.fullName = "Full Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
        ) {
            newErrors.email = "Enter a valid email address";
        }

        if (!formData.phone.trim()) {
            newErrors.phone = "Phone Number is required";
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone =
                "Phone Number must be exactly 10 digits";
        }

        if (!formData.organization.trim()) {
            newErrors.organization =
                "Organization Name is required";
        }

        if (!formData.department.trim()) {
            newErrors.department =
                "Department Name is required";
        }

        if (!formData.employeeId.trim()) {
            newErrors.employeeId =
                "Employee ID is required";
        }

        if (
            !formData.designation ||
            formData.designation === "Select your role"
        ) {
            newErrors.designation =
                "Please select a designation";
        }
        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (
            !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/.test(
                formData.password
            )
        ) {
            newErrors.password =
                "Password must contain uppercase, lowercase, number and special character";
        }

        if (!formData.confirmPassword) {
            newErrors.confirmPassword =
                "Confirm Password is required";
        } else if (
            formData.password !== formData.confirmPassword
        ) {
            newErrors.confirmPassword =
                "Passwords do not match";
        }

        if (!formData.terms) {
            newErrors.terms =
                "Please accept Terms and Conditions";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            alert("Registration Successful");
            navigate("/");
            // console.log(formData);
        }
    };

    return (
        <div className="registration-page">
            <div className="registration-container">

                <section className="registration-sidebar">

                    <div className="registration-brand">
                        <img
                            src={logo}
                            alt="Eduhire Logo"
                            className="registration-logo"
                        />

                        <div>
                            <h3>EDUHIRE</h3>
                            <p>
                                EMPOWERING CAREERS, CONNECTING FUTURES
                            </p>
                        </div>
                    </div>

                    <div>
                        <h1 className="registration-heading">
                            Create Your Account
                        </h1>

                        <p className="registration-subtitle">
                            Join CampusConnect and be part of a platform
                            that connects talent with opportunities.
                        </p>
                    </div>

                    <div className="role-label">
                        SELECT YOUR ROLE
                    </div>

                    <div className="registration-role-list">
                        {roles.map((role) => (
                            <div
                                key={role.title}
                                className={`registration-role-card ${selectedRole === role.title
                                    ? "registration-active-role"
                                    : ""
                                    }`}
                                onClick={() =>
                                    setSelectedRole(role.title)
                                }
                            >
                                <div className="registration-role-content">
                                    <div className="registration-role-icon">
                                        <img
                                            src={role.icon}
                                            className="sub_reg_log"
                                            alt={role.title}
                                        />
                                    </div>

                                    <div>
                                        <h4>{role.title}</h4>
                                        <p>{role.desc}</p>
                                    </div>
                                </div>
                                <div className="registration-radio">
                                    {selectedRole === role.title && (
                                        <div className="registration-radio-fill"></div>
                                    )}
                                </div>

                            </div>
                        ))}
                    </div>

                    <br />
                    <br />
                    <br />

                    <div className="registration-footer">
                        <img
                            src={Vector}
                            className="vector-img"
                            alt="support"
                        />
                        Need help? Contact support@campusconnect.com
                    </div>

                </section>

                <section className="registration-form-panel">

                    <div className="registration-form-header">

                        <div className="registration-user-icon">
                            <img
                                src={user_reg}
                                className="registration-logo"
                                alt="user"
                            />
                        </div>

                        <div>
                            <h2>User Registration</h2>
                            <p>
                                Fill in the details below to create
                                your account
                            </p>
                        </div>

                    </div>

                    <form
                        className="registration-form-grid"
                        onSubmit={handleSubmit}
                    >

                        <div className="registration-input-group">
                            <label>Full Name</label>

                            <input
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                placeholder="John Doe"
                            />

                            {errors.fullName && (
                                <span className="error-text">
                                    {errors.fullName}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>Official Email Address</label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="john.doe@institution.edu"
                            />

                            {errors.email && (
                                <span className="error-text">
                                    {errors.email}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>Phone Number</label>

                            <div className="registration-phone-container">

                                <select className="registration-country-code">
                                    <option>+1</option>
                                    <option>+91</option>
                                    <option>+44</option>
                                    <option>+61</option>
                                    <option>+971</option>
                                </select>

                                <input
                                    type="text"
                                    name="phone"
                                    value={formData.phone}
                                    maxLength="10"
                                    placeholder="9876543210"
                                    className="registration-phone-input"
                                    onChange={(e) => {
                                        const value =
                                            e.target.value.replace(/\D/g, "");

                                        setFormData({
                                            ...formData,
                                            phone: value,
                                        });
                                    }}
                                />

                            </div>

                            {errors.phone && (
                                <span className="error-text">
                                    {errors.phone}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>
                                Organization / Institution Name
                            </label>

                            <input
                                type="text"
                                name="organization"
                                value={formData.organization}
                                onChange={handleChange}
                                placeholder="University of Excellence"
                            />

                            {errors.organization && (
                                <span className="error-text">
                                    {errors.organization}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>
                                Department / Training Cell
                            </label>

                            <input
                                type="text"
                                name="department"
                                value={formData.department}
                                onChange={handleChange}
                                placeholder="Career Services"
                            />

                            {errors.department && (
                                <span className="error-text">
                                    {errors.department}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>
                                Employee ID / Staff ID
                            </label>

                            <input
                                type="text"
                                name="employeeId"
                                value={formData.employeeId}
                                onChange={handleChange}
                                placeholder="EDU-88291"
                            />

                            {errors.employeeId && (
                                <span className="error-text">
                                    {errors.employeeId}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group registration-full-width">
                            <label>Designation</label>

                            <select
                                name="designation"
                                value={formData.designation}
                                onChange={handleChange}
                            >
                                <option>
                                    Select your role
                                </option>
                                <option>
                                    Placement Officer
                                </option>
                                <option>
                                    Recruiter
                                </option>
                                <option>
                                    Student
                                </option>
                                <option>
                                    Training Coordinator
                                </option>
                            </select>

                            {errors.designation && (
                                <span className="error-text">
                                    {errors.designation}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>Password</label>

                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="********"
                            />
                            {errors.password && (
                                <span className="error-text">
                                    {errors.password}
                                </span>
                            )}
                        </div>

                        <div className="registration-input-group">
                            <label>Confirm Password</label>

                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="********"
                            />

                            {errors.confirmPassword && (
                                <span className="error-text">
                                    {errors.confirmPassword}
                                </span>
                            )}
                        </div>

                        <div className="registration-full-width">

                            <div className="registration-terms-container">

                                <input
                                    type="checkbox"
                                    id="registration-terms-checkbox"
                                    name="terms"
                                    checked={formData.terms}
                                    onChange={handleChange}
                                    className="registration-checkbox"
                                />

                                <label
                                    htmlFor="registration-terms-checkbox"
                                    className="registration-terms"
                                >
                                    I agree to the{" "}
                                    <span className="span-tc">
                                        Terms of Use and Privacy Policy
                                    </span>
                                </label>

                            </div>

                            {errors.terms && (
                                <span className="error-text">
                                    {errors.terms}
                                </span>
                            )}
                           
                                <button
                                    type="submit"
                                    className="registration-submit-btn"
                                >
                                    Complete Registration

                                    <img
                                        src={arrow}
                                        className="arrow-font"
                                        alt="arrow"
                                    />
                                </button>

                            <p className="registration-login-text">
                                Already have an account?
                                <span> Log in</span>
                            </p>

                        </div>

                    </form>

                </section>

            </div>
        </div>
    );
};

export default RegistrationPage;