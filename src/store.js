import { createStore } from 'redux';
import { rootReducer } from './reducers';

const defaultState = {
    pattern: [],
    playerPattern: [],
    gameStatus: false
}
 
export const store = createStore(rootReducer, defaultState);