import axios from 'axios';
import { getSession } from 'next-auth/react'; // Import from NextAuth

const API = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
});

// Add a request interceptor to include the access token in headers
API.interceptors.request.use(
    async (config) => {
        const session = await getSession(); // Fetch the current session

        if (session?.user?.access_token) {
            config.headers.Authorization = `Bearer ${session.user.access_token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default API;