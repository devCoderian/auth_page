import React, {useState, useCallback} from 'react'

//props 타입스크립트 인터페이스 정의
interface Props{
  readonly onSignIn: (userId: string, password: string) => void;
}

const SignInForm = ({onSignIn}: Props) => {

  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = useCallback(
    (e:React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      onSignIn(userId, password);
    },
    [userId, password, onSignIn],
  )
  
  return (
    <>
    <button type='submit'>홈이동</button>
    <div>아이디</div>
    <input type="text" />
    <div>비밀번호</div>
    <input type="password" />
    <button type='submit'>로그인</button>
    </>
  )
}

export default SignInForm