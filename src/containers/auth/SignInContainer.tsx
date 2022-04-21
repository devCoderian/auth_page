import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import SignInForm from '../../components/auth/SignInForm';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import {login} from '../../modules/auth';
import {RootState} from '../../modules';
 
const SignInContainer = ({history}: RouteComponentProps) => {
  
    const dispatch = useDispatch();

    const {accessToken} = useSelector(({auth}: RootState) => ({
        accessToken: auth.accessToken,
    }));

    //로그인 처리
    const onSignIn = (userId: string, password: string) => {
        try {
            dispatch(login({userId, password}));
        } catch (error) {
            console.log(error)
        }
    }

    //마운트될 때 엑세스 토큰 상태 정보 확인
    useEffect(() => {
      if(accessToken){
          alert('로그인 되었습니다.');
          history.push('/');
      }
     }, [accessToken, dispatch, history])
    

     //로그인 폼 컴포넌트 표시
    return <SignInForm onSignIn={onSignIn} />
}

export default withRouter(SignInContainer); 