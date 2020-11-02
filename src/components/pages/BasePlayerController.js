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
    }

    // render() {
    //     return (
    //         <div>
    //
    //         </div>
    //     );
    // }
}

BasePlayerController.propTypes = {};

export default BasePlayerController;