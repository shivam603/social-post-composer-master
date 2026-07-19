import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm">
      <div className="container">

        {/* Logo & Project Name */}
        <div className="d-flex align-items-center">

          <i
            className="bi bi-pencil-square me-3"
            style={{ fontSize: "32px" }}
          ></i>

          <div>

            <h4 className="mb-0 fw-bold text-white">
              Social Post Composer
            </h4>

            <small className="text-light">
              Compose Once • Publish Everywhere
            </small>

          </div>

        </div>

        {/* Logout Button */}
        <button
          className="btn btn-light d-flex align-items-center"
          onClick={logout}
        >
          <i className="bi bi-box-arrow-right me-2"></i>
          Logout
        </button>

      </div>
    </nav>
  );
}

export default Navbar;