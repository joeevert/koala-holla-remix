import { takeEvery, call, put } from 'redux-saga/effects';
import axios from 'axios';

function* koalaSaga() {
    yield takeEvery('GET_KOALAS', getKoalasSaga);
    yield takeEvery('ADD_KOALA', addKoalaSaga);
    yield takeEvery('MARK_TRANSFER', markTransferSaga);
    yield takeEvery('DELETE_KOALA', deleteKoalaSaga);
}

function* getKoalasSaga() {
    try {
        const response = yield call(axios.get, '/koala');

        yield put({type: 'SET_KOALAS', payload: response.data})
        yield console.log('getKoalasSaga response:', response.data);
        
    } catch (error) {
        console.log(error);
        alert('Unable to getKoalasSaga!');  
    }
}

function* addKoalaSaga(action) {
    try {
        yield call(axios.post, '/koala', action.payload);
        yield put({type: 'GET_KOALAS' });

    } catch (error) {
        console.log(error);
        alert('Unable to addKoalaSaga!');
        
    }
}

function* deleteKoalaSaga(action) {
    let koalaId = action.payload;
    try {
        yield call(axios.delete, `/koala/${koalaId}`);
        yield put({type: 'GET_KOALAS'});
    } catch (error) {
        console.log(error);
        alert('Unable to deleteKoalaSaga!');
        
    }
}

function* markTransferSaga(action) {
    let koalaId = action.payload;
    try {
        yield call(axios.put, `/koala/transfer/${koalaId}`);
        yield put({type: 'GET_KOALAS'});
    } catch (error) {
        console.log(error);
        alert('Unable to markTransferSaga!');
        
    }
}


export default koalaSaga;