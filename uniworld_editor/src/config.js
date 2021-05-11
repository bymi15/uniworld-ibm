import axios from "axios";

const axiosConfig = axios.create({
  baseURL: "https://f85e76a9.us-south.apigw.appdomain.cloud",
  headers: {
    "Content-type": "application/json",
  },
});

const platformURL = "https://brianmin.tech/uniworld";

export { axiosConfig, platformURL };
