import React, {Component} from 'react';
import CreatingPlayerRow from "./CreatingPlayerRow";
import PlayerRow from "./PlayerRow";
import PropTypes from 'prop-types';

export class PlayersTable extends Component {



    render() {
        console.log(this.props.players);
        console.log('asdasd');
        return (
            <table className="table table-striped bg-light mt-md-4">
                {this.props.players.map((player) => (
                <CreatingPlayerRow key={player.id} player={player} />
                ))}
            </table>
        );
    }
}

PlayersTable.propTypes = {};

export default PlayersTable;