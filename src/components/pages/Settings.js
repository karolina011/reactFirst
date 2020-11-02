import React, {Component} from 'react';
import PropTypes from 'prop-types';
import BasePlayerController from "./BasePlayerController";
import PlayersTable from "./players/playersTable";

export class Settings extends BasePlayerController {

    render() {
        return (
            <div className="App-container">
                <h1>ADD PLAYERS</h1>
                <div className="row m-md-5">
                    <div id="addPlayerContainer" className="col-md-5 offset-md-1">
                        <h2 className="headline">New Player</h2>
                        <div id="addPlayerBox" className="bg-light text-dark p-md-4 mt-md-4 rounded ">
                            <form>
                                <div className="form-group text-left">
                                    <label  htmlFor="playerName">Name</label>
                                    <input type="text" className="form-control" id="playerName"
                                           placeholder="Palyer Name"/>
                                </div>
                                <button type="submit" className="btn appBtn">Submit</button>
                            </form>
                        </div>
                    </div>

                    <div id="currentPlayers" className="col-md-5 offset-md-1">
                        <h2 className="headline">Current Players</h2>
                        <PlayersTable players={this.state.players}/>
                    </div>
                </div>
            </div>
        );
    }
}

Settings.propTypes = {};

export default Settings;