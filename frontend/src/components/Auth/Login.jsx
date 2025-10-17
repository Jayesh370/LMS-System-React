import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Auth.css";
import authService from "../../services/authService";
import { useAuth } from "../../context/AuthContext";
import { FaEnvelope, FaLock, FaEye, FaEyeSlash, FaGithub } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle OAuth redirect: if token is in query, hydrate session
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      (async () => {
        try {
          const prof = await authService.getProfile(token);
          if (prof?.user) {
            login(prof.user, token);
            navigate("/Courses", { replace: true });
          }
        } catch (e) {
          setError(e?.message || "OAuth login failed");
        }
      })();
    }
  }, [location.search, login, navigate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await authService.login(formData);

      if (response.user && !response.user.is_verified) {
        setError("Please verify your email before logging in.");
        return;
      }

      if (response.token && response.user) {
        login(response.user, response.token);
        navigate("/Courses");
      } else {
        setError("Invalid response from server");
      }
    } catch (err) {
      setError(err.response?.data?.message || err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  const handleGithubLogin = () => {
    const base = import.meta.env.VITE_API_URL?.replace(/\/$/, "");
    // Redirect to backend GitHub OAuth login endpoint
    window.location.href = `${base}/auth/github/login`;
  };

  return (
    <div className="auth-container">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-5 col-md-7">
            <div className="auth-card" data-aos="fade-up">
              <div className="auth-header">
                <h2>Welcome Back!</h2>
                <p>Login to continue your learning journey</p>
              </div>

              {error && <div className="alert alert-danger">{error}</div>}

              <form onSubmit={handleSubmit} className="auth-form">
                <div className="form-group">
                  <label htmlFor="email"><FaEnvelope className="me-2" /> Email</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="Enter your email address" value={formData.email} onChange={handleChange} required />
                </div>

                <div className="form-group">
                  <label htmlFor="password"><FaLock className="me-2" /> Password</label>
                  <div className="password-input-wrapper">
                    <input type={showPassword ? "text" : "password"} id="password" name="password" className="form-control" placeholder="Enter your password" value={formData.password} onChange={handleChange} required />
                    <button type="button" className="password-toggle" onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                  </div>
                </div>

                <button type="submit" className="btn btn-primary btn-auth" disabled={loading}>
                  {loading ? "Logging in..." : "Login"}
                </button>
              </form>

              <div className="auth-divider">
                <span>OR</span>
              </div>

              <button type="button" className="btn-github" onClick={handleGithubLogin}>
                <FaGithub className="github-icon" />
                Continue with GitHub
              </button>

              <div className="auth-footer mt-3">
                <p>Don't have an account? <Link to="/register">Register here</Link></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
