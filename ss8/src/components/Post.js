import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  getPostsFetch,
  createPost,
  deletePost,
  updatePost,
} from "../redux/action";

export default function Post() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postsReducer.posts);
  const [isReloaded, setIsReloaded] = useState(true);
  const [updatedPost, setUpdatedPost] = useState({});

  const handleSubmit = (values) => {
    const post = {
      ...values,
      slug: values.title.toLowerCase().replaceAll(" ", "-"),
    };
    if (values.id) {
      dispatch(updatePost(post));
      alert("Successfully updated!");
      setUpdatedPost({});
    } else {
      dispatch(createPost(post));
      alert("Successfully added!");
    }

    setIsReloaded((prev) => !prev);
    setIsOpen(false);
  };

  const handleDelete = (id) => {
    const cf = window.confirm("Are u sure to delete ID " + id + " ?");
    if (cf) dispatch(deletePost(id));
    setIsReloaded((prev) => !prev);
  };

  const handleUpdate = (el) => {
    setUpdatedPost(el);
    setIsOpen(true);
  };
  // const showPosts = () => {
  //   dispatch(getPostsFetch());
  // };

  useEffect(() => {
    dispatch(getPostsFetch());
  }, [isReloaded]);

  return (
    <>
      <div className=" container my-2">
        <h1>List Posts</h1>
        {/* <button onClick={showPosts} className=" btn btn-info mb-3">
          Show Posts
        </button> */}
        <button
          onClick={() => setIsOpen(true)}
          className=" btn btn-outline-info mb-3"
        >
          Create
        </button>
        <table className=" table table-bordered table-fixed">
          <thead className=" table-dark">
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Slug</td>
              <td>Category</td>
              <td>Thumbnail URL</td>
              <td>Action</td>
              <td>Action</td>
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
                    <td>
                      <button
                        onClick={() => handleDelete(el.id)}
                        className=" btn btn-danger"
                      >
                        DELETE
                      </button>
                    </td>
                    <td>
                      <button
                        onClick={() => handleUpdate(el)}
                        className=" btn btn-success"
                      >
                        UPDATE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
      <Modal
        show={isOpen}
        onHide={() => {
          setIsOpen(false);
          setUpdatedPost({});
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {updatedPost.id ? "Update Post" : "Create New Post"}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={
              updatedPost.id
                ? { ...updatedPost }
                : {
                    title: "",
                    category: "",
                    thumbnail_url: "",
                  }
            }
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
                {updatedPost.id ? "Update" : "Create"}
              </button>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}
