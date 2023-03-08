import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import userReducer from './reducers/userSlice';
import rootSaga from './saga';

let sagaMiddleware = createSagaMiddleware();

const store = configureStore({
    reducer: {
       user: userReducer,
    },
    middleware: [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);
 
export default store;
