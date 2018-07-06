import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Timestamp from 'react-timestamp';
import { connect } from 'react-redux';

class ThreadList extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='container'>
                <ul>
                    {this.props.threads.map(thread => {
                        return (
                            <li key={thread.Id}>
                                <h3>
                                    <Link to={
                                            { 
                                                pathname: `/thread/${thread.Id}`, 
                                                state: { threadId: thread.Id }
                                            }
                                        }>
                                        { thread.Title }
                                    </Link>
                                </h3>

                                <p>
                                    <Link to={`/user/${thread.UserId}`}>
                                        
                                    </Link>
                                    on <Timestamp time={thread.PostedAt} format="full" />
                                </p>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

ThreadList.propTypes = {
    threads: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        threads: state.threads
    };
}

export default connect(mapStateToProps)(ThreadList);
