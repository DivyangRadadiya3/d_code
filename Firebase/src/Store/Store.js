import { createStore } from 'redux';
import rootReducer from '../Reducer/index.js';

const store = createStore(rootReducer());

export default store;