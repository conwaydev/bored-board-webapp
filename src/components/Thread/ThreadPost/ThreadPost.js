import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import WebSocket from 'react-websocket';
import { connect } from 'react-redux';
import { threadActions } from '../../../actions/index';
import config from 'react-global-configuration';

class ThreadPost extends Component {

    constructor(props) {
        super(props);

        this.state = {
            baseUrl: config.get('WS_ROOT')
        }
        this.props.dispatch(threadActions.loadPosts(this.props.threadId));
    }

    handleSocket(data) {
        let result = JSON.parse(data);
        console.log('Message recieved');
        console.log(data);
        if (result.ThreadId == this.props.threadId) {
            this.props.dispatch(threadActions.recievePost(data));
        }
    }

    render() {
        return (
            <div className="posts">
                <ul>
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
                </ul>

                <WebSocket url={'ws://' + this.state.baseUrl + '/ws'}
                    onMessage={this.handleSocket.bind(this)} />
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps)(ThreadPost);
