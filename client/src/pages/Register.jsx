import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import API from "../services/api";

function Register() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/register", form);

      alert(res.data.message);

      navigate("/");
    } catch (error) {
      alert(error.response?.data?.message || "Registration Failed");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh" }}
    >
      <div
        className="card shadow-lg"
        style={{
          width: "450px",
          borderRadius: "20px",
        }}
      >
        <div className="card-body p-5">

          {/* Logo */}
          <div className="text-center mb-3">
            <i
              className="bi bi-pencil-square text-primary"
              style={{ fontSize: "55px" }}
            ></i>
          </div>

          {/* Heading */}
          <div className="text-center mb-4">
            <h2 className="fw-bold text-primary">
              Social Post Composer
            </h2>

            <p className="text-muted">
              Create • Validate • Publish
            </p>
          </div>

          <form onSubmit={handleSubmit}>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Username
              </label>

              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                autoComplete="username"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Email Address
              </label>

              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                autoComplete="email"
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                Password
              </label>

              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                autoComplete="new-password"
                required
              />
            </div>

            <button
              type="submit"
              className="btn btn-success w-100 py-2 fs-5"
            >
              Register
            </button>

          </form>

          <hr />

          <p className="text-center text-muted mb-2">
            Already have an account?{" "}
            <Link
              to="/"
              className="fw-semibold text-decoration-none"
            >
              Login
            </Link>
          </p>

          <div className="text-center mt-4">

            <small className="text-secondary d-block">
              Developed by <strong>Shivam Ray</strong>
            </small>

            <small className="d-block mt-2">

              <i className="bi bi-linkedin text-primary me-2"></i>

              <a
                href="https://www.linkedin.com/in/shivam-ray-a38b73326/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-decoration-none"
              >
                Shivam Ray | LinkedIn
              </a>

            </small>

            <small className="d-block mt-2">

              <i className="bi bi-envelope-fill text-danger me-2"></i>

              <a
                href="mailto:shivamray603@gmail.com"
                className="text-decoration-none"
              >
                shivamray603@gmail.com
              </a>

            </small>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Register;