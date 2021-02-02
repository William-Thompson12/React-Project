import { combineReducers } from 'redux';
import { defaultState } from './store'; 
import {
    //action types
    PUSH_PATTERN, 
    START_GAME,
    CHECK_WINNER,
    RESET_GAME,
    GLOW,
    NEXT_ROUND,
    //functions to call within reducers
    nextRound,
    glow,
    setMessage
} from './actions';

function patternReducer(state=[], action) {
    switch(action.type){
        case START_GAME: {
            //New arr
            let number = [];
            // Fill arr with random pattern length of 9, max value 9, min value 1
            for(let i = 0; i <= 8; i++) {
                number.push(Math.floor(Math.random() * (10 - 1) + 1));
            }
            //adds initial count round
            nextRound()
            return [
                ...number
            ]
        }
        case CHECK_WINNER:{
            const playerPattern = action.payload.playerPattern
            const round = action.payload.round - 1
            // If player Patternn[0 - round] matches state[0 - round] ? (check length for winner, else advance round) : set message false triggering loser message
            if(playerPattern === state.slice(0, round)) {
                if(playerPattern.length === 9) {
                    //Display Winner
                    setMessage(true);
                } else {
                    // passes round to glow
                    glow(round);
                    //Advance to next round
                    nextRound();
                }
            } else {
                //Display Loser
                setMessage(false);
            }
            return state;
        }
        case GLOW: {
            // Round state is passed in from Buttons
            const round = action.payload.round
            // ComputerArr = [... x round - 1] - 1 to match the arr
            const computerArr = state.slice(0, round)
            computerArr.forEach(button => {
                //add glow to each button
                document.getElementById(`${button}`).classList.add('glow');
            })
            setTimeout(() => computerArr.forEach(button => {
                //remove glow from each button
                document.getElementById(`${button}`).classList.remove("glow");
            }), 1100)
            return state;
        }
        case RESET_GAME: {
            //Reset pattern = []
            return defaultState.pattern;
        }
        default:
            return state;
    }
}

function playerPatternReducer(state=[], action) {
    switch(action.type){
        case PUSH_PATTERN: {
            //update with Local array to state
            return action.payload.playerPattern
        }
        case RESET_GAME: {
            //Reset playerPattern to []
            return defaultState.playerPattern;
        }
        default:
            return state;
    }
}

function roundReducer(state=0, action) {
    console.log(action.type)
    switch(action.type){
        case NEXT_ROUND: {
            // round = round + 1
            const newState = state + 1
            return newState;
        }
        case RESET_GAME: {
            // Display Popup attributes removed
            document.getElementById(`popup-container`).classList.remove("popup-container");
            document.getElementById(`popup-button`).classList.add("popup-button");
            document.getElementById(`popup-message`).innerHTML = " ";
            // Reset round to 0
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

