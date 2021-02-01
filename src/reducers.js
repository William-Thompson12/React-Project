import { combineReducers } from 'redux';
import { defaultState } from './store'; 
import {
    PUSH_PATTERN, 
    START_GAME,
    CHECK_WINNER,
    RESET_GAME,
    GLOW
} from './actions';

function glow(id) {
    document.getElementById(`${id}`).classList.add('glow');
}
function unGlow(id) {
    document.getElementById(`${id}`).classList.remove("glow");
}

function patternReducer(state=[], action) {
    switch(action.type){
        case START_GAME: {
            let number = Math.floor(Math.random() * (10 - 1) + 1);
            if(state.length >= 1) {
                return [
                    ...defaultState.pattern,
                    number
                ]
            } else {
                return [
                    ...state,
                    number
                ]
            }
        }
        case CHECK_WINNER:{
        let statePattern = JSON.stringify(state);
        let playerPattern = JSON.stringify(action.payload.playerPattern);
            if(state.length < 9){
                if(action.payload.length === state.length) {
                    console.log('Pattern is the same length')
                    if(statePattern === playerPattern){
                        document.getElementById('game-message').innerHTML = "Success!"
                        return state
                    } else {
                        //display loser function
                        console.log('Loser')
                        document.getElementById('game-message').innerHTML = "You Stink!"
                        return state
                    }
                } else {
                    console.log('Pattern isnt the same length adding to array')
                    if(statePattern === playerPattern){
                        let number = Math.floor(Math.random() * (10 - 1) + 1);
                        document.getElementById('game-message').innerHTML = "Success!"
                        return [
                            ...state,
                            number
                        ]
                    } else {
                        //display loser function
                        console.log('Loser')
                        document.getElementById('game-message').innerHTML = "You Stink!"
                        return state
                    }
                }
            } else {
                if(statePattern === playerPattern){
                    //display winner function
                    document.getElementById('game-message').innerHTML = "Success!"
                    console.log('Winner')
                } else {
                    //display loser function
                    document.getElementById('game-message').innerHTML = "You Stink!"
                    console.log('Loser')
                }
            }
            break;
        }
        case GLOW: {
            const computerArr = state
            computerArr.forEach(button => {
                glow(button);
            })
            setTimeout(() => computerArr.forEach(button => {
                unGlow(button);
            }), 1100)
            return state
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

export const rootReducer = combineReducers({
    pattern: patternReducer,
    playerPattern: playerPatternReducer
})

