import { combineReducers } from 'redux';
import { defaultState } from './store'; 
import {
    //action types
    PUSH_PATTERN, 
    START_GAME,
    CHECK_WINNER,
    RESET_GAME,
    GLOW,
    //functions to call within reducers
    setMessage
} from './actions';

function patternReducer(state=[], action) {
    switch(action.type){
        case START_GAME: {
            let randomNumber = Math.floor(Math.random() * (10 - 1) + 1);
            let generatedArr = []
            let number = [{value: randomNumber, glow: true}];
            // Fill arr with random pattern length of 9, max value 9, min value 1
            for(let i = 0; i <= 7; i++) {
                generatedArr.push(Math.floor(Math.random() * (10 - 1) + 1));
            }
            let newGeneratedArr = generatedArr.map(value => {
                return {value, glow: false }
            })
            let finalArr = number.concat(newGeneratedArr)
            //adds initial count round
            return [
                ...finalArr
            ]
        }
        case CHECK_WINNER:{
            //Updated States passed in
            const round = action.payload.round;
            const playerPattern = action.payload.playerPattern;
            // creating variables to check logic for game
            let joinedPattern = playerPattern.join(' ');
            // roundState === a string version of the values of the array to round
            let roundState = state.slice(0, round).map(button => { return button.value; }).join(' ');
            console.log(playerPattern, joinedPattern, roundState);
            if( playerPattern.length !== round) {
                console.log('CHECK_WINNER CASE', 'not the same length as round')
                return state;
            } else {
                if(joinedPattern === roundState) {
                    if(playerPattern.length === 9) {
                        //Display Winner
                        console.log('CHECK_WINNER CASE', 'Winner')
                        setMessage(true);
                    } else {              
                        //Next Round
                        
                        // return updatedState;
                    }
                } else {
                    console.log(playerPattern, roundState)
                    //Display Loser
                    setMessage(false);
                }
                return state;
            }
        }
        case GLOW: {
            console.log('glow')
            let newArr = []
            state.forEach(button => {
                if(button.glow === true) {
                    newArr.push(button)
                } else {
                    //do nothing
                } 
            })
            console.log(newArr, state)
            newArr.forEach(button => {
                if(button.glow === true) {
                    //add glow to each button
                    document.getElementById(`${button.value}`).classList.add('glow');
                    setTimeout(() => newArr.forEach(button => {
                        //remove glow from each button
                        document.getElementById(`${button.value}`).classList.remove("glow");
                    }), 1100);
                } else {
                    //do nothing
                }
            })

            let updatedComputerArr = state.map(button => {
                return {value: button.value, glow: false };
            })

            return updatedComputerArr;
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
            return [
                ...state,
                action.payload.playerPattern
            ];
        }
        case CHECK_WINNER: {
            return defaultState.playerPattern;
        }
        case RESET_GAME: {
            //Reset playerPattern to []
            return defaultState.playerPattern;
        }
        default:
            return state;
    }
}

export function roundReducer(state=0, action) {
    switch(action.type){
        case START_GAME: {
            document.getElementById(`round-counter`).classList.add("glow-red");
            setTimeout(() => 
                //remove glow from each button
                document.getElementById(`round-counter`).classList.remove("glow-red"), 1100);
            //round = 1
            const newState = 1
            return newState
        }
        case CHECK_WINNER: {
            document.getElementById(`round-counter`).classList.add("glow-red");
            setTimeout(() => 
                //remove glow from each button
                document.getElementById(`round-counter`).classList.remove("glow-red"), 1100);
            // round = round + 1
            const newState = state + 1;
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
            return state;
    }
}

export const rootReducer = combineReducers({
    pattern: patternReducer,
    playerPattern: playerPatternReducer,
    round: roundReducer,
})

