import { combineReducers } from 'redux';
import {
    GENERATE_PATTERN,
    PUSH_PATTERN, 
    // START_GAME,
    // CHECK_WINNER
} from './actions';

// function checkWinner(state=[], action) {
//     switch(action.type){
//         case CHECK_WINNER:{
//             if(state.pattern.length < 9){
//                 if(state.pattern === state.playerPattern){
//                     patternReducer(state.pattern, GENERATE_PATTERN);
                       //needs to wipe glow class on each button can call the same function for generating computer glow
//                 } else {
//                     //display loser function
//                     console.log('Loser')
//                 }
//             }else{
                   // display winner function
//                 if(state.pattern === state.playerPattern){
//                     console.log('Winner')
//                 } else {
//                     //display loser function
//                     console.log('Loser')
//                 }
//             }
//             break;
//         }
//         default:
//             return state;
//     }
// }

function patternReducer(state=[], action) {
    switch(action.type){
        case GENERATE_PATTERN:
            return [
                ...state,
                action.payload.pattern 
            ]
        default:
            return state;
    }
}

function playerPatternReducer(state=[], action) {
    switch(action.type){
        case PUSH_PATTERN:
            return [
                ...state,
                action.payload.playerPattern
            ]
        default:
            return state;
    }
}

export const rootReducer = combineReducers({
    pattern: patternReducer,
    playerPattern: playerPatternReducer
})

