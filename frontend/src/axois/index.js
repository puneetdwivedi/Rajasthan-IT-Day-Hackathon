import axios from "axios";
import store from "../store/index.js";

const axiosInstance = axios.create({
    baseURL: "http://localhost:5000"
})


const axiosInstanceWithHeader = axios.create({
    baseURL: "http://localhost:5000"

})
axiosInstanceWithHeader.interceptors.request.use((config) => {
    const token = store.getState().userReducer.accessToken;
    config.headers.Authorization = token;
    return config;
})
export {
    axiosInstance,
    axiosInstanceWithHeader
};