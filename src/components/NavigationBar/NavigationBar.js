import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

class NavigationBar extends Component {
    
    constructor() {
        super();
    }

    render() {
        return (
            <AppBar
                title="VLV"
                iconElementRight={<FlatButton label="Login" containerElement={<Link to="/login" />}/>}
            />
        );
    }
}

export default NavigationBar;
