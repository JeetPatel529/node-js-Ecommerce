import axios from "axios";
import { notify } from 'notiwind'

const BASEURL = `${import.meta.env.VITE_API_URL}`;

export async function apiHelper(apiName, formData) {
    try {
        const response = await axios.post(`${BASEURL}/${apiName}`, formData);

        if (response) {
            return response;
        }
        else {
            notify(
                {
                    group: 'foo',
                    title: `${response}`
                },
                1500
            )
        }

    } catch (error) {
        console.error(error);
    }
}
