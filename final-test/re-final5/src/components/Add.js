import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getTypes } from "../service/TypeService";
import { updateProduct, addProduct } from "../service/Product";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function Add() {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  const getAllTypes = async () => {
    const data = await getTypes();
    setTypes(data);
  };

  const handleSubmit = async (values, setErrors) => {
    try {
      console.log(typeof values.date);
      const res = await addProduct({
        ...values,

        type: values.type.length == 0 ? null : JSON.parse(values.type),
      });
      swal("Created successfully!", "", "success");
      navigate("/");
    } catch (err) {
      console.log(err);
      if (err.response.data) setErrors(err.response.data);
    }
  };

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <>
      <div className=" container">
        <h1>Create Product</h1>

        <Formik
          initialValues={{
            code: "",
            name: "",
            date: "",
            total: 0,
            type: "",
          }}
          // validationSchema={yup.object({
          //   name: yup.string().max(100),
          //   total: yup.number().min(1),
          // })}
          onSubmit={(values, { setErrors }) => handleSubmit(values, setErrors)}
        >
          <Form>
            <div className=" my-1">
              <label htmlFor="code">Product Code:</label>
              <Field
                type="text"
                id="code"
                name="code"
                className=" form-control-sm"
              ></Field>
              <ErrorMessage
                name="code"
                component="span"
                className=" text-danger"
              ></ErrorMessage>
            </div>
            <div className=" my-1">
              <label htmlFor="name">Product Name:</label>
              <Field
                type="text"
                id="name"
                name="name"
                className=" form-control-sm"
              ></Field>
              <ErrorMessage
                name="name"
                component="span"
                className=" text-danger"
              ></ErrorMessage>
            </div>
            <div className=" my-1">
              <label htmlFor="date">Date:</label>
              <Field
                type="date"
                id="date"
                name="date"
                className=" form-control-sm"
              ></Field>
              <ErrorMessage
                name="date"
                component="span"
                className=" text-danger"
              ></ErrorMessage>
            </div>

            <div className=" my-1">
              <label htmlFor="total">Total:</label>
              <Field
                type="number"
                id="total"
                name="total"
                className=" form-control-sm"
              ></Field>
              <ErrorMessage
                name="total"
                component="span"
                className=" text-danger"
              ></ErrorMessage>
            </div>

            <div className=" my-1">
              <label htmlFor="types">Total:</label>
              <Field
                as="select"
                id="types"
                name="type"
                className=" form-control-sm"
              >
                <option value="">-Choose Type-</option>
                {types.length > 0 &&
                  types.map((el) => {
                    return (
                      <option
                        key={`key_${el.id}`}
                        value={`${JSON.stringify(el)}`}
                      >
                        {el.name}
                      </option>
                    );
                  })}
              </Field>
              <ErrorMessage
                name="type"
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
