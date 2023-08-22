import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getPosts, addPost } from "../service/PostService";
import { Modal } from "react-bootstrap";

export default function Post() {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  async function getAllPosts() {
    const data = await getPosts();
    setPosts(data);
  }
  const handleSubmit = (values) => {
    addPost({ ...values, slug: values.title.toLowerCase().replace(" ", "-") });
    alert("Successfully added!");
    setIsOpen(false);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <>
      <div className=" container my-2">
        <h1>List Posts</h1>
        <button
          onClick={() => setIsOpen(true)}
          className=" btn btn-outline-info mb-3"
        >
          Create
        </button>
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
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              title: "",
              category: "",
              thumbnail_url: "",
            }}
            validationSchema={yup.object({
              title: yup.string().required("Please fill in title!"),
              category: yup.string().required("Please fill in category!"),
              thumbnail_url: yup
                .string()
                .required("Please fill in thumbnail URL!"),
            })}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <div>
                <label htmlFor="title">Title:</label>
                <Field
                  type="text"
                  id="title"
                  name="title"
                  className=" form-control"
                ></Field>
                <ErrorMessage
                  name="title"
                  component="span"
                  className=" text-danger"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="category">Category:</label>
                <Field
                  type="text"
                  id="category"
                  name="category"
                  className=" form-control"
                ></Field>
                <ErrorMessage
                  name="category"
                  component="span"
                  className=" text-danger"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="thumbnail_url">Thumbnail URL:</label>
                <Field
                  type="text"
                  id="thumbnail_url"
                  name="thumbnail_url"
                  className=" form-control"
                ></Field>
                <ErrorMessage
                  name="thumbnail_url"
                  component="span"
                  className=" text-danger"
                ></ErrorMessage>
              </div>
              <br />
              <button type="submit" className=" btn btn-info">
                Create
              </button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
