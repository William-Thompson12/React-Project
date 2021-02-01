import { combineReducers } from 'redux';
import { defaultState } from './store'; 
import {
    PUSH_PATTERN, 
    START_GAME,
    CHECK_WINNER,
    RESET_GAME,
    GLOW,
    NEXT_ROUND,
    nextRound,
    glow
} from './actions';

function patternReducer(state=[], action) {
    switch(action.type){
        case START_GAME: {
            let number = [];
            for(let i = 0; i <= 8; i++) {
                number.push(Math.floor(Math.random() * (10 - 1) + 1));
            }
            console.log('running next round')
            nextRound()
            return [
                ...number
            ]
        }
        case CHECK_WINNER:{
            let playerPattern = action.payload.playerPattern
            let round = action.payload.round
            if(playerPattern === state.slice(0, round - 1)) {
                if(playerPattern.length === 9) {
                    //Display Winner
                    console.log('winner')
                } else {
                    glow(round++);
                    nextRound();
                }
            } else {
                //Display Loser
                console.log('loser')
            }
            return state;
        }
        case GLOW: {
            let round = action.payload.round
            const computerArr = state.slice(0, round - 1)
            computerArr.forEach(button => {
                document.getElementById(`${button}`).classList.add('glow');
            })
            setTimeout(() => computerArr.forEach(button => {
                document.getElementById(`${button}`).classList.remove("glow");
            }), 1100)
            return state;
        }
        default:
            return state;
    }
}

function playerPatternReducer(state=[], action) {
    switch(action.type){
        case PUSH_PATTERN: {
            return action.payload.playerPattern
        }
        case RESET_GAME: {
            return defaultState.playerPattern;
        }
        default:
            return state;
    }
}

function roundReducer(state=0, action) {
    switch(action.type){
        case NEXT_ROUND: {
            console.log(state, 'next round')
            return state++;
        }
        case RESET_GAME: {
            return defaultState.round;
        }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    pattern: patternReducer,
    playerPattern: playerPatternReducer,
    round: roundReducer
})

