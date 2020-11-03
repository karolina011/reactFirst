import React, {Component} from 'react';
import CreatingPlayerBox from "./CreatingPlayerBox";
import PlayerRow from "./PlayerRow";
import PropTypes from 'prop-types';

export class PlayersTable extends Component {



    render() {
        return (
            <table className="table table-striped bg-light p-md-4 mt-md-4 rounded ">
                {this.props.players.map((player) => (
                <PlayerRow key={player.id} player={player} removePlayer={this.props.removePlayer}/>
                ))}
            </table>
        );
    }
}

PlayersTable.propTypes = {};

export default PlayersTable;