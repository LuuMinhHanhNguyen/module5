import React, { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../service/Product";
import { Link } from "react-router-dom";
import { getTypes } from "../service/TypeService";
import swal from "sweetalert";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchInfo, setSearchInfo] = useState("");
  const [searchType, setSearchType] = useState("");
  const [types, setTypes] = useState([]);
  const [page, setPage] = useState(0);
  const limit = 4;

  const getAll = async () => {
    const data = await getProducts(searchInfo, searchType, page, limit);
    setProducts(data);
  };
  const getAllTypes = async () => {
    const data = await getTypes();
    setTypes(data);
  };

  const handleSearch = () => {
    const temp = document.querySelector("#search").value;
    setSearchInfo(temp);
    setPage(0);
  };

  const handleSearchType = () => {
    const temp = document.querySelector("#search-type").value;
    setSearchType(temp);
    setPage(0);
  };

  const handlePrevious = () => {
    if (page > 0) {
      const prevPage = page - 1;
      setPage(prevPage);
    }
  };

  const handleNext = async () => {
    const nextPage = page + 1;
    const data = await getProducts(searchInfo, searchType, nextPage, limit);
    if (data.length > 0) {
      setPage(nextPage);
    }
  };

  const handleDelete = (id) => {
    swal({
      title: "Are u sure to delete product with ID " + id,
      text: "This action cannot be undone!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then(async (cf) => {
      if (cf) {
        await deleteProduct(id);
        setPage(0);
        swal("Deleted successfully!", "", "success");
      }
    });
  };

  useEffect(() => {
    getAll();
  }, [searchInfo, searchType, page]);

  useEffect(() => {
    getAllTypes();
  }, []);

  return (
    <>
      <div class=" container">
        <div>
          <div>
            <h1 class="text-center my-2">Clothing Store Management</h1>
          </div>
          <div class=" d-flex justify-content-between my-3">
            <div>
              <form className=" d-flex">
                <select id="search-type" className=" form-control d-inline">
                  <option value="">--Choose Type--</option>
                  {types.length > 0 &&
                    types.map((el) => {
                      return (
                        <option key={`key_${el.id}`} value={el.id}>
                          {el.name}
                        </option>
                      );
                    })}
                </select>
                <button
                  onClick={handleSearchType}
                  className=" d-inline btn btn-success d-inline-block"
                  type="button"
                >
                  Search
                </button>
              </form>
            </div>
            <Link to="/add" className=" btn btn-info">
              Add New Product
            </Link>
            <div class=" d-flex">
              <input
                type="text"
                id="search"
                placeholder="Enter your search field here!"
                class=" form-control"
              ></input>
              <button class="btn btn-success " onClick={handleSearch}>
                Search
              </button>
            </div>
          </div>
        </div>
        {products.length > 0 ? (
          <table class=" table table-hover">
            <thead class=" table-success">
              <tr>
                <th>No.</th>
                <th>Product Code</th>
                <th>Name</th>
                <th>Date</th>
                <th>Total</th>
                <th>Type</th>
                <th>ACtion</th>
              </tr>
            </thead>
            <tbody>
              {products.length > 0 &&
                products.map((el, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{el.code}</td>
                      <td>{el.name}</td>
                      <td>{el.date}</td>
                      <td>{el.total}</td>
                      <td>{el.type.name}</td>
                      <td>
                        <Link
                          to={`/update/${el.id}`}
                          className=" btn btn-success"
                        >
                          Update
                        </Link>
                        <button
                          type="button"
                          className=" btn btn-danger mx-3"
                          onClick={() => handleDelete(el.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        ) : (
          <h2 className=" text-danger"> No product to show!</h2>
        )}

        <div class="buttons text-center">
          <button class=" btn btn-outline-info" onClick={handlePrevious}>
            Previous
          </button>
          <h5 class=" d-inline"> {page + 1} </h5>
          <button class=" btn btn-outline-info" onClick={handleNext}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}
