import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mapReducer from './src/reducers/mapReducer';
import rootSaga from './src/sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
    combineReducers({ mapReducer }),
    applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);
