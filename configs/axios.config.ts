import axiosInstance from "axios";

const axios = axiosInstance.create({
    baseURL : "https://google.com"
});

export default axios;