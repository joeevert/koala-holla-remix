import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* koalaSaga() {
    yield takeEvery('SET_KOALAS_SAGA', getKoalasSaga);
    // yield takeEvery('ADD_KOALA', addKoalaSaga);
    // yield takeEvery('EDIT_KOALA', editKoalaSaga);
}

function* getKoalasSaga() {
    try {
        const response = yield call(axios.get, '/koala/');

        // yield put({type: 'SET_KOALAS', payload: response})
        yield console.log('getKoalasSaga response:', response);
        
    } catch (error) {
        console.log(error);
        alert('Unable to getKoalasSaga!');  
    }
}

export default koalaSaga;