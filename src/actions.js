// Game Action Types
export const START_GAME = 'START_GAME'
export const CHECK_WINNER = 'CHECK_WINNER'
export const RESET_GAME = 'RESET_GAME'
export const GLOW ='GLOW'
export const UNGLOW ='UNGLOW'
export const NEXT_ROUND = 'NEXT_ROUND'
// Pattern Action Types
export const PUSH_PATTERN = 'PUSH_PATTERN';

export function startGame() {
    return {
        type: START_GAME,
        payload: {
        }
    }
}
export function nextRound() {
    return {
        type: NEXT_ROUND,
        payload: {
        }
    }
}
export function checkWinner(playerPattern, pattern, round) {
    console.log(playerPattern, pattern);
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
export function glow(round) {
    return {
        type: GLOW,
        payload: {
            round
        }
    }
}