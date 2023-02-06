import axios from 'axios';

export const UpdatePercentage = async (res) => {
    const response = await axios.post('https://aviraspices.in/api/web/SetPer', res);
    console.log(response.data,res)
    return response.data;
}
