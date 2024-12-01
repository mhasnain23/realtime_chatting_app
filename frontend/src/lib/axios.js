import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development" ? process.env.BASE_URL : "/api",
  withCredentials: true,
});

// declare global {
//     interface ImportMeta {
//         env: {
//             MODE: string;
//         };
//     }
// }
