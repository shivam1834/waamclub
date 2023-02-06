import axios from 'axios';

export const signup = async (res) => {
    const response = await axios.post('https://aviraspices.in/api/web/register', res);
    return response.data;
}

export const login = async (res) => {
    const response = await axios.post('https://aviraspices.in/api/web/login', res);
    return response.data;
}
