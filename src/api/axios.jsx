import axios from "axios";
const getRefreshToken = require("../utils/token");

const Instance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_BASE_URL}`,
  timeout: 10000,
  // headers: {
  //   access_token: cookies.get("access_token"),
  // },
});

Instance.interceptors.request.use(
  (config) => {
    const { method, url } = config;
    console.log(`[API - REQUEST] ${method.toUpperCase()} ${url}`);

    let token = null;

    if (config.url === process.env.REACT_APP_REFRESH_URL) {
      token = localStorage.getItem("refreshToken");
    } else {
      token = localStorage.getItem("accessToken");
    }

    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers["Content-Type"] = "application/json";

    return config;
  },
  (error) => {
    const { method, url } = error.config;
    console.log(`[API - REQUEST ERROR] ${method.toUpperCase()} ${url}`);

    return Promise.reject(error);
  }
);

Instance.interceptors.response.use(
  (response) => {
    const { method, url } = response.config;
    const status = response.status;
    const { code, message } = response.data;

    if (status === 404) {
      console.log(
        `[API - RESPONSE 404] ${method.toUpperCase()} ${url} | ${code} : ${message}`
      );
    }

    return response;
  },
  async (error) => {
    if (error.response) {
      const { config } = error;
      const { method, url } = config;
      const status = error.response.status;

      if (status === 401) {
        console.log(
          `[API - RESPONSE 401] ${method.toUpperCase()} ${url} | ${status} : ${
            error.message
          } | refresh Token`
        );

        const accessToken = await getRefreshToken();
        config.headers.Authorization = `Bearer ${accessToken}`;

        return axios(config);
      } else {
        console.log(
          `[API - RESPONSE ERROR] ${method.toUpperCase()} ${url} | ${status} : ${
            error.message
          }`
        );
        return Promise.reject(error);
      }
    }
  }
);

module.exports = Instance;
