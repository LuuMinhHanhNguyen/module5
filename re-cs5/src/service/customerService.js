import axios from "axios";

// export async function getAllCustomers(page) {
//   const response = await axios.get(
//     `http://localhost:8080/customers?_page=${page}&_limit=5`
//   );

//   return response.data;
// }

export async function searchCustomers(name, page, limit) {
  const response = await axios.get(
    `http://localhost:8080/customers/search?name=${name}&page=${page}&limit=${limit}`
  );
  console.log("log");
  console.log(JSON.stringify(response));
  return response.data.content;
}

export async function addCustomer(customer) {
  await axios.post("http://localhost:8080/customers", customer);
}

export async function getCustomer(id) {
  const response = await axios.get(`http://localhost:8080/customers/${id}`);
  return response.data;
}

export async function updateCustomer(customer) {
  await axios.put(`http://localhost:8080/customers/${customer.id}`, customer);
}

export async function deleteCustomer(id) {
  await axios.delete(`http://localhost:8080/customers/${id}`);
}
