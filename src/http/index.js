import axios from 'axios';

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

axios.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.error(error);
    }
);

axios.interceptors.response.use(
    (response) => {
        return response;
    },

    (error) => {
        if (error.response.status) {
            switch (error.response.status) {
                case 500:
                    console.log(500);
                    break;
                case 404:
                    console.log(404);
                    break;

                default:
            }
            return Promise.reject(error.response);
        }
    }
);

export function get(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

export function post(url, params = {}) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params)
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}
