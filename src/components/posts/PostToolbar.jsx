function PostToolbar() {
  return (
    <div className="post-toolbar">

      <input
        type="text"
        placeholder="Search posts..."
        className="form-control"
      />

      <button className="btn btn-danger">
        + New Post
      </button>

    </div>
  );
}

export default PostToolbar;
