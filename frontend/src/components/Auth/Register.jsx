import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import authService from "../../services/authService";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [otp, setOtp] = useState(""); // OTP input
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [otpSent, setOtpSent] = useState(false); // Flag for showing OTP input

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.password) {
      setError("Please fill in all required fields");
      return false;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long");
      return false;
    }
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return false;
    }
    if (!acceptTerms) {
      setError("Please accept the terms and conditions");
      return false;
    }
    return true;
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    if (!validateForm()) return;

    setLoading(true);
    try {
      const { confirmPassword: _confirmPassword, ...registerData } = formData;
      const response = await authService.register(registerData);

      if (response.message) {
        alert(response.message); // "OTP sent to your email"
        setOtpSent(true); // Show OTP input
      } else {
        setError("Registration failed. Try again.");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    if (!otp) {
      setError("Please enter the OTP sent to your email");
      return;
    }
    setLoading(true);
    try {
      const response = await authService.verifyOtp({ email: formData.email, otp });
      if (response.message) {
        alert(response.message); // "Email verified successfully"
        navigate("/login"); // Redirect to login page
      } else {
        setError("OTP verification failed");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "OTP verification failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            <div className="auth-card" data-aos="fade-up">
              <div className="auth-header">
                <h2>{otpSent ? "Verify OTP" : "Create Account"}</h2>
                <p>{otpSent ? "Enter the OTP sent to your email" : "Join Coding Savvy and start your coding journey"}</p>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              {!otpSent ? (
                <form onSubmit={handleRegister} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input type="text" id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email *</label>
                    <input type="email" id="email" name="email" className="form-control" value={formData.email} onChange={handleChange} required />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone</label>
                    <input type="text" id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password">Password *</label>
                    <div className="password-input-wrapper">
                      <input type={showPassword ? "text" : "password"} id="password" name="password" className="form-control" value={formData.password} onChange={handleChange} required />
                      <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password *</label>
                    <div className="password-input-wrapper">
                      <input type={showConfirmPassword ? "text" : "password"} id="confirmPassword" name="confirmPassword" className="form-control" value={formData.confirmPassword} onChange={handleChange} required />
                      <button type="button" className="password-toggle" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>

                  <div className="form-check mb-3">
                    <input type="checkbox" id="acceptTerms" className="form-check-input" checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />
                    <label htmlFor="acceptTerms" className="form-check-label">I agree to the Terms & Conditions</label>
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Creating Account..." : "Create Account"}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyOtp} className="auth-form">
                  <div className="form-group">
                    <label htmlFor="otp">Enter OTP *</label>
                    <input type="text" id="otp" name="otp" className="form-control" value={otp} onChange={(e) => setOtp(e.target.value)} required />
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}>
                    {loading ? "Verifying..." : "Verify OTP"}
                  </button>
                </form>
              )}

              <div className="auth-footer mt-3">
                <p>
                  Already have an account? <Link to="/login">Login here</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
