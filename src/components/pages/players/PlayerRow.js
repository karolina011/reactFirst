import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class PlayerRow extends Component {


    render() {
        const { id, name } = this.props.player;
        return (
            <tr className="appTr">
                <td>{name}</td>
                <td className="text-right"><button onClick={this.props.removePlayer.bind(this, id)} className="btn btn-dark mr-0" >X</button></td>
            </tr>
        );
    }
}

PlayerRow.propTypes = {};

export default PlayerRow;