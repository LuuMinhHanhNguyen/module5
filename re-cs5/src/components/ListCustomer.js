import { useState } from "react";
import { deleteCustomer, searchCustomers } from "../service/customerService";
import { Link } from "react-router-dom";
import swal from "sweetalert";

export default function ListCustomer() {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(0);
  let searchInfo = document.querySelector(".search")
    ? document.querySelector(".search").value
    : "";

  useState(() => {
    handleSearch();
  }, [page]);

  async function handleSearch() {
    searchInfo = document.querySelector(".search")
      ? document.querySelector(".search").value
      : "";
    setPage(0);
    const response = await searchCustomers(searchInfo, page, 2);
    setCustomers(response);
  }

  async function handlePreviousPage() {
    searchInfo = document.querySelector(".search")
      ? document.querySelector(".search").value
      : "";
    console.log(searchInfo);
    const prevPage = page - 1;
    if (page > 0) {
      const data = await searchCustomers(searchInfo, prevPage, 2);
      setCustomers(data);
      setPage(prevPage);
    }
  }

  async function handleNextPage() {
    searchInfo = document.querySelector(".search")
      ? document.querySelector(".search").value
      : "";
    console.log(searchInfo);
    const nextPage = page + 1;
    const data = await searchCustomers(searchInfo, nextPage, 2);

    if (data.length > 0) {
      setCustomers(data);
      setPage(nextPage);
    }
  }

  function handleDelete(id, name) {
    swal({
      title: "Are you sure to delete this customer?",
      text: name,
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        deleteCustomer(id).then(() => {
          handleSearch();
        });

        swal("Successfully deleted!", "", "success");
      }
    });
  }

  return (
    <>
      <section className="ftco-section">
        <div className="container my-5">
          <div className=" col">
            <input
              type="text"
              placeholder="Search for name:"
              className=" form-control w-25 d-inline search"
            ></input>
            <button
              type="button"
              className="btn btn-info mx-3 "
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
          <div className="row justify-content-center">
            <div className="col-md-6 text-center mb-2">
              <h1 className="heading-section">Customer List</h1>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <h4 className="text-center mb-4">
                Sroll left to see more details in small screen!
              </h4>
              <div className="table-responsive">
                <table className="table table-hover">
                  <thead className="thead-primary">
                    <tr className=" table-info">
                      <th>No.</th>
                      <th>Name</th>
                      <th>DOB</th>
                      <th>Address</th>
                      <th>Phone</th>
                      <th>Customer Type</th>
                      <th>Gender</th>
                      <th>ID Card</th>
                      <th>Edit</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {customers.length > 0 &&
                      customers.map((customer, index) => {
                        return (
                          <tr key={`room_${index}`}>
                            <td>{index + 1}</td>
                            <td>{customer.name}</td>
                            <td>{customer.dob}</td>
                            <td>{customer.address}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.customerType.name}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.idCard}</td>
                            <td>
                              <Link to={`/customers/edit/${customer.id}`}>
                                <i className="fa fa-solid fa-pen"></i>
                              </Link>
                            </td>
                            <td>
                              <button
                                type="button"
                                onClick={() =>
                                  handleDelete(customer.id, customer.name)
                                }
                              >
                                <i class="fa fa-solid fa-trash"></i>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="row align-items-center justify-content-center py-5">
        <div className="col-lg-6 text-center">
          <div className="custom-pagination">
            <button onClick={handlePreviousPage} className="btn btn-info">
              Previous
            </button>
            <span> {page} </span>
            <button onClick={handleNextPage} className="btn btn-info">
              Next
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
