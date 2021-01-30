import { combineReducers } from 'redux';
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
            if(state.pattern.length < 9){
                if(state.pattern === action.payload.playerPattern){
                    let number = Math.floor(Math.random() * (9 - 1) + 1);
                    return [
                        ...state,
                        number
                    ]
                } else {
                    //display loser function
                    console.log('Loser')
                }
            }else{
                    //display winner function
                if(state.pattern === state.playerPattern){
                    console.log('Winner')
                } else {
                    //display loser function
                    console.log('Loser')
                }
            }
            break;
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
        default:
            return state;
    }
}

function gameStatusReducer(state=false, action) {
    switch(action.type) {
        case RESET_GAME: {
            break;
        }
        default:
            return state
    }
}

export const rootReducer = combineReducers({
    pattern: patternReducer,
    playerPattern: playerPatternReducer,
    gameStatus: gameStatusReducer
})

