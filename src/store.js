import { createStore } from 'redux';
import { rootReducer } from './reducers';

const defaultState = {
    pattern: [],
    playerPattern: [],
}



const store = createStore(rootReducer, defaultState) 

export default store;