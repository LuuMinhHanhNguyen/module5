import React, { useState } from "react";
import { posts } from "../data/data";
import { Link } from "react-router-dom";

export default function Blog() {
  const data = posts;
  console.log(JSON.stringify(data));
  const [blogs, setBlogs] = useState(data);

  const handleDelete = (id) => {};

  return (
    <>
      <div className=" container my-2">
        <Link to="posts/new" className=" btn btn-outline-info mb-3">
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
            </tr>
          </thead>
          <tbody>
            {blogs &&
              blogs.map((el, index) => {
                return (
                  <tr key={`key_${el.id}`}>
                    <td>{index + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.category}</td>
                    <td>{el.updatedAt}</td>
                    <td>
                      <Link
                        to={`posts/edit/${el.id}`}
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
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
}
