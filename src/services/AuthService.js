class AuthService {
    login(username, password) {
        return fetch('http://localhost:8000/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })})
            .then(response => {
                return response.json();
            })
            .catch(error => {
                return error;
            });
    }
}

export default new AuthService();