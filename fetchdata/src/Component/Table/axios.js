import axios from "axios";

const API = axios.create({
    baseURL : "https://data.covid19india.org/data.json"
});

export default API;