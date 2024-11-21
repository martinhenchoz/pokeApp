import axios from "axios";

export const getPokemonApi = async (url) => {
    const options = {
        method: 'GET',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        url
    };
    const resp = await axios(options)
    const data = await resp.data
    return data
};