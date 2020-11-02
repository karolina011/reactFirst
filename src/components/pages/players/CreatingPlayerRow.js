import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CreatingPlayerRow extends Component {


    render() {

        const { id, name } = this.props.player;
        return (
            <tr>
                <td>{name}</td>
                <td><button className="btn btn-dark">X</button></td>
            </tr>
        );
    }
}

CreatingPlayerRow.propTypes = {};

export default CreatingPlayerRow;