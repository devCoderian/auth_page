import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import HomePage from './pages/HomePage';
import SignInPage from './pages/auth/SignInPage';
import AdminSetUpPage from './pages/member/AdminSetUpPage';


export interface AuthInfo{
  auth: string;
}

export interface MyInfo{
  userName: string;
  authList: AuthInfo[];
}

export interface LoginInput{
  userId: string;
  password: string; 
}


function App() {
  return (
    <>
      {/* <Route exact path= "/" component = {Home} /> */}
      <Route component = {HomePage} path="/" exact />;
      <Route component = {SignInPage} path="/signin" exact />;
      {/* 라우트설정 */}
      <Route component={AdminSetUpPage} path="/member/setup" />
    </>
  );
}

export default App;
