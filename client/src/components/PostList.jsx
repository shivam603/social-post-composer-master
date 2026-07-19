import { useEffect, useState } from "react";
import API from "../services/api";

function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const res = await API.get("/posts");
      setPosts(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>

      <h3 className="text-success fw-bold mb-4">
        <i className="bi bi-card-list me-2"></i>
        Published Posts
      </h3>

      {posts.length === 0 ? (

        <div className="alert alert-info text-center">

          <i
            className="bi bi-inbox-fill d-block mb-2"
            style={{ fontSize: "40px" }}
          ></i>

          <h5>No Posts Available</h5>

          <p className="mb-0">
            Publish your first social media post.
          </p>

        </div>

      ) : (

        posts.map((post) => (

          <div
            key={post._id}
            className="card shadow-sm mb-4"
          >
            <div className="card-body">

              {/* Title */}

              <h4 className="fw-bold text-primary">

                <i className="bi bi-file-earmark-text me-2"></i>

                {post.title}

              </h4>

              <hr />

              {/* Content */}

              <p
                className="card-text"
                style={{
                  whiteSpace: "pre-wrap",
                  lineHeight: "1.7",
                }}
              >
                {post.content}
              </p>

              {/* Platforms */}

              <div className="mb-3">

                {post.platforms.map((platform, index) => (

                  <span
                    key={index}
                    className="badge bg-primary me-2 mb-2"
                  >
                    {platform}
                  </span>

                ))}

              </div>

              <hr />

              {/* Footer */}

              <div className="d-flex justify-content-between flex-wrap">

                <small className="text-muted">

                  <i className="bi bi-person-circle me-2"></i>

                  <strong>
                    {post.user?.username || "Unknown User"}
                  </strong>

                </small>

                <small className="text-muted">

                  <i className="bi bi-calendar-event me-2"></i>

                  {new Date(post.createdAt).toLocaleString()}

                </small>

              </div>

            </div>
          </div>

        ))

      )}

    </div>
  );
}

export default PostList;