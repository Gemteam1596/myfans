import { useState } from "react";

function CreatePost() {
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log({
      caption,
      image,
    });

    alert("Next we'll upload this to Firebase!");
  };

  return (
    <div className="container py-5 text-white">

      <h1>Create New Post 📸</h1>

      <hr />

      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "600px" }}
      >

        <div className="mb-4">
          <label className="form-label">
            Upload Image
          </label>

          <input
            type="file"
            className="form-control"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>

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
            required
          />
        </div>

        <button
          className="btn btn-danger"
          type="submit"
        >
          Publish Post
        </button>

      </form>

    </div>
  );
}

export default CreatePost;