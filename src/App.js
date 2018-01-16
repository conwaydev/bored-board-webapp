import React, {Component} from 'react';
import {HashRouter as Router, Link, Route} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './App.scss';

import ThreadList from './components/ThreadList/ThreadList';
import ThreadPost from './components/ThreadPost/ThreadPost';
import UserProfile from './components/UserProfile/UserProfile';
import NavigationBar from './components/NavigationBar/NavigationBar';
import Login from './components/Login/Login';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    id: 457,
                    name: 'CoolGuy420',
                    bio: 'Im so dope i am the best'
                }
            ]
        };
    }

    render() {
        return (
            <MuiThemeProvider>
                <Router>
                    <div>
                        <header>
                            <NavigationBar />
                        </header>

                        <main>
                            <Route 
                                exact={true} 
                                path="/"
                                onEnter={requireAuth}
                                render={() => <ThreadList threads={this.state.threads} />} 
                            />

                            <Route
                                path="/login"
                                component={Login}
                            />

                            <Route
                                path="/thread/:id"
                                component={ThreadPost}
                            />

                            <Route
                                path="/user/:id"
                                render={({match}) => (
                                    <UserProfile
                                        {...this.state.users.find(user => user.id === parseInt(match.params.id))}
                                    />
                                )}
                            />
                        </main>
                    </div>
                </Router>
            </MuiThemeProvider>
        );
    }
}

function requireAuth(nextState, replace) {
    if (!sessionStorage.jwt) {
        replace({
            pathname: '/login',
            state: { nextPathname: nextState.location.pathname }
        });
    }
}

export default App;
