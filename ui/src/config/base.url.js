import axios from "axios";

const baseUrl = axios.create({
    baseURL: 'http://localhost:4000/api',
    headers: {'Content-Type': 'application/json'},
})

export default baseUrl;