import axios from 'axios';

export const UpdatePercentage = async (res) => {
    const response = await axios.post('https://www.waamclub.com/admin/api/web/setPer', res);
    console.log(response.data,res)
    return response.data;
}