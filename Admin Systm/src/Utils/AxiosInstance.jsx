import axios from 'axios';
import { useEffect } from 'react';
//"https://api.value-platform.com"
const instance = axios.create({
    baseURL: `http://192.168.11.46:8000`,
});

const AxiosInterceptor = ({ children }) => {
    async function getRefToken() {
        try {
            const response = await axios.get('/encrypt');
            return response.data.encryptedData;
        } catch (error) {
            console.log("error encrypt: ", error);
            return null;
        }
    }

    useEffect(() => {
        const interceptor = instance.interceptors.response.use(
            response => {
                return response;
            },
            error => {
                return Promise.reject(error);
            }
        );

        return () => instance.interceptors.response.eject(interceptor);

    }, []);

    const setHeadersInterceptor = async (config) => {
        const refToken = await getRefToken();

        if (refToken) {
            config.headers['x-encrypted-data'] = refToken;
        }

        const authToken = localStorage.getItem('asefToken');

        if (authToken) {
            config.headers['Authorization'] = `Token ${authToken}`;
        }

        return config;
    };

    instance.interceptors.request.use(setHeadersInterceptor);

    return children;
};

export default instance;
export { AxiosInterceptor };
