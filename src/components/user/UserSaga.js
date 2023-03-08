import { takeEvery, put, call } from 'redux-saga/effects';
import Axios from 'axios';
import { userActions } from '../../constants/action_types/user';
import { getUsersSuccess } from '../../reducers/userSlice';

const callAPI = async ({ url, method, data }) => {
    return await Axios({
      url,
      method,
      data
    });
  };

function* getUsers() {
    try {
        const users = yield call(() => fetch('https://63fed78dc5c800a7238698ea.mockapi.io/api/v1/user'));

        const formatedUsers = yield users.json();

        yield put(getUsersSuccess(formatedUsers));
    } catch (error) {
        console.log('error', error);
        yield put({ type: 'USERS_FETCH_FAILED' });
    }
} 

export default function* usersSagas() {
    yield* [
        takeEvery('user/getUsersFetch', getUsers),
    ];
}
