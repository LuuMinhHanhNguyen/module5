import React from "react";
import { posts } from "../data/data";

class Blog extends React.Component {
  constructor() {
    super();
    this.state = {
      blogs: posts,
    };
  }

  handleDelete = (id) => {
    let cf = window.confirm(`are u sure to delete ID ${id} ?`);
    if (cf) {
      let newArr = [];
      for (const el of posts) {
        if (el.id == id) newArr = posts.filter((el) => el.id != id);
      }
      this.setState(() => {
        
      })
    }
  };

  handleEdit = (id) => {};

  render() {
    return (
      <>
        <div className=" container my-2">
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
              {posts.map((el, index) => {
                return (
                  <tr>
                    <td>{index + 1}</td>
                    <td>{el.title}</td>
                    <td>{el.category}</td>
                    <td>{el.updatedAt}</td>
                    <td>
                      <button
                        onClick={() => this.handleEdit(el.id)}
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
      </>
    );
  }
}

export default Blog;
