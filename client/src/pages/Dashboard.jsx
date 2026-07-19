import Navbar from "../components/Navbar";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container py-5">

        {/* Page Header */}
        <div className="text-center mb-5">

          <i
            className="bi bi-pencil-square text-primary"
            style={{ fontSize: "60px" }}
          ></i>

          <h1 className="fw-bold text-primary mt-3">
            Social Post Composer
          </h1>

          <p className="text-muted fs-5">
            Create, validate and publish your posts across multiple social media platforms.
          </p>

        </div>

        {/* Create Post Card */}
        <div className="card shadow-lg mb-5">

          <div className="card-header bg-primary text-white py-3">
            <h4 className="mb-0">
              <i className="bi bi-plus-circle me-2"></i>
              Create New Post
            </h4>
          </div>

          <div className="card-body p-4">

            <PostForm />

          </div>

        </div>

        {/* Published Posts Card */}
        <div className="card shadow-lg">

          <div className="card-header bg-success text-white py-3">
            <h4 className="mb-0">
              <i className="bi bi-card-list me-2"></i>
              Published Posts
            </h4>
          </div>

          <div className="card-body p-4">

            <PostList />

          </div>

        </div>

        {/* Footer */}
        <div className="text-center mt-5">

          <hr />

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
    </>
  );
}

export default Dashboard;