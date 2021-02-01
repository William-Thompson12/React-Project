import { createStore } from 'redux';
import { rootReducer } from './reducers';

export const defaultState = {
    pattern: [],
    playerPattern: [],
    round: 0
}
 
export const store = createStore(rootReducer, defaultState);