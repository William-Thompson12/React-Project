import Board from '../components/board';
import { connect } from 'react-redux';

import { startGame, resetGame, glow, nextRound } from '../actions';

function mapStateToProps(state) {
    console.log(state)
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
        startGameClick: (winningRound) => {
            dispatch(startGame(winningRound));
        },
        resetGameClick: () => {
            dispatch(resetGame());
        },
        glow: () => {
            dispatch(glow());
        },
        nextRound: () => {
            dispatch(nextRound());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);