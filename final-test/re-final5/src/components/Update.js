import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { getTypes } from "../service/TypeService";
import { findProduct, updateProduct } from "../service/Product";
import { useNavigate, useParams } from "react-router-dom";
import swal from "sweetalert";

export default function Update() {
  const [product, setProduct] = useState({});
  const [types, setTypes] = useState([]);
  const param = useParams();
  const navigate = useNavigate();

  const getProduct = async () => {
    const data = await findProduct(param.id);
    setProduct(data);
  };
  const getAllTypes = async () => {
    const data = await getTypes();
    setTypes(data);
  };

  const handleSubmit = async (values, setErrors) => {
    try {
      const res = await updateProduct({
        ...values,
        
        type: JSON.parse(values.type),
      });
      swal("Updated successfully!", "", "success");
      navigate("/");
    } catch (err) {
      if (err.response.data) setErrors(err.response.data);
    }
  };

  useEffect(() => {
    getProduct();
    getAllTypes();
    console.log();
  }, [param.id]);

  return (
    <>
      <div className=" container">
        <h1>Update Product</h1>
        {product.id && (
          <Formik
            initialValues={
              product.id && {
                ...product,
                type: JSON.stringify(product.type),
              }
            }
            // validationSchema={yup.object({
            //   name: yup.string().max(100),
            //   total: yup.number().min(1),
            // })}
            onSubmit={(values, { setErrors }) =>
              handleSubmit(values, setErrors)
            }
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
                Update
              </button>
            </Form>
          </Formik>
        )}
      </div>
    </>
  );
}
