import axios from "axios";

export const axiosInstance = axios.create({
  baseURL:
    import.meta.env.MODE === "development"
      ? "http://localhost:5001/api"
      : "https://realtime-chatting-app-mern.vercel.app/api",
  withCredentials: true,
});

// declare global {
//     interface ImportMeta {
//         env: {
//             MODE: string;
//         };
//     }
// }
