import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BasePlayerController from "./BasePlayerController";
import PlayersTable from "./players/playersTable";
import CreatingPlayerBox from "./players/CreatingPlayerBox";
import {Link} from "react-router-dom";

export class Settings extends BasePlayerController {

    render() {
        return (
            <div className="App-container">
                <h1>ADD PLAYERS</h1>
                <div className="row m-md-5">
                    <div id="addPlayerContainer" className="col-md-5 offset-md-1">
                        <h2 className="headline">New Player</h2>
                        <CreatingPlayerBox addPlayer={this.addPlayer}/>
                        <Link to='/dashboard'>
                            <button className="btn appBtn py-md-3 px-md-4 my-md-5">Start Game</button>
                        </Link>
                    </div>

                    <div id="currentPlayers" className="col-md-5 offset-md-1">
                        <h2 className="headline">Current Players</h2>
                        <PlayersTable players={this.state.players} removePlayer={this.removePlayer}/>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {};

export default Settings;