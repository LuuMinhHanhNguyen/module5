import React, { useState } from "react";
import { posts } from "../data/data";
import { Link } from "react-router-dom";

export default function Blog() {
  const [blogs, setBlogs] = useState(posts);

  const handleDelete = (id) => {
    const cf = window.confirm(`Are u sure to delete post ID ${id}`);
    if (cf) {
      setBlogs((prev) => prev.filter((el) => el.id !== id));
      alert("Deleted!");
    }
  };

  return (
    <>
      <div className=" container my-2">
        <Link to="/posts/new" className=" btn btn-outline-info mb-3">
          Create
        </Link>
        <table className=" table">
          <thead className=" table-dark">
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Category</td>
              <td>Time</td>
              <td>Action</td>
              <td>Action</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((el, index) => {
                return (
                  <tr key={`key_${el.id}`}>
                    <td>{el.id}</td>
                    <td>{el.title}</td>
                    <td>{el.category}</td>
                    <td>{el.updatedAt}</td>
                    <td>
                      <Link
                        to={`/posts/edit/${el.id}`}
                        className=" btn btn-dark"
                      >
                        Edit
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDelete(el.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <Link
                      to={`/posts/details/${el.id}`}
                      className=" btn btn-info"
                    >
                      Details
                    </Link>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
