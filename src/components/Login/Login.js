import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import AuthService from '../../services/AuthService';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={username: '', password: ''}
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onUserNameChange = this.onUserNameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        AuthService.login(this.state.username, this.state.password)
            .then(response => {
                sessionStorage.setItem("jwt", response.token);
            })
            .catch(error => {
                throw(error);
            });
    }

    onUserNameChange(event) {
        this.setState({username: event.target.value});
    }

    onPasswordChange(event) {
        this.setState({password: event.target.value});
    }

    render() { 
        return (
        <div>
                <TextField
                    hintText="Enter your Username"
                    floatingLabelText="Username"
                    value={this.state.username}
                    onChange={this.onUserNameChange}
                />
                <br/>
                <TextField
                    type = "password"
                    hintText="Enter your Password"
                    floatingLabelText="Password"
                    value={this.state.password}
                    onChange={this.onPasswordChange}
                />
                <br/>
                <RaisedButton 
                    label="Login" 
                    primary={true}
                    onClick={this.handleSubmit}
                />
        </div>
        );
    }
}

export default Login;
