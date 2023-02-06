import axios from 'axios';

export const CreateAgent = async (res) => {
    const response = await axios.post('https://www.waamclub.com/admin/api/web/createAgent', res);
    console.log(response.data,res)
    return response.data;
}