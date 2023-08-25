import axios from "axios";

export async function getAllCustomers(page) {
  const response = await axios.get(
    `http://localhost:8080/customers?_page=${page}&_limit=2`
  );
  return response.data;
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
