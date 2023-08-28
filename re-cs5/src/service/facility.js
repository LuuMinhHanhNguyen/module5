import axios from "axios";

export async function addFacility(facility) {
  await axios.post("http://localhost:8080/facilities", facility);
}

export async function getAll(page) {
  const response = await axios.get(
    `http://localhost:8080/facilities?_page=${page}&_limit=3`
  );
  console.log("uouo");
  console.log(JSON.stringify(response));
  return response.data;
}

export async function getFacility(id) {
  const response = await axios.get("http://localhost:8080/facilities/" + id);
  return response.data;
}

export async function updateFacility(facility) {
  await axios.put("http://localhost:8080/facilities/" + facility.id, facility);
}

export async function deleteFacility(id) {
  await axios.delete("http://localhost:8080/facilities/" + id);
}
