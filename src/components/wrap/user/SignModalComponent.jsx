import React from 'react';
import SigninComponent from './SigninComponent';
import SignupComponent from './SignupComponent';

export default function SignModalComponent({setIsSignin}) {
  const signModal = React.useRef();
  const [sortNum, setSortNum] = React.useState(0);

  const onClickSignBtn = (e) =>{
    e.preventDefault();
    console.log(e.target.value);

    if(e.target.value === 'signin'){
      setSortNum(0);
    }
    else if(e.target.value === 'signup'){
      setSortNum(1);
    }
  };

  // 네비게이션바 닫기 클릭 이벤트
  const onClickClose = (e) => {
    e.preventDefault();
    if( e.target === signModal.current){
        setIsSignin(false);
        signModal.current.style.transform = `translateX(-100vh)`;
        signModal.current.style.backgroundColor = `rgba(0, 0, 0, 0)`;
    }
};

  return (
    <div id="signin" onClick={onClickClose} ref={signModal}>
        <div className="signin__container">
            <div className="user-modal__top">
              <ul>
                <li><button type='button' className={sortNum === 1 ? 'on' : null} onClick={onClickSignBtn} value="signin">로그인</button></li>
                <li><button type='button' className={sortNum === 0 ? 'on' : null} onClick={onClickSignBtn} value="signup">회원가입</button></li>
              </ul>
            </div>
            <div className="user-modal__bottom">
              {
                sortNum === 1 ? <SignupComponent /> : <SigninComponent />
              }
            </div>
        </div>
    </div>
  )
}
