import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3001/api";

export const instance = axios.create({
  baseURL: API_URL,
  timeout: 3000,
});
