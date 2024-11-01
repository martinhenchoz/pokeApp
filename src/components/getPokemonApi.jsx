import axios from "axios";

export const getPokemonApi = async (url) => {
    const resp = await axios.get(url);
    const data = await resp.data;
    return data;
};