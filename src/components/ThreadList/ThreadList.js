import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';
import { threadActions } from '../../actions'; 

class ThreadList extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.dispatch(threadActions.loadThreads());
    }

    render() {
        return (
            <div className='container'>
                <ul className='threadListUl'>
                    {this.props.threads.map(thread => {
                        return (
                            <li key={thread.Id}>
                                <h3>
                                    <Link to={{ pathname: `/thread/${thread.Id}`}}
                                        >
                                        { thread.Title }
                                    </Link>
                                </h3>
                                
                                <p>
                                    &nbsp;by: <Link to={`/user/${thread.UserId}`}>
                                        {thread.UserName}
                                    </Link> on <Timestamp time={thread.PostedAt} format="full" />
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
        threads: state.threads,
        thread: state.thread,
        posts: state.posts
    };
}

export default connect(mapStateToProps)(ThreadList);
