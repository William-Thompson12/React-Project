import Board from '../components/board';
import { connect } from 'react-redux';

import { glow, pushPattern, checkWinner, startGame, resetGame } from '../actions';

function mapStateToProps(state) {
    return {
        // propName seen by React : value-in-state
        playerPattern: state.playerPattern,
        pattern: state.pattern
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        handleClick: (buttonValue, pattern) => {
            dispatch(pushPattern(buttonValue, pattern));
        },
        checkWinnerClick: (arrayValues, pattern) => {
            dispatch(checkWinner(arrayValues, pattern));
        },
        startGameClick: () => {
            dispatch(startGame());
        },
        resetGameClick: () => {
            dispatch(resetGame());
        },
        glow: () => {
            dispatch(glow());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);