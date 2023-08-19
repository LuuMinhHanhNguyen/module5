import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import { getAllCustomerTypes } from "../service/customerType";
import { addCustomer } from "../service/customerService";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

export default function CreateCustomer() {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  async function getAllTypesFrom() {
    const data = await getAllCustomerTypes();
    setTypes(data);
  }

  async function createCustomer(values) {
    addCustomer({ ...values, customerType: JSON.parse(values.customerType) });
    swal("Successfully added!", "", "success");
    navigate("/customers");
  }

  useEffect(() => {
    getAllTypesFrom();
  }, []);

  return (
    <>
      <Formik
        initialValues={{
          name: "",
          dob: "",
          address: "",
          email: "",
          phone: "",
          gender: "",
          customerType: "",
          idCard: "",
        }}
        validationSchema={yup.object({
          name: yup.string().required("Please enter your name here!"),
          dob: yup.string().required("Please fill in your DOB!"),
          address: yup.string().required("Please fill in your address!"),
          email: yup
            .string()
            .matches(
              /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
              "Incorret format!"
            )
            .required("Please fill in your email!"),
          phone: yup
            .string()
            .matches(/^[0][0-9]{9}$/, "Incorrect format (0123456789)!")
            .required("Please fill in your phone!"),
          gender: yup.string().required("Please choose your gender!"),
          customerType: yup
            .string()
            .min(1)
            .required("Please choose your gender!"),
          idCard: yup
            .string()
            .matches(/^[0-9]{10}$/, "10-digit number!")
            .required("ID card here!"),
        })}
        onSubmit={(values) => createCustomer(values)}
      >
        <div className="page-wrapper bg-secondary p-t-180 p-b-100 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading"></div>
              <div className="card-body">
                <h2 className="title">Create New Customer</h2>
                <Form>
                  <div className="mb-3">
                    <label htmlFor="name" className="label">
                      Name
                    </label>
                    <Field
                      type="text"
                      id="name"
                      name="name"
                      className=" form-control"
                    />
                    <ErrorMessage
                      name="name"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="dob" className="label">
                      DOB
                    </label>
                    <Field
                      type="date"
                      id="dob"
                      name="dob"
                      className=" form-control"
                    />
                    <ErrorMessage
                      name="dob"
                      component="span"
                      className="error"
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="address" className="label">
                      Address
                    </label>
                    <Field
                      type="text"
                      id="address"
                      name="address"
                      className=" form-control"
                    />
                    <ErrorMessage
                      name="address"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="label">
                      Email
                    </label>
                    <Field
                      type="text"
                      id="email"
                      name="email"
                      className=" form-control"
                    />
                    <ErrorMessage
                      name="email"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="phone" className="label">
                      Phone
                    </label>
                    <Field
                      type="text"
                      id="phone"
                      name="phone"
                      className=" form-control"
                    />
                    <ErrorMessage
                      name="phone"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="idCard" className="label">
                      ID Card
                    </label>
                    <Field
                      type="text"
                      id="idCard"
                      name="idCard"
                      className=" form-control"
                    />
                    <ErrorMessage
                      name="idCard"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div
                    style={{ display: "flex" }}
                    className=" align-items-center"
                  >
                    <label className="label">Gender:</label>
                    <div style={{ display: "flex", margin: "1rem" }}>
                      <label htmlFor="female" className="label  d-inline-block">
                        Female
                      </label>
                      <Field
                        id="female"
                        type="radio"
                        name="gender"
                        value="female"
                        className=" d-inline mx-2"
                      ></Field>
                    </div>

                    <div style={{ display: "flex", margin: "1rem" }}>
                      <label htmlFor="male" className="label">
                        Male
                      </label>
                      <Field
                        id="male"
                        type="radio"
                        name="gender"
                        value="male"
                        className=" d-inline mx-2"
                      ></Field>
                    </div>

                    <div>
                      <ErrorMessage
                        name="gender"
                        component="span"
                        className="error"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="customerType" className="label ">
                      Customer Type:
                    </label>
                    <Field
                      as="select"
                      name="customerType"
                      className="form-control-sm mx-3"
                    >
                      <option value="">-Choose type here-</option>
                      {types.length > 0 &&
                        types.map((type, index) => {
                          return (
                            <option
                              key={`key_${index}`}
                              value={`${JSON.stringify(type)}`}
                            >
                              {type.name}
                            </option>
                          );
                        })}
                    </Field>
                    <ErrorMessage
                      name="customerType"
                      component="span"
                      className="error"
                    />
                  </div>

                  <div className="p-t-30">
                    <button
                      className="btn btn--radius btn--green"
                      type="submit"
                    >
                      Create
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </Formik>
    </>
  );
}
