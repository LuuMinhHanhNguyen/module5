import axios from "axios";

export async function getTypes() {
  const res = await axios.get("http://localhost:8080/productTypes");
  return res.data;
}
