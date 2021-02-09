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
    const messages = ['Perfect!', 'Nice Job!', 'Good One!', 'You Got It!', 'That one was a little slow...']
    switch(action.type){
        case START_GAME: {
            const winningRound = action.payload.winningRound <= null || undefined || NaN || 0 ? 9 : action.payload.winningRound;
            let newArr = []
            // Fill arr with random pattern length of 9, max value 9, min value 1
            for(let i = 0; i < winningRound; i++) {
                newArr.push(Math.floor(Math.random() * (10 - 1) + 1));
            }
            //adds initial count round
            return newArr;
        }
        case CHECK_WINNER:{
            //Updated States passed in
            const round = action.payload.round;
            const playerPattern = action.payload.playerPattern;
            // creating variables to check logic for game
            let joinedPattern = playerPattern.join(' ');
            // roundState === a 'string' of the button.values of the pattern by round
            let roundState = state.slice(0, round).map(button => { return button; }).join(' ');
            if( playerPattern.length !== round) {
                return state;
            } else {
                if(joinedPattern === roundState) {
                    if(playerPattern.length === state.length) {
                        //Display Winner
                        setMessage(true);
                    } else {
                        let randomNumber = Math.floor(Math.random() * (5 - 0) + 0);
                        //set game message
                        document.getElementById(`game-message`).innerHTML = messages[randomNumber]
                        //glow squares for next round
                        const squares = state.slice(0, round + 1);
                        let interval, i = 0; 
                        const glow = () => {
                            document.getElementById(`${squares[i]}`).classList.add('glow');
                            setTimeout(() => {
                                document.getElementById(`${squares[i]}`).classList.remove('glow');
                            }, 800);
                            if (i < squares.length - 1) {
                                i++;
                            } 
                            else { 
                                clearInterval(interval);
                            };
                        };
                        interval = setInterval(glow, 1100);
                    }
                } else {
                    //Display Loser
                    setMessage(false);
                }
                return state;
            }
        }
        case GLOW: {
            //add glow
            document.getElementById(`${state[0]}`).classList.add('glow');
            //remove glow
            setTimeout(() => {document.getElementById(`${state[0]}`).classList.remove("glow");}, 1000);
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
            return [
                ...state,
                action.payload.playerPattern
            ];
        }
        case CHECK_WINNER: {
            //Reset playerPattern to []
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

