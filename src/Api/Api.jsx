import axios from "axios";

const API = axios.create({
    baseURL:"http://localhost:1997/"
})

export default API;