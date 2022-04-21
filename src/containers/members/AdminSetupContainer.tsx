import React from 'react'
import { withRouter, RouteComponentProps } from 'react-router-dom'
import AdiminSetupForm from '../../components/member/AdiminSetupForm';
import*as api from '../../lib/api';

//PropsX -> 속성으로 history 전달
const AdminSetupContainer = ({history} : RouteComponentProps) => {

    //등록처리
    const onRegister = async(userId: string, userName: string, userPw: string) => {
        try {
            await api.adminSetUp(userId, userName, userPw); 

            alert("등록이 완료되었습니다.");
            history.push("/");
        } catch (e: any) {
            alert(e.response.data);
        }
    };
    
    // 최초 등록자 form 표기
    return <AdiminSetupForm onRegister={onRegister} />;
}

// withRouter 함수는 Hoc이다.
// 라우트로 사용된 컴포넌트가 아니어도 match, location, history 객체에 접근할 수 있게 해준다.
// 속성값으로 match, location, history객체를 전달받음
export default withRouter(AdminSetupContainer);