import React, {useState, useCallback, ChangeEvent} from 'react'


//props ts 인터페이스 정의
interface Props{
    readonly onRegister: (userId: string, userName: string, userPw: string) => Promise<void>;
}
const AdiminSetupForm = ({onRegister}: Props) => {

    const [userId, setUserId] = useState("");
    const [password, setPassword] = useState("");
    const [userName, setUserName] = useState("");

    const handleChangeUserId = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUserId(e.target.value);
    },[]);

    const handleChangePassword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    },[]);

    const handleChangeUserName = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(e.target.value);
    },[]);

    const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
        
        // console.log(e.target.value);    
        e.preventDefault(); 
        
        onRegister(userId, userName, password);

    },[userId, userName, password, onRegister]);

    return (
        <>

        <form onSubmit={handleSubmit}>
        <div>AdiminSetupForm</div>

        <div>아이디</div>
        <input type = "text" value ={userId} onChange={handleChangeUserId} />

        <div>이름</div>
        <input type = "text" value={userName} onChange={handleChangeUserName} />

        <div>비밀번호</div>
        <input type = "password" value={password} onChange={handleChangePassword} />
        
        <button type= "submit">관리자 등록</button>
        </form>
        </>
    ) 
}

export default AdiminSetupForm