import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class BasePlayerController extends Component {

    state = {
        players: [
            {
                id: 1,
                name: 'namee123',
                score: 12
            }
        ]
    };

    /**
     * Add Player
     *
     * @param playerName
     */
    addPlayer = (playerName) => {
        const newPlayer = {
            id:  playerName + Math.floor(Math.random() * 10000),
            name: playerName,
            score: 25,
        };

        this.setState({players: [...this.state.players, newPlayer]})
    };

    /**
     * Remove Player
     *
     * @param id
     */
    removePlayer = (id) => {
        this.setState({players: this.state.players.filter(player => player.id !== id)})
    };

}

BasePlayerController.propTypes = {};

export default BasePlayerController;