import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { format } from "date-fns";
import axios from "axios";
import Router from "next/router";

export default function NewBlog() {
  const handleSubmit = (values) => {
    const time = format(new Date(), "MMMM dd, yyyy pp");
    const newBlog = {
      ...values,
      slug: values.title.toLowerCase().replaceAll(" ", "-"),
      updatedAt: time,
    };
    axios.post("http://localhost:8080/posts", newBlog);

    alert("Successfully created!");
    Router.back();
  };

  return (
    <>
      <div className=" container-sm">
        <h1>Create New Post</h1>
        <Formik
          initialValues={{
            title: "",
            category: "",
            content: "",
            author: "",
            author_email: "",
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
              <label htmlFor="content">Content:</label>
              <Field
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
            <button type="submit" className=" btn btn-info">
              Create
            </button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
