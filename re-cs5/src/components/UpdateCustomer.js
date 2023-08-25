import { useNavigate, useParams } from "react-router-dom";
import { getCustomer, updateCustomer } from "../service/customerService";
import { getAllCustomerTypes } from "../service/customerType";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import * as yup from "yup";
import swal from "sweetalert";

export default function UpdateCustomer() {
  const { id } = useParams();
  const [types, setTypes] = useState([]);
  const [customer, setCustomer] = useState({});
  const navigate = useNavigate();
  console.log(id);

  async function findCustomer(id) {
    const data = await getCustomer(id);
    console.log(data.name);
    setCustomer(data);
  }

  async function getAllTypes() {
    const data = await getAllCustomerTypes();
    setTypes(data);
  }

  function handleUpdate(customer) {
    console.log(customer.name);
    updateCustomer({
      ...customer,
      customerType: JSON.parse(customer.customerType),
    });
    swal("Successfully updated!", "", "success");
    navigate("/customers");
  }

  useEffect(() => {
    getAllTypes();
    findCustomer(id);
  }, [id]);

  return (
    <>
      {customer.name && (
        <Formik
          initialValues={{
            ...customer,
            customerType: JSON.stringify(customer.customerType),
          }}
          validationSchema={yup.object({
            name: yup.string().required("Please enter your name here!"),
            dob: yup.string().required("Please fill in your DOB!"),
            address: yup.string().required("Please fill in your address!"),
            email: yup.string().required("Please fill in your email!"),
            phone: yup.string().required("Please fill in your phone!"),
            gender: yup.string().required("Please choose your gender!"),
            customerType: yup.string().required("Choose customer type please!"),
            idCard: yup.string().required("ID card here!"),
          })}
          onSubmit={(values) => handleUpdate(values)}
        >
          <div className="page-wrapper bg-secondary p-t-180 p-b-100 font-robo">
            <div className="wrapper wrapper--w960">
              <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                  <h2 className="title">Update Customer</h2>
                  <Form>
                    <Field type="hidden" name="id" value={customer.id} />
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
                        <label
                          htmlFor="female"
                          className="label  d-inline-block"
                        >
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
                          name="customerType"
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
                        Update
                      </button>
                    </div>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </Formik>
      )}
    </>
  );
}
