import axios from "axios";

export async function addFacility(facility) {
  await axios.post("http://localhost:8080/facilities", facility);
}

export async function getAll(name, page, limit) {
  const response = await axios.get(
    `http://localhost:8080/facilities/all?name=${name}&page=${page}&limit=${limit}`
  );
  console.log("uouo");
  console.log(JSON.stringify(response));
  return response.data;
}

// export async function getAll(name, page, limit) {
//   const response = await axios.get(
//     `http://localhost:8080/facilities/all?name=${name}&page=${page}&limit=${limit}`
//   );
//   console.log("uouo");
//   console.log(JSON.stringify(response));
//   return response.data.content;
// }

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
