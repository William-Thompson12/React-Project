// Game Action Types
export const START_GAME = 'START_GAME'
export const CHECK_WINNER = 'CHECK_WINNER'
export const RESET_GAME = 'RESET_GAME'
export const NEXT_ROUND = 'NEXT_ROUND'
// Glow action types
export const GLOW ='GLOW'
export const UNGLOW ='UNGLOW'
// Pattern Action Types
export const PUSH_PATTERN = 'PUSH_PATTERN';

export function startGame() {
    return {
        type: START_GAME
    }
}
export function nextRound() {
    return {
        type: NEXT_ROUND
    }
}

//(localPlayerArr = [], this.props.pattern = state.pattern, this.props.round = state.round)
export function checkWinner(playerPattern, pattern, round) {
    return {
        type: CHECK_WINNER,
        payload:{
            playerPattern,
            pattern,
            round
        }
    }
}
export function pushPattern(playerPattern, pattern) {
    return {
        type: PUSH_PATTERN,
        payload: {
            playerPattern,
            pattern
        }
    }
}
export function setMessage(event) {
    //Sets loser or winner based on true or false passed in from checkWinner()
    document.getElementById(`popup-container`).classList.add("popup-container");
    document.getElementById(`popup-button`).classList.remove("popup-button");
    document.getElementById(`popup-message`).innerHTML = `${event === true ? "Good Job!" : "Maybe Next Time"}`;
}
export function resetGame() {
    return {
        type: RESET_GAME
    }
}
export function glow() {
    return {
        type: GLOW
    }
}