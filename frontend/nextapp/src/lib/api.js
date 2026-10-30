import axios from "axios";
import { clearSession } from "./auth";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

api.interceptors.request.use((config) => {
  if (typeof window !== "undefined") {
    const token = window.localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const status = error.response?.status;
    const isLoginRequest = error.config?.url?.includes("/api/login");
    if (typeof window !== "undefined" && status === 401 && !isLoginRequest) {
      clearSession();
      window.location.assign("/admin");
    }
    return Promise.reject(error);
  }
);

export const login = (email, password) =>
  api.post("/api/login", { email, password });

export const registerUser = (data) => api.post("/api/register", data);

export const getUsers = () => api.get("/api/users");

export const getDrawings = () => api.get("/api/drawings/");

// FormData: let axios set the multipart boundary itself.
export const uploadDrawing = (formData) =>
  api.post("/api/upload_drawings/", formData);

export const getBooks = () => api.get("/api/books/");

export const createBook = (payload) => api.post("/api/books/", payload);

export const deleteBook = (id) => api.delete(`/api/books/${id}/`);

export const generateBook = (id) => api.post("/api/generate_book", { id });

// Public classroom/school rollups for the teacher onboarding flow.
// school is a URL slug (see src/lib/classrooms.js slugify); grade and year
// are optional and narrow the response to one classroom.
export const getSchoolSummary = ({ school, grade, year }) => {
  const params = new URLSearchParams({ school });
  if (grade) params.set("grade", grade);
  if (year) params.set("year", String(year));
  return api.get(`/api/school_summary/?${params.toString()}`);
};

export const sponsorPay = (formData) => api.post("/api/sponsor_pay", formData);

export const requestSchool = (data) => api.post("/api/school_request", data);

export default api;
