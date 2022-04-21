//createSelector 함수 임포트
import { createSelector } from "reselect";

//상태 인터페이스 임포트
import { RootState } from "./index";

//액세스토큰 전달 선택자 함수
const getAccessToken = (state: RootState) => state.auth.accessToken;

//사용자 정보 전달 선택자 함수
const getMyInfo = (state: RootState) => state.auth.myInfo;

//로그인 여부 선택자 함수
export const getAuthorized = createSelector(
    [getAccessToken, getMyInfo],
    (accessToken, myInfo) => accessToken.length > 0 && !!myInfo
);

//관리자 여부 선택자 함수
export const isAdmin = createSelector(
    [getAccessToken, getMyInfo],
    (isAuthorized, myInfo) =>
        isAuthorized && !!myInfo && myInfo.authList[0].auth === "ROLE_ADMIN"
)

//회원여부 선택자 함수
export const isMember = createSelector(
    [getAuthorized, getMyInfo],
    (isAuthorized, myInfo) =>
        isAuthorized && !!myInfo && myInfo.authList[0].auth === "ROLE_MEMBER"
)