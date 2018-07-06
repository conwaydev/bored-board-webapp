import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import WebSocket from 'react-websocket';
import ThreadReply from './ThreadReply/ThreadReply';
import { connect } from 'react-redux';
import config from 'react-global-configuration';
import { threadActions } from '../../actions/index';

class ThreadPost extends Component {

    constructor(props) {
        super(props);

        let { id } = props.match.params;
        
        this.props.dispatch(threadActions.loadThread(id));
        this.props.dispatch(threadActions.loadPosts(id));
    }

    handleSocket(data) {
        let result = JSON.parse(data);
        if (result.ThreadId == this.props.match.params.id) {
            this.setState({posts: this.state.posts.concat([result])});
        }
    }

    render() {
        return (
            <div className='container'>
                <header>
                    <h1>
                        {this.props.thread.Title }
                    </h1>
                </header>
                <div>
                {this.props.posts.map(post => {
                        return (
                            <li key={post.Id} className="post">
                                <p>
                                    <Link to={`/user/${post.UserId}`}>
                                        
                                    </Link>
                                    on <Timestamp time={post.PostedAt} format="full" />
                                </p>
                                <p>
                                    {post.Body}
                                </p>
                            </li>
                        )
                    })}
                </div>
                <ThreadReply 
                    userId={this.props.thread.UserId} 
                    threadId={this.props.thread.Id}
                >
                </ThreadReply>

                <WebSocket url='ws://localhost:8000/ws' 
                    onMessage={this.handleSocket.bind(this)} />
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

export default connect(mapStateToProps)(ThreadPost);
