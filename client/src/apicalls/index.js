import axios from 'axios'
import Cookies from 'js-cookie';



const axiosInstance = axios.create({
    headers: {
        credentials: 'include',
        'Content-Type': "application/json",
        
    }
})
axiosInstance.interceptors.request.use(config => {
    const token = Cookies.get('token'); // Retrieve token from cookie
    if (token) {
        config.headers.Authorization = `Bearer ${token}`; // Set Authorization header
    }
    return config;
}, error => {
    return Promise.reject(error);
});

export { axiosInstance };