import axios from "axios";
import localUserService from "../localUserService";

const BASE_URL = "http://localhost:8080/api";

const configHeaders = () => {
    return {
        token: localUserService.get()?.token
    }
}

const https = axios.create({
    baseURL: BASE_URL,
    headers: configHeaders()
})

export default https;
