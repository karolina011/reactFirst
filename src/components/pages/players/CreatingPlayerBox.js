import React, {Component} from 'react';
import PropTypes from 'prop-types';

export class CreatingPlayerBox extends Component {

    state = {
      newPlayer: ''
    };

    onChange = (e) => this.setState({newPlayer: e.target.value});

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addPlayer(this.state.newPlayer);
        this.setState({newPlayer: ''})
    };

    render() {
        return (
            <div id="addPlayerBox" className="bg-light text-dark p-md-4 mt-md-4 rounded ">
                <form onSubmit={this.onSubmit}>
                    <div className="form-group text-left">
                        <label  htmlFor="playerName">Name</label>
                        <input type="text"
                               className="form-control"
                               id="playerName"
                               placeholder="Palyer Name"
                               value={this.state.newPlayer}
                               onChange={this.onChange}/>
                    </div>
                    <button type="submit" className="btn appBtn">Submit</button>
                </form>
            </div>
        );

    }
}

CreatingPlayerBox.propTypes = {};

export default CreatingPlayerBox;