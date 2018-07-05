import * as auth from '../auth/authentication';

export const authService = {
    login,
    logout
};

function login(data) {
    return fetch('http://localhost:8000/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
        body: data
        })
        .then(handleResponse)
        .then(user => {
            if (user.token) {
                sessionStorage.setItem('jwt', user.token);
            }
        })
        .catch(error => {
            return error;
        });
}

function logout() {
    auth.logOut();
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }
 
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
 
        return data;
    });
}
