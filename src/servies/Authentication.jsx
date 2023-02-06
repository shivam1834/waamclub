import axios from 'axios';

export const signup = async (res) => {
    const response = await axios.post('https://www.waamclub.com/admin/api/web/register', res);
    return response.data;
}

export const login = async (res) => {
    const response = await axios.post('https://www.waamclub.com/admin/api/web/login', res);
    return response.data;
}