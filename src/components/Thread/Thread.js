import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import WebSocket from 'react-websocket';
import ThreadReply from './ThreadReply/ThreadReply';
import ThreadPost from './ThreadPost/ThreadPost';
import { connect } from 'react-redux';
import config from 'react-global-configuration';
import { threadActions } from '../../actions/index';

class Thread extends Component {

    constructor(props) {
        super(props);

        let { id } = props.match.params;

        this.props.dispatch(threadActions.loadThread(id));
    }

    render() {
        return (
            <div className='container'>
                <header>
                    <h1>
                        {this.props.thread.Title }
                    </h1>
                </header>
                <ThreadPost
                    threadId={ this.props.thread.Id }
                    >
                </ThreadPost>
                <ThreadReply 
                    userId={this.props.thread.UserId} 
                    threadId={this.props.thread.Id}
                    >
                </ThreadReply>

                {/* <WebSocket url='ws://localhost:8000/ws' 
                    onMessage={this.handleSocket.bind(this)} /> */}
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        thread: state.thread,
        posts: state.posts
    };
}

export default connect(mapStateToProps)(Thread);
