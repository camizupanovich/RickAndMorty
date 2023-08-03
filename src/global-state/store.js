import {applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducer';
import { legacy_createStore as createStore } from 'redux';

export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));