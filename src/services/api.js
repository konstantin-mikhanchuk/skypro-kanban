import axios from "axios";

export const apiClient = axios.create({
    baseURL: "https://wedev-api.sky.pro/api",
    headers: {
        "Content-Type": "",
    },
});

