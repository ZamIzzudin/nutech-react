/** @format */

import axios from "axios";

export default (() => {
  const BASE_URL = "https://take-home-test-api.nutech-integrasi.com";

  // axios.defaults.withCredentials = true;
  axios.defaults.headers.post["Content-Type"] = "application/json";
  axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";

  async function register(email, first_name, last_name, password) {
    const url = BASE_URL + "/registration";

    const response = await axios.post(url, {
      email,
      first_name,
      last_name,
      password,
    });

    return response;
  }

  async function login(email, password) {
    const url = BASE_URL + "/login";

    const response = await axios.post(url, { email, password });

    return response;
  }

  async function getProfile() {
    const url = BASE_URL + "/profile";

    const response = await axios.get(url);

    return response;
  }

  return { register, login, getProfile };
})();
