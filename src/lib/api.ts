import client from './client';

//최초 관리자 등록 서버 API 정의
export const adminSetUp = (userId: string, userName: string, userPw: string) =>
    client.post("/users/setup", {
        userId, userName, userPw
    });

//로그인 API 호출 함수
export const signIn = (userId: string, password: string) => client.post(`/api/authenticate?username=${userId}&paswsword=${password}`);

//로그인 사용자 정보 수신 호출 함수
export const getMyInfo = () => client.get("/users/myInfo");