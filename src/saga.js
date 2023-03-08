import { all, fork } from 'redux-saga/effects';
import usersSagas from './components/user/UserSaga';

export default function* rootSaga() {
    yield all([
        fork(usersSagas),
    ]);
}
