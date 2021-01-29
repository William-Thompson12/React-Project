import { createStore } from 'redux';
import { rootReducer } from './reducers';

const defaultState = {
    pattern: [],
    playerPattern: [],
}
 
export const store = createStore(rootReducer, defaultState);