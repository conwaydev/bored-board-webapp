import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import PropTypes from 'prop-types';
import * as auth from '../../auth/authentication';
import { connect } from 'react-redux';
import { userActions } from '../../actions';

class Login extends Component {
    constructor(props) {
        super(props);
        
        this.props.dispatch(userActions.logout());

        this.state = {
            submitted: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });

        const data = new FormData(event.target);
        let body = JSON.stringify({ 
            username: data.get("username"), 
            password: data.get("password")
        });

        const { dispatch } = this.props;

        dispatch(userActions.login(body))
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

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(Login);
