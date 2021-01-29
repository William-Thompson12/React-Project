// Game Action Types
export const START_GAME = 'START_GAME'
export const CHECK_WINNER = 'CHECK_WINNER'

// Pattern Action Types
export const GENERATE_PATTERN = 'GENERATE_PATTERN';
export const PUSH_PATTERN = 'PUSH_PATTERN';

export function startGame() {
    return {
        type: START_GAME,
        payload: {
        }
    }
}

export function checkWinner() {
    return {
        type: CHECK_WINNER,
        payload:{
        }
    }
}

export function generatePattern() {
    let number = Math.random() * (9 - 1) + 1;
    return {
        type: GENERATE_PATTERN,
        payload: {
            pattern: Math.floor(number)
        }
    }
}

export function pushPattern(playerPattern) {
    console.log(playerPattern)
    return {
        type: PUSH_PATTERN,
        payload: {
            playerPattern
        }
    }
}


