import { environment } from "@/app/environment/environment.client";
import axios from "axios";

export const api = axios.create({
  baseURL: environment.apiUrl,
  withCredentials: true, // Set to false if you don't want to use cite cookies
});
