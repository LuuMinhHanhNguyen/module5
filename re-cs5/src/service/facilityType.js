import axios from "axios";

export async function getFacilityTypes() {
  const response = await axios.get("http://localhost:8080/facilityTypes");
  return response.data;
}
