import React from 'react'
import { createAction } from "redux-actions";
import { action, createReducer } from "typesafe-actions";
import { takeLatest, call, put } from 'redux-saga/effects';
import * as api from '../lib/api';
import { AxiosResponse } from 'axios';
import client from '../lib/client';
import { LoginInput, MyInfo } from '../App';

//액션 타입
const SET_ACCESS_TOKEN = 'auth/SET_ACCESS_TOKEN';
const LOGIN = "auth/LOGIN";

const SET_MY_INFO = "auth/SET_MY_INFO";

//액션 생성 함수
// export const setAccessToken = (accessToken: string) => ({
//     type: SET_ACCESS_TOKEN,
//     accessToken,
// })
export const setAccessToken = createAction(SET_ACCESS_TOKEN, (accessToken: string) => accessToken);
export const login = createAction(LOGIN, ({ userId, password }: LoginInput) => (
    {
        userId, password
    }
));


//비동기 수행 Task 작성
function* loginSaga(action: ReturnType<typeof login>) {
    try {
        const { userId, password } = action.payload;

        const response: AxiosResponse = yield call(api.signIn, userId, password);
        const { authorizaion } = response.headers;
        const accessToken = authorizaion.substring(7);

        yield put(setAccessToken(accessToken));

        client.defaults.headers.common.authorizaion = `Bearer ${accessToken}`;

    } catch (error) {

    }
}


//로그인 사가 함수 작성
export function* authSaga() {
    yield takeLatest(LOGIN, loginSaga);
}
//myInfo 속성에 대한 타입을 정의한다.

//상태 인터페이스 정의
export interface AuthState {
    accessToken: string
    //myInfo 속성 타입 정의
    // myInfo: MyInfo | null;
}

//로그인 모듈 

//초기 상태
const initialState: AuthState = {
    accessToken: "",
}


//리듀서 정의
const auth = createReducer(
    initialState, {
    [SET_ACCESS_TOKEN]: (state, action) => ({
        ...state,
        accessToken: action.payload,
    })
}
)

export default auth;