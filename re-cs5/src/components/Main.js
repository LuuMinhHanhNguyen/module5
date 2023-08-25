import React, { useEffect, useState } from "react";
import { getAll, deleteFacility } from "../service/facility";
import { Link } from "react-router-dom";
import swal from "sweetalert";
export default function Main() {
  const [facilities, setFacilities] = useState([]);
  const [page, setPage] = useState(1);

  async function findAll() {
    const data = await getAll();
    setFacilities(data);
  }

  function handleDelete(id, name) {
    swal({
      title: "Are you sure to delete this facility?",
      text: name,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteFacility(id).then(() => {
          findAll();
        });
        swal("Successfully deleted!", "", "success");
      }
    });
  }

  useEffect(() => {
    findAll();
  }, []);

  return (
    <>
      <div className="section section-properties">
        <div className="container">
          <div className="row">
            {facilities.length > 0 &&
              facilities.map((facility, index) => {
                return (
                  <div
                    key={`key_${index}`}
                    className="col-xs-12 col-sm-6 col-md-6 col-lg-4"
                  >
                    <div className="property-item mb-30">
                      <a href="property-single.html" className="img">
                        <img
                          src={facility.image}
                          alt="Image"
                          className="img-fluid"
                        />
                      </a>

                      <div className="property-content">
                        <div className="price mb-2">
                          <span>$ {facility.cost}</span>
                        </div>
                        <div>
                          <span className="city d-block mb-3">
                            {facility.name}
                          </span>
                          <div className=" d-flex justify-content-between mb-3">
                            <p>Capacity: {facility.capacity}</p>
                            <p>Area: {facility.area} m2</p>
                            <p>Type: {facility.type.name}</p>
                          </div>

                          <Link
                            to={`/facilities/edit/${facility.id}/${facility.name}`}
                            className="btn btn-primary py-1 px-3"
                          >
                            Update
                          </Link>
                          <button
                            type="button"
                            className="btn btn-danger py-1 px-3 mx-3"
                            onClick={() =>
                              handleDelete(facility.id, facility.name)
                            }
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
          <div className="row align-items-center py-5">
            <div className="col-lg-3">Pagination (1 of 10)</div>
            <div className="col-lg-6 text-center">
              <div className="custom-pagination">
                <button className=" btn btn--green">Previous</button>
                <span> {page} </span>
                <button className=" btn btn--green">Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
