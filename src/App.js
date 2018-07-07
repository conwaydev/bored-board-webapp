import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.scss';

import ThreadList from './components/ThreadList/ThreadList';
import Thread from './components/Thread/Thread';
import UserProfile from './components/UserProfile/UserProfile';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';
import * as auth from './auth/authentication';

import { history } from './helpers/history';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MuiThemeProvider>
                <Router history={history}>
                    <div>
                        <header>
                            <NavigationBar />
                        </header>

                        <main>
                            <Route 
                                exact={true} 
                                path="/"
                                render={() => (
                                    auth.isLoggedIn() ? (
                                        <ThreadList 
                                            threads={this.props.threads}
                                        />
                                    ) : (
                                        <Redirect to="/login" />
                                    )
                                )}
                            />

                            <Route
                                path="/login"
                                component={Login}
                            />

                            <Route
                                path="/thread/:id"
                                render={(props) => (
                                    auth.isLoggedIn() ? (
                                        <Thread 
                                            {...props}
                                        />
                                    ) : (
                                        <Redirect to="/login" />
                                    )
                                )}
                            />
                        </main>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = function(state) {
    return {
        threads: state.threads
    }
}

export default connect(mapStateToProps)(App);
