import axios from "axios";

const apiUrl = "http://localhost:5000/api/v1";

const http = axios.create({
  baseURL: apiUrl,
  timeout: 45000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const privateHttp = axios.create({
  baseURL: apiUrl,
  timeout: 45000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

privateHttp.interceptors.request.use(
  async (req) => {
    const token = localStorage.getItem("accessToken");
    console.log(token);
    return req;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAllDeaneries = () => http.get("/deanery/");
