// Game Action Types
export const START_GAME = 'START_GAME'
export const CHECK_WINNER = 'CHECK_WINNER'
export const RESET_GAME = 'RESET_GAME'
export const GLOW ='GLOW'
export const UNGLOW ='UNGLOW'
// Pattern Action Types
export const PUSH_PATTERN = 'PUSH_PATTERN';

export function startGame() {
    return {
        type: START_GAME,
        payload: {
        }
    }
}
export function checkWinner(playerPattern, pattern) {
    console.log(playerPattern, pattern);
    return {
        type: CHECK_WINNER,
        payload:{
            playerPattern,
            pattern
        }
    }
}
export function pushPattern(playerPattern, pattern) {
    return {
        type: PUSH_PATTERN,
        payload: {
            pattern,
            playerPattern
        }
    }
}
export function resetGame() {
    return {
        type: RESET_GAME,
        payload: {
        }
    }
}
export function glow() {
    return {
        type: GLOW,
        payload: {
        }
    }
}
export function unGlow() {
    return {
        type: UNGLOW,
        payload: {
        }
    }
}