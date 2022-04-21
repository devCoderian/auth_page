import React from 'react';
import { connect } from 'react-redux';
import MainHeader from '../../components/common/MainHeader';
import { getAuthorized } from '../../modules/selector';

//MyInfo 인터페이스 임포트
import { MyInfo } from '../../App';
//상태 인터페이스 임포트
import { RootState } from '../../modules';

//props 타입스크립트 인터페이스 정의
interface Props {
  readonly isAuthorized: boolean;
  readonly myInfo: MyInfo | null;
}



//로그인 여부와 로그인한 사용자 정보 속성값으로 수신
const MainHeaderContainer = ({isAuthorized, myInfo}: Props) => {
  return (
    <MainHeader
      myInfo ={myInfo}
      isAuthorized = {isAuthorized}
      />
  )
}

//스토어 상태를 가공한 정보를 컴포넌트 속성으로 전달
export default connect((state: RootState)=>{
  
  return {
    isAuthorized: getAuthorized(state),
    myInfo: state.auth.myInfo,
  };
})(MainHeaderContainer);


// export default MainHeaderContainer