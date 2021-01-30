import { combineReducers } from 'redux';
import { defaultState } from './store'; 
import {
    PUSH_PATTERN, 
    START_GAME,
    CHECK_WINNER,
    RESET_GAME
} from './actions';

function patternReducer(state=[], action) {
    switch(action.type){
        case START_GAME: {
            let number = Math.floor(Math.random() * (9 - 1) + 1);
            return [
                ...state,
                number
            ]
        }
        case CHECK_WINNER:{
        let statePattern = JSON.stringify(state);
        let playerPattern = JSON.stringify(action.payload.playerPattern);
            if(state.length < 9){
                if(statePattern === playerPattern){
                    let number = Math.floor(Math.random() * (9 - 1) + 1);

                    return [
                        ...state,
                        number
                    ]
                } else {
                    //display loser function
                    console.log('Loser')
                    return null
                }
            }else{
                if(statePattern === playerPattern){
                    //display winner function
                    console.log('Winner')
                } else {
                    //display loser function
                    console.log('Loser')
                }
            }
            break;
        }
        case RESET_GAME: {
            return defaultState.pattern;
        }
        default:
            return state;
    }
}

function playerPatternReducer(state=[], action) {
    switch(action.type){
        case PUSH_PATTERN:
            if(action.payload.pattern.length < action.payload.playerPattern.length) {
                return [
                    ...state,
                    action.payload.playerPattern
                ]
            } else {
                console.log('Loser')
                return [
                    ...state,
                    action.payload.playerPattern,
                    //replace with loss
                ]
            }
            case RESET_GAME: {
                return defaultState.playerPattern;
            }
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    pattern: patternReducer,
    playerPattern: playerPatternReducer
})

