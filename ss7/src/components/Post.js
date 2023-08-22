import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPosts } from "../service/PostService";
import { Modal } from "react-bootstrap";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function getAllPosts() {
    const data = await getPosts();
    setPosts(data);
  }

  useEffect(() => {
    getAllPosts();
  }, [posts]);

  return (
    <>
      <div className=" container my-2">
        <h1>List Posts</h1>
        <Link to="/posts/new" className=" btn btn-outline-info mb-3">
          Create
        </Link>
        <table className=" table">
          <thead className=" table-dark">
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Slug</td>
              <td>Category</td>
              <td>Thumbnail URL</td>
            </tr>
          </thead>
          <tbody>
            {posts.length > 0 &&
              posts.map((el, index) => {
                return (
                  <tr key={`key_${el.id}`}>
                    <td>{index + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.slug}</td>
                    <td>{el.category}</td>
                    <td>{el.thumbnail_url}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Modal show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            {this.state.updateModal ? "Update Blog" : "Create New Blog"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              name="title"
              className=" form-control"
              onChange={this.handleOnChange}
              value={this.state.formData.title ?? ""}
            />
            {this.state.errors.title && (
              <small className=" text-danger">{this.state.errors.title}</small>
            )}
            <br />
            <label htmlFor="category">Category:</label>
            <input
              type="text"
              id="category"
              name="category"
              className=" form-control"
              onChange={this.handleOnChange}
              value={this.state.formData.category ?? ""}
            />
            {this.state.errors.category && (
              <small className=" text-danger">
                {this.state.errors.category}
              </small>
            )}
            <br />
            <label htmlFor="content">Content:</label>
            <input
              type="text"
              id="content"
              name="content"
              className=" form-control"
              onChange={this.handleOnChange}
              value={this.state.formData.content ?? ""}
            />
            {this.state.errors.content && (
              <small className=" text-danger">
                {this.state.errors.content}
              </small>
            )}
            <br />
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            onClick={this.handleSubmit}
            className=" btn btn-info"
          >
            {this.state.updateModal ? "Update" : "Add New"}
          </button>
          <button
            className=" btn btn-secondary"
            onClick={this.closeCreateModal}
          >
            Cancel
          </button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
