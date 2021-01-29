import Board from '../components/board';
import { connect } from 'react-redux';

import { generatePattern, pushPattern } from '../actions';


function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        handleClick: (buttonValue) => {
            dispatch(pushPattern(buttonValue))
        },
        generateAfterClick: () => {
            dispatch(generatePattern())
        }
    }
}

export default connect(null, mapDispatchToProps)(Board);