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

// privateHttp.interceptors.request.use(
//   async (req) => {
//     // const token = await store.getState().auth.accessToken;
//     const token = await store.getState().auth.accessToken;
//     if (token) {
//       req.headers.Authorization = `Bearer ${token}`;
//     }

//     return req;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

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
export const postDeanery = (payload) =>
  privateHttp.post("/deanery/new", payload);
export const fetchAllPaidParishByDeanery = (deaneryId) =>
  http.get(`/deanery/${deaneryId}/paid-parishes`);
export const fetchAllParish = () => http.get("/parish/");
export const fetchUsers = () => http.get("/user/all");
export const fetchAllDeaneries = () => http.get("/deanery/");
export const fetchParishById = (id) => http.post(`/parish/${id}`);
export const aydDelegateRegistration = (payload) =>
  http.post(`/delegate/new`, payload);
export const getAllAydDelegates = (payload) => http.get(`/delegate/`, payload);
// export const signUp = (payload) => http.post("/register", payload);
