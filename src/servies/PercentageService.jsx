import axios from 'axios';

export const UpdatePercentage = async (res) => {
    const response = await axios.post('http://aviraspices.in/api/web/setPer', res);
    console.log(response.data,res)
    return response.data;
}