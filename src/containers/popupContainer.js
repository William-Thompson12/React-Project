import { connect } from 'react-redux';
import { resetGame } from '../actions';
import Popup from '../components/popupScreen';

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
        resetGameClick: () => {
            dispatch(resetGame());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);