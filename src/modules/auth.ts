import React from 'react'
import { createAction } from "redux-actions";
import { createReducer } from "typesafe-actions";
import { takeLatest, call, put } from 'redux-saga/effects';
// import * as api from '../lib/api'; 
// import { AxiosResponse } from 'axios';
// import client from '../lib/client';
import { LoginInput } from '../App';


//액션 타입
const SET_ACCESS_TOKEN = 'auth/SET_ACCESS_TOKEN';
const LOGIN = "auth/LOGIN";

const auth = () => {
    return (
        // <div>auth < /div>
    )
}

export default auth