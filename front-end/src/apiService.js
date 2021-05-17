import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_API,
  headers: {
    "Content-Type": "application/json",
  },
});

/**
 * console.log all requests and responses
 */
api.interceptors.request.use(
  (config) => {
    console.log("Starting Request", config);
    const token = localStorage.getItem("token");
    console.log(token);
    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }
    return config;
  },
  function (error) {
    console.log("REQUEST ERROR", error);
  }
);

api.interceptors.response.use(
  (response) => {
    console.log("Response:", response);
    if (response.data && response.data && response.data.accessToken) {
      localStorage.setItem("token", response.data.accessToken);
    }
    return response;
  },
  function (error) {
    error = error.response.data;
    console.log("RESPONSE ERROR", error);
    return Promise.reject({ message: error.message });
  }
);

export default api;
