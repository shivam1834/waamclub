import axios from 'axios';

export const CreateDemat = async (res) => {
    const response = await axios.post('https://www.waamclub.com/admin/api/web/register/demat', res);
    return response.data;
}