import axios from "axios";

const http = axios.create({
  baseURL: "https://api.cyonadclagos.org/api/v1",
  timeout: 45000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
const privateHttp = axios.create({
  baseURL: "https://api.cyonadclagos.org/api/v1",
  timeout: 45000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

privateHttp.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.token = ` ${JSON.parse(localStorage.getItem("user")).token}`;
    console.log(req.headers.token);
  }
  return req;
});

//AUTH
//AUTH
export const loginUser = (payload) => http.post("/user/login", payload);
export const postParish = (payload) => privateHttp.post("/parish/new", payload);
export const updateParish = ({ parishId, parishData }) =>
  privateHttp.put(`/parish/${parishId}`, parishData);
export const postDeanery = (payload) =>
  privateHttp.post("/deanery/new", payload);
export const fetchAllPaidParishByDeanery = (deaneryId) =>
  http.get(`/deanery/${deaneryId}/paid-parishes`);
export const fetchAllParish = () => http.get("/parish/");
export const fetchUsers = () => http.get("/user/all");
export const fetchAllDeaneries = () => http.get("/deanery/");
export const fetchParishById = (id) => http.get(`/parish/${id}`);
export const aydDelegateRegistration = (payload) =>
  http.post(`/delegate/new`, payload);
export const getAllAydDelegates = (payload) => http.get(`/delegate/`, payload);
// export const signUp = (payload) => http.post("/register", payload);
