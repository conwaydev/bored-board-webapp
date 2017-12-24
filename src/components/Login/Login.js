import React, {Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
          username:'',
          password:''
        }
    }

    handleClick(event) {

    }

    render() { 
        return (
        <div>
            <TextField
                hintText="Enter your Username"
                floatingLabelText="Username"
                onChange = {(event,newValue) => this.setState({username:newValue})}
            />
            <br/>
            <TextField
                type = "password"
                hintText="Enter your Password"
                floatingLabelText="Password"
                onChange = {(event,newValue) => this.setState({password:newValue})}
            />
            <br/>
            <RaisedButton 
                label="Submit" 
                primary={true} 
                onClick={(event) => this.handleClick(event)}
            />
        </div>
        );
    }
}

export default Login;
