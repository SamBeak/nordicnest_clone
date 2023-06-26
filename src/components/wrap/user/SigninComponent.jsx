import React from 'react';
import { Link } from 'react-router-dom';

export default function SigninComponent() {

    const emailLi = React.useRef();
    const pwLi = React.useRef();
    const signinEmail = React.useRef();
    const signinPw = React.useRef();
    const [state,setState] = React.useState({
        userEmail: '',
        userPw: '',
        msgEmail: '',
        msgPw: '',
        isEmailErr: false,
        isPwErr: false
    });

    // 이메일 입력 이벤트
    const onChangeUserEmail = (e) => {
        const {value} = e.target;
        let msgEmail = '';
        let isEmailErr = false;
        // 이메일 유효성검사
        const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/\.?]+\.[a-z]{2,3}$/gi;

        // placeholder focus 이벤트
        if(value !== ''){
        signinEmail.current.style.fontSize = `10px`;
        signinEmail.current.style.opacity = `1`;
        signinEmail.current.style.transition = `all 0.2s linear`;
        signinEmail.current.style.transform = `translateY(20px)`;
        if(regExp.test(value) === false){
            isEmailErr = true;
            msgEmail = ` ${value}가 이메일 형식에 적합하지않습니다. `;
        }
        else{
            isEmailErr = false;
            msgEmail = null;
        }
        }
        else{
        signinEmail.current.style.fontSize = `16px`;
        signinEmail.current.style.opacity = `0`;
        signinEmail.current.style.transition = `all 0.2s linear`;
        signinEmail.current.style.transform = `translateX(0vh)`;
        }
        
        setState({
        ...state,
        userEmail: value,
        msgEmail: msgEmail,
        isEmailErr: isEmailErr
        });
    }

    // 비밀번호 입력 이벤트
    const onChangeUserPw = (e) => {
        const {value} = e.target;
        const regExp1 = /([A-Za-z]+[0-9]+)+|([0-9]+[A-Za-z]+)+|([A-Za-z]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[A-Za-z]+)+|([0-9]+[`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+)+|([`~!@#$%^&*()\-_=+[{\]}\\|;:'",<.>/?]+[0-9]+)+/g;   // true 정상
        const regExp2 = /[가-힣ㄱ-ㅎㅏ-ㅣ]/g;
        const regExp3 = /\s/g;

        let msgPw = '';
        let isPwErr = false;
        

        // placeholder focus 이벤트
        if(value !== ''){
        signinPw.current.style.fontSize = `10px`;
        signinPw.current.style.opacity = `1`;
        signinPw.current.style.transition = `all 0.2s linear`;
        signinPw.current.style.transform = `translateY(20px)`;
        // 유효성검사
        if(regExp1.test(value) === false || regExp2.test(value) === true || regExp3.test(value) === true){
            isPwErr = true;
            msgPw = '입력하신 이메일 또는 비밀번호를 확인해주세요.';
        }
        else{
            isPwErr = false;
            msgPw = null;
        }
        }
        else{
        signinPw.current.style.fontSize = `16px`;
        signinPw.current.style.opacity = `0`;
        signinPw.current.style.transition = `all 0.2s linear`;
        signinPw.current.style.transform = `translateX(6vh)`;
        }

        setState({
        ...state,
        userPw: value,
        msgPw: msgPw,
        isPwErr: isPwErr
        });
    }

    React.useEffect(() => {
        // useRef emailLi의 span 태그
        const emailLiSpans = emailLi.current.getElementsByTagName("span");

        if(state.isEmailErr === true){
            // appendChild를 활용한 span msg 추가
            const emailSpan = document.createElement("span");
            // useState의 메시지 node화
            const nodeEmailMsg = document.createTextNode(state.msgEmail);
            // 생성한 span태그에 노드메시지 추가
            emailSpan.appendChild(nodeEmailMsg);
            if(emailLiSpans.length >=1){
                // 추가된 span 태그 삭제
                const firstEmailSpan = emailLiSpans[0];
                firstEmailSpan.remove();
                // useRef로 지정된 emailLi에 span 태그 삽입
                emailLi.current.appendChild(emailSpan);
            }
            else{
                // useRef로 지정된 emailLi에 span 태그 삽입
                emailLi.current.appendChild(emailSpan);
            }
        }
        else{
            if(emailLiSpans.length >=1){
                const lastEmailSpan = emailLiSpans[emailLiSpans.length-1];
                lastEmailSpan.remove();
            }
        }

    },[state.isEmailErr, state.msgEmail]);

    React.useEffect(() => {
        const pwLiSpans = pwLi.current.getElementsByTagName("span");

        if(state.isPwErr === true){
            const pwSpan = document.createElement("span");
            const pwNodeMsg = document.createTextNode(state.msgPw);
            pwSpan.appendChild(pwNodeMsg);
            if(pwLiSpans.length >= 1){
                const firstPwSpan = pwLiSpans[0];
                firstPwSpan.remove();
                pwLi.current.appendChild(pwSpan);
            }
            else{
                pwLi.current.appendChild(pwSpan);
            }
        }
        else if(pwLiSpans.length >=1){
            const lastPwSpan = pwLiSpans[pwLiSpans.length-1];
            lastPwSpan.remove();
        }
    },[state.isPwErr, state.msgPw] );

    return (
        <form name='signIn' id='signIn' method='post' action="signinAction.jsp">
            <ul>
                <li ref={emailLi}><label htmlFor="userEmail"></label><p ref={signinEmail}>이메일주소</p><input type="text" name='userEmail' id='userEmail' onChange={onChangeUserEmail} placeholder="이메일주소"/></li>
                <li ref={pwLi}><label htmlFor="userPw"></label><p ref={signinPw}>비밀번호</p><input type="password" name='userPw' id='userPw' onChange={onChangeUserPw} placeholder="비밀번호" /></li>
            </ul>
            <div className="signin__btn">
                <button type='submit'>로그인</button>
            </div>
            <div className="pw-res__link">
                <Link to='/pw-res'>비밀번호 재설정</Link>
            </div>
        </form>
    )
}
