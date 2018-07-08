import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import * as auth from '../../auth/authentication';
import { connect } from 'react-redux';
import { userActions } from '../../actions/index';
import { history } from '../../helpers/history';

class NavigationBar extends Component {

    constructor(props) {
        super(props);
        
        if (auth.isLoggedIn()) {
            history.push('/');
        }

        this.logOut = this.logOut.bind(this);
    }

    logOut(event) {
        this.props.dispatch(userActions.logout());
    }

    render() {
        return (
            <AppBar
                title="VLV"
                iconElementRight={ 
                    auth.isLoggedIn() ? 
                    <FlatButton label={"Logout " + auth.getUsername()} onClick={this.logOut}/>
                    : <FlatButton label="Login" containerElement={<Link to="/login" />}/>
                }
            />
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        user: state.user
    };
}

export default connect(mapStateToProps)(NavigationBar);
