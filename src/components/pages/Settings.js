import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class Settings extends Component {

    render() {
        return (
            <div className="App-container">
                <h1>ADD PLAYERS</h1>
                <div className="row">
                    <div id="addPlayerContainer">

                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {};

export default Settings;