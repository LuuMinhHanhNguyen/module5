import axios from "axios";

export async function getAllCustomerTypes() {
  const response = await axios.get("http://localhost:8080/customerType");
  return response.data;
}
