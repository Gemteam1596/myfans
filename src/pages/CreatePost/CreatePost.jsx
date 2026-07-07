import { useState } from "react";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [visibility, setVisibility] = useState("free");
  const [media, setMedia] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      alert("Please login first.");
      return;
    }

    if (!caption.trim() && !media) {
      alert("Please enter a caption or upload a photo/video.");
      return;
    }

    const formData = new FormData();
    formData.append("uid", user.uid);
    formData.append("firebaseUid", user.firebaseUid || "");
    formData.append("content", caption);
    formData.append("visibility", visibility);

    if (media) {
      formData.append("media", media);
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://myfanshub.club/api/create-post.php",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await response.json();

      if (!result.success) {
        alert(result.message || "Failed to publish post.");
        return;
      }

      alert("✅ Post published successfully!");

      setCaption("");
      setVisibility("free");
      setMedia(null);

      const fileInput = document.getElementById("media");
      if (fileInput) {
        fileInput.value = "";
      }

    } catch (error) {
      console.error(error);
      alert("Error: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container py-5 text-white">
      <h1>Create New Post 📸</h1>

      <hr />

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "700px" }}
      >
        <div className="mb-4">
          <label className="form-label">
            Caption
          </label>

          <textarea
            className="form-control"
            rows="5"
            placeholder="Write something..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
            Upload Photo / Video
          </label>

          <input
            id="media"
            type="file"
            className="form-control"
            accept="image/*,video/*"
            onChange={(e) => setMedia(e.target.files[0])}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">
            Visibility
          </label>

          <select
            className="form-select"
            value={visibility}
            onChange={(e) => setVisibility(e.target.value)}
          >
            <option value="free">Free</option>
            <option value="subscribers">
              Subscribers Only
            </option>
          </select>
        </div>

        <button
          type="submit"
          className="btn btn-danger"
          disabled={loading}
        >
          {loading ? "Publishing..." : "Publish Post"}
        </button>
      </form>
    </div>
  );
}

export default CreatePost;