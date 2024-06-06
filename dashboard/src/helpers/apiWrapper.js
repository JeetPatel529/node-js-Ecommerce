import axios from "axios";

const BASEURL = `${import.meta.env.VITE_API_URL}`;

export async function apihelper(apiName, formData) {
    try {
        const response = await axios.post(`${BASEURL}${apiName}`, formData);

        if (response) {
            return response;
        }
    } catch (error) {
        console.error(error);
    }
}
