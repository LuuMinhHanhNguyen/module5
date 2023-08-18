import React from "react";
import { posts } from "../data/data";
import { Modal, Button } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { format } from "date-fns";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: posts,
      createModal: false,
      updateModal: false,
      formData: {},
      errors: {},
    };
  }

  handleDelete = (id) => {
    let cf = window.confirm(`Are u sure to delete ID ${id} ?`);
    if (cf) {
      this.setState((prev) => ({
        ...prev,
        blogs: prev.blogs.filter((el) => el.id !== id),
      }));
    }
  };

  handleEdit = (el) => {
    this.setState((prev) => ({
      ...prev,
      createModal: true,
      updateModal: true,
      formData: el,
    }));
  };

  closeCreateModal = () => {
    this.setState((prev) => ({
      ...prev,
      createModal: false,
      formData: {},
      updateModal: false,
    }));
  };

  openCreateModal = () => {
    this.setState((prev) => ({ ...prev, createModal: true }));
  };

  handleOnChange = (event) => {
    this.setState((prev) => ({
      ...prev,
      formData: { ...prev.formData, [event.target.name]: event.target.value },
    }));
  };

  handleValidate = () => {
    let error = {};
    let formData = this.state.formData;
    let isValid = true;
    if (!formData.title) {
      error.title = "Please fill in title!";
      isValid = false;
    }
    if (!formData.category) {
      error.category = "Please fill in category!";
      isValid = false;
    }
    if (!formData.content) {
      error.content = "Please fill in content!";
      isValid = false;
    }

    this.setState((prev) => ({ ...prev, errors: error }));
    return isValid;
  };

  handleSubmit = () => {
    if (this.handleValidate()) {
      const slug = this.state.formData.title.replaceAll(" ", "-");
      const time = format(new Date(), "MMMM dd, yyyy pp");
      if (this.state.formData.id) {
        const updatedBlog = {
          ...this.state.formData,
          updatedAt: time,
        };
        this.setState((prev) => ({
          ...prev,
          blogs: prev.blogs.map((el) => {
            return el.id === this.state.formData.id ? updatedBlog : el;
          }),
          updateModal: false,
          createModal: false,
          formData: {},
        }));
      } else {
        const unique_id = uuid();
        const small_id = unique_id.slice(0, 5);
        const newBlog = {
          id: small_id,
          title: this.state.formData.title,
          slug: slug,
          category: this.state.formData.category,
          content: this.state.formData.content,
          updatedAt: time,
        };
        this.setState((prev) => ({
          ...prev,
          blogs: [...prev.blogs, newBlog],
          createModal: false,
          formData: {},
        }));
        console.log(JSON.stringify(this.state.blogs));
      }
    }
  };

  render() {
    return (
      <>
        <div className=" container my-2">
          <button
            className=" btn btn-outline-info mb-3"
            onClick={this.openCreateModal}
          >
            Create
          </button>
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
              {this.state.blogs.map((el, index) => {
                return (
                  <tr key={`key_${el.id}`}>
                    <td>{index + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.category}</td>
                    <td>{el.updatedAt}</td>
                    <td>
                      <button
                        onClick={() => this.handleEdit(el)}
                        className=" btn btn-dark"
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => this.handleDelete(el.id)}
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

        <Modal show={this.state.createModal} onHide={this.closeCreateModal}>
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
                <small className=" text-danger">
                  {this.state.errors.title}
                </small>
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
}

export default Blog;
