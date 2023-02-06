import axios from 'axios';

export const CreateAgent = async (res) => {
    const response = await axios.post('https://aviraspices.in/api/web/createAgent', res);
    console.log(response.data,res)
    return response.data;
}
