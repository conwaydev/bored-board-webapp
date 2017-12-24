import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Timestamp from 'react-timestamp';

class ThreadList extends Component {

    constructor() {
        super();
        this.state = { threads: [] };
    }

    componentDidMount() {
        fetch(`http://localhost:8000/threads`)
            .then(result => result.json())
            .then(threads => this.setState({threads}));
    }

    render() {
        return (
            <div className='container'>
                <ul>
                    {this.state.threads.map(thread => {
                        return (
                            <li key={thread.Id}>
                                <h3>
                                    <Link to={`/thread/${thread.Id}`}>
                                        {thread.Title}
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

export default ThreadList;
