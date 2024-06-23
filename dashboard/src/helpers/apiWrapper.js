import axios from "axios";
import { notify } from 'notiwind';

const BASEURL = `${import.meta.env.VITE_API_URL}`;

export async function apiHelper(apiName, formData) {
    try {
        const response = await axios.post(`${BASEURL}/${apiName}`, formData);

        if (response.status >= 200 && response.status < 300) {
            return response;
        } else {
            notify(
                {
                    group: 'foo',
                    title: `Request failed with status ${response.status}`
                },
                1500
            );
            console.error(`Request failed with status ${response.status}`);
            return null;
        }

    } catch (error) {
        console.error("Request failed:", error);
        notify(
            {
                group: 'foo',
                title: `Request failed: ${error.message}`
            },
            1500
        );
        throw error;
    }
}
