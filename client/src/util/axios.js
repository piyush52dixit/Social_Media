import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "http://localhost:5555/api/",
  withCredentials: true,
});
