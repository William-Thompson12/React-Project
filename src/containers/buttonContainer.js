import { connect } from 'react-redux';
import Buttons from '../components/buttons';

import { resetGame, glow, pushPattern, checkWinner} from '../actions';

function mapStateToProps(state) {
    return {
        // propName seen by React : value-in-state
        playerPattern: state.playerPattern,
        pattern: state.pattern,
        round: state.round
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        handleClick: (buttonValue, pattern) => {
            dispatch(pushPattern(buttonValue, pattern));
        },
        checkWinnerClick: (arrayValues, pattern, round) => {
            dispatch(checkWinner(arrayValues, pattern, round));
        },
        glow: () => {
            dispatch(glow());
        },
        resetGameClick: () => {
            dispatch(resetGame());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);