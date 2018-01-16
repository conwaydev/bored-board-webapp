import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthService from '../../services/AuthService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        let body = JSON.stringify({ 
            username: data.get("username"), 
            password: data.get("password")
        });
        
        AuthService.login(body)
            .then(response => {
                sessionStorage.setItem("jwt", response.token);
            })
            .catch(error => {
                throw(error);
            });
    }

    render() { 
        return (
        <div>
            <form onSubmit={this.handleSubmit}>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    name="username"
                />
                <br/>
                <TextField
                    type = "password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    name="password"
                />
                <br/>
                <RaisedButton 
                    label="Login" 
                    primary={true}
                    type="submit"
                />
            </form>
        </div>
        );
    }
}

export default Login;
