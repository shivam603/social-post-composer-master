import { useState } from "react";
import API from "../services/api";

function PostForm() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [platforms, setPlatforms] = useState([]);

  const limits = {
    Twitter: 280,
    LinkedIn: 3000,
    Instagram: 2200,
    Facebook: 63206,
  };

  const handlePlatformChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setPlatforms([...platforms, value]);
    } else {
      setPlatforms(platforms.filter((p) => p !== value));
    }
  };

  const handlePublish = async () => {
    if (!title || !content || platforms.length === 0) {
      alert("Please fill all fields and select at least one platform.");
      return;
    }

    try {
      const token = localStorage.getItem("token");

      await API.post(
        "/posts",
        {
          title,
          content,
          platforms,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("✅ Post Published Successfully!");

      setTitle("");
      setContent("");
      setPlatforms([]);

      window.location.reload();
    } catch (error) {
      alert(error.response?.data?.message || "Failed to Publish");
    }
  };

  return (
    <div>

      <h3 className="mb-4 text-primary fw-bold">
        <i className="bi bi-plus-circle-fill me-2"></i>
        Create New Post
      </h3>

      {/* Title */}

      <div className="mb-4">

        <label className="form-label fw-semibold">
          <i className="bi bi-card-heading me-2"></i>
          Post Title
        </label>

        <input
          className="form-control"
          type="text"
          placeholder="Enter post title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

      </div>

      {/* Content */}

      <div className="mb-4">

        <label className="form-label fw-semibold">
          <i className="bi bi-pencil-square me-2"></i>
          Post Content
        </label>

        <textarea
          className="form-control"
          rows="6"
          placeholder="Write your social media post here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

      </div>

      {/* Character Counter */}

      <div className="d-flex justify-content-between align-items-center mb-4">

        <h6 className="mb-0">
          Character Count
        </h6>

        <span className="badge bg-primary fs-6">
          {content.length}
        </span>

      </div>

      {/* Platforms */}

      <div className="mb-4">

        <h5 className="fw-bold mb-3">
          <i className="bi bi-share-fill me-2"></i>
          Select Platforms
        </h5>

        <div className="row">

          <div className="col-md-6 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Twitter"
                checked={platforms.includes("Twitter")}
                onChange={handlePlatformChange}
              />
              <label className="form-check-label">
                Twitter (X)
              </label>
            </div>
          </div>

          <div className="col-md-6 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="LinkedIn"
                checked={platforms.includes("LinkedIn")}
                onChange={handlePlatformChange}
              />
              <label className="form-check-label">
                LinkedIn
              </label>
            </div>
          </div>

          <div className="col-md-6 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Instagram"
                checked={platforms.includes("Instagram")}
                onChange={handlePlatformChange}
              />
              <label className="form-check-label">
                Instagram
              </label>
            </div>
          </div>

          <div className="col-md-6 mb-2">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value="Facebook"
                checked={platforms.includes("Facebook")}
                onChange={handlePlatformChange}
              />
              <label className="form-check-label">
                Facebook
              </label>
            </div>
          </div>

        </div>

      </div>

      {/* Validation */}

      <div className="mb-4">

        <h5 className="fw-bold mb-3">
          <i className="bi bi-shield-check me-2"></i>
          Validation Status
        </h5>

        {platforms.length === 0 ? (

          <div className="alert alert-secondary">
            Select one or more platforms to validate your post.
          </div>

        ) : (

          platforms.map((platform) => (

            <div
              key={platform}
              className={
                content.length <= limits[platform]
                  ? "alert alert-success"
                  : "alert alert-danger"
              }
            >

              <strong>{platform}</strong>

              <br />

              {content.length <= limits[platform]
                ? `✅ Valid (${content.length}/${limits[platform]} Characters)`
                : `❌ Limit Exceeded (${content.length}/${limits[platform]} Characters)`}

            </div>

          ))

        )}

      </div>

      {/* Publish Button */}

      <button
        className="btn btn-primary btn-lg w-100"
        onClick={handlePublish}
      >
        <i className="bi bi-send-fill me-2"></i>
        Publish Post
      </button>

    </div>
  );
}

export default PostForm;