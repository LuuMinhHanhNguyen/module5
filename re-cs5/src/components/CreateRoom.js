import { useEffect, useState } from "react";
import { getFacilityTypes } from "../service/facilityType";
import { addFacility } from "../service/facility";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";

export default function CreateRoom() {
  const [types, setTypes] = useState([]);
  const navigate = useNavigate();

  async function getTypesFromAPI() {
    const data = await getFacilityTypes();
    setTypes(data);
  }

  async function createFacility(values, setErrors) {
    const newFacility = {
      ...values,
      facilityType:
        values.facilityType.length == 0
          ? null
          : JSON.parse(values.facilityType),
    };

    try {
      const res = await addFacility(newFacility);
      swal("Successfully added!", "", "success");
      navigate("/");
    } catch (error) {
      if (error.response && error.response.data) {
        console.log("hi");
        console.log(error);
        console.log(JSON.stringify(error.response));
        console.log(error.response.data);
        setErrors(error.response.data);
      }
    }
  }

  useEffect(() => {
    getTypesFromAPI();
  }, []);
  return (
    <>
      {types.length > 0 && (
        <Formik
          initialValues={{
            name: "",
            area: "",
            cost: "",
            capacity: "",
            image: "",
            facilityType: "",
          }}
          // validationSchema={yup.object({
          //   name: yup.string().required("Please enter facility name here!"),
          //   area: yup.number().required("Please fill in area of usage!"),
          //   cost: yup.number().required("Please fill in cost of hiring!"),
          //   capacity: yup.number().required("Please choose capacity!"),
          //   image: yup
          //     .string()
          //     .required("Please fill in image path! (images/img_2.jpg)"),
          //   type: yup.string().required("Please choose type of hiring!"),
          // })}
          onSubmit={(values, { setErrors }) =>
            createFacility(values, setErrors)
          }
        >
          <div className="page-wrapper bg-secondary p-t-180 p-b-100 font-robo">
            <div className="wrapper wrapper--w960">
              <div className="card card-2">
                <div className="card-heading"></div>
                <div className="card-body">
                  <h2 className="title">Create New Facility</h2>
                  <Form>
                    <div className="mb-3">
                      <label htmlFor="name" className="label">
                        Facility's Name
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
                      <label htmlFor="image" className="label">
                        Facility's Image
                      </label>
                      <Field
                        type="text"
                        id="image"
                        name="image"
                        className=" form-control"
                      />
                      <ErrorMessage
                        name="image"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="area" className="label">
                        Using Area
                      </label>
                      <Field
                        type="number"
                        id="area"
                        name="area"
                        className=" form-control"
                      />
                      <ErrorMessage
                        name="area"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="cost" className="label">
                        Hiring Cost
                      </label>
                      <Field
                        type="number"
                        id="cost"
                        name="cost"
                        className=" form-control"
                      />
                      <ErrorMessage
                        name="cost"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="capacity" className="label">
                        Capacity
                      </label>
                      <Field
                        type="number"
                        id="capacity"
                        name="capacity"
                        className=" form-control"
                      />
                      <ErrorMessage
                        name="capacity"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div className="mb-3">
                      <label htmlFor="facilityType" className="label">
                        Type Of Facility
                      </label>
                      <Field
                        as="select"
                        id="facilityType"
                        name="facilityType"
                        className=" form-control"
                      >
                        <option value="">--Select type here--</option>
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
                        name="facilityType"
                        component="span"
                        className="error"
                      />
                    </div>

                    <div></div>

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
      )}
    </>
  );
}
