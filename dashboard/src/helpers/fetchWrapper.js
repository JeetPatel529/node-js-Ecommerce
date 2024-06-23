// function showNetworkStatusMessage(online) {
//     const alertStore = useAlertStore();
//     if (online) {
//         alertStore.success("Back online");
//     }
//     else {
//         alertStore.error('Network error. Please check your internet connection.');
//     }
// }

// window.addEventListener('online', () => showNetworkStatusMessage(true));
// window.addEventListener('offline', () => showNetworkStatusMessage(false));


export const fetchWrapper = {
    get: request('GET'),
    post: request('POST'),
    put: request('PUT'),
    delete: request('DELETE')
};

function request(method) {
    return async (url, body) => {
        const requestOptions = {
            method,
            // headers: authHeader(url)
        };
        if (body) {
            // requestOptions.headers['Content-Type'] = 'application/json';
            // requestOptions.body = JSON.stringify(body);
            requestOptions.body = body;
        }
        try {

            // return fetch(url, requestOptions).then(handleResponse);

            const response = await fetch(url, requestOptions);
            return handleResponse(response);

        } catch (error) {
            return Promise.reject('Network error. Please check your internet connection.');
        }
    }
}

// helper functions

// function authHeader(url) {
//     // return auth header with jwt if user is logged in and request is to the api url
//     // const { user } = useAuthStore();
//     // const isLoggedIn = !!user?.token;
//     const isApiUrl = url.startsWith(import.meta.env.VITE_API_URL);
//     if (isLoggedIn && isApiUrl) {
//         return { Authorization: `${user.token}` };
//     } else {
//         return {};
//     }
// }

async function handleResponse(response) {
    const isJson = response.headers?.get('content-type')?.includes('application/json');
    const data = isJson ? await response.json() : null;

    // Api Response Null At That Time Error Message
    // if (data === null) {
    //     const error = 'Server error: No valid response data';
    //     return Promise.reject(error);
    // }

    // check for error response
    // if (!response.ok) {
    //     const { user, logout } = useAuthStore();
    //     if ([401, 403].includes(response.status) && user) {
    //         // auto logout if 401 Unauthorized or 403 Forbidden response returned from api
    //         logout();
    //     }

    //     // get error message from body or default to response status
    //     const error = (data && data.message) || response.status;
    //     return Promise.reject(error);
    // }

    // Token Expire logout and redirect to login page
    // if (data.message === "Unauthorized User") {
    //     // Logout and redirect to login
    //     const { user, logout } = useAuthStore();
    //     if (user) {
    //         logout();
    //         router.push({ name: 'Login' });
    //     }
    //     const error = 'Token error: Your Token Expire Please login!';
    //     return Promise.reject(error);
    // }

    return data;
}