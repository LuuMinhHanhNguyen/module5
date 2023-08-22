import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { posts } from "../data/data";
import { useNavigate, useParams } from "react-router-dom";
import { format } from "date-fns";

export default function UpdateBlog(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  console.log("ID" + id);
  console.log(JSON.stringify(posts));
  console.log(props.details);

  useEffect(() => {
    const editedBlog = posts.find((el) => el.id == id);
    setBlog(editedBlog);
  }, [id]);

  const handleSubmit = (values) => {
    const time = format(new Date(), "MMMM dd, yyyy pp");
    const updatedBlog = {
      ...values,
      slug: values.title.toLowerCase().replaceAll(" ", "-"),
      updatedAt: time,
    };
    const index = posts.findIndex((el) => el.id == values.id);
    if (index !== -1) {
      posts.splice(index, 1, updatedBlog);
    }

    alert("Updated successfully!");
    navigate("/posts");
  };

  return (
    <>
      {blog.title && (
        <div className=" container-sm">
          <h1>{props.details ? "Post Details" : "Update Post"}</h1>
          <Formik
            initialValues={{
              ...blog,
            }}
            validationSchema={yup.object({
              title: yup.string().required("Please fill in title!"),
              category: yup.string().required("Please fill in category!"),
              content: yup.string().required("Please fill in content!"),
              author: yup.string().required("Please fill in author!"),
              author_email: yup
                .string()
                .matches(
                  /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  "Incorret format!"
                )
                .required("Please fill in author's email!"),
            })}
            onSubmit={(values) => handleSubmit(values)}
          >
            <Form>
              <div>
                <label htmlFor="title">Title:</label>
                <Field
                  type="text"
                  readOnly={props.details}
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
                  readOnly={props.details}
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
                <label htmlFor="content">Content:</label>
                <Field
                  readOnly={props.details}
                  type="text"
                  id="content"
                  name="content"
                  className=" form-control"
                ></Field>
                <ErrorMessage
                  name="content"
                  component="span"
                  className=" text-danger"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="author">Author:</label>
                <Field
                  readOnly={props.details}
                  type="text"
                  id="author"
                  name="author"
                  className=" form-control"
                ></Field>
                <ErrorMessage
                  name="author"
                  component="span"
                  className=" text-danger"
                ></ErrorMessage>
              </div>
              <div>
                <label htmlFor="author_email">Author's Email:</label>
                <Field
                  readOnly={props.details}
                  type="text"
                  id="author_email"
                  name="author_email"
                  className=" form-control"
                ></Field>
                <ErrorMessage
                  name="author_email"
                  component="span"
                  className=" text-danger"
                ></ErrorMessage>
              </div>
              {!props.details && (
                <button type="submit" className=" btn btn-info">
                  Update
                </button>
              )}
            </Form>
          </Formik>
        </div>
      )}
    </>
  );
}
