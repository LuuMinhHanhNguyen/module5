import axios from "axios";

export async function getProducts(search, typeId, page, limit) {
  let url = `http://localhost:8080/products?name=${search}&typeId=${typeId}&page=${page}&limit=${limit}`;

  const res = await axios.get(url);
  return res.data.content;
}

export async function findProduct(id) {
  const res = await axios.get("http://localhost:8080/products/" + id);
  return res.data;
}

export async function updateProduct(product) {
  await axios.put(`http://localhost:8080/products/${product.id}`, product);
}

export async function addProduct(product) {
  await axios.post("http://localhost:8080/products", product);
}

export async function deleteProduct(id) {
  await axios.delete("http://localhost:8080/products/" + id);
}
