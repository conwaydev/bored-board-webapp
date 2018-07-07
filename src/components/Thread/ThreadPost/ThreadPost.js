import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import WebSocket from 'react-websocket';
import { connect } from 'react-redux';
import { threadActions } from '../../../actions/index';

class ThreadPost extends Component {

    constructor(props) {
        super(props);

        this.props.dispatch(threadActions.loadPosts(this.props.threadId));
    }

    // handleSocket(data) {
    //     let result = JSON.parse(data);
    //     if (result.ThreadId == this.props.match.params.id) {
    //         this.setState({posts: this.state.posts.concat([result])});
    //     }
    // }

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
