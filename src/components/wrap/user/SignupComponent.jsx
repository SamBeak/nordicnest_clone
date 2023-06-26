import React from 'react';

export default function SignupComponent() {
    const emailLi = React.useRef();
    const signupEmail = React.useRef();
    const firstNameLi = React.useRef();
    const signupFirstName = React.useRef();
    const lastNameLi = React.useRef();
    const signupLastName = React.useRef();
    const phLi = React.useRef();
    const signupPh = React.useRef();
    const pwLi = React.useRef();
    const signupPw = React.useRef();
    const pwcLi = React.useRef();
    const signupPwc = React.useRef();
    const checkTerm = React.useRef();
    const [state, setState] = React.useState({
        userEmail: '',
        userFirstName: '',
        userLastName: '',
        userPh: '',
        userPw: '',
        userPwc: '',
        msgEmail: '',
        msgFirstName: '',
        msgLastName: '',
        msgPw: '',
        msgPwc: '',
        isEmailErr: false,
        isFirstNameErr: false,
        isLastNameErr: false,
        isPwErr: false,
        isPwcErr: false
    });
 
    // 이메일 입력 이벤트
    const onChangeUserEmail = (e) => {
        const {value} = e.target;
        let msgEmail = '';
        let isEmailErr = false;
        // 이메일 유효성검사
        const regExp = /^[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]+(\.)?[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/?]*@[a-z0-9가-힣ㄱ-ㅎㅏ-ㅣ`~!#$%^&*\-_=+{}|'/\.?]+\.[a-z]{2,3}$/g;
        const regExp2 = /\s/g;
        // placeholder focus 이벤트
        if(value !== ''){
            signupEmail.current.style.fontSize = `10px`;
            signupEmail.current.style.opacity = `1`;
            signupEmail.current.style.transition = `all 0.2s linear`;
            signupEmail.current.style.transform = `translateY(20px)`;
            if(regExp.test(value) === false){
                isEmailErr = true;
                msgEmail = ` ${value}가 이메일 형식에 적합하지않습니다. `;
            }
            else if(regExp2.test(value) === true){
                isEmailErr = true;
                msgEmail = `이 입력란을 작성하세요.`
            }
            else{
                isEmailErr = false;
                msgEmail = null;
            }
        }
        else{
            isEmailErr = true;
            msgEmail = '이 입력란을 작성하세요.';
            signupEmail.current.style.fontSize = `16px`;
            signupEmail.current.style.opacity = `0`;
            signupEmail.current.style.transition = `all 0.2s linear`;
            signupEmail.current.style.transform = `translateX(0vh)`;
        }
        
        setState({
        ...state,
        userEmail: value,
        msgEmail: msgEmail,
        isEmailErr: isEmailErr
        });
    };
    // 영문 이름 입력 이벤트
    const onChangeUserFirstName = (e) => {
        const {value} = e.target;
        let msgFirstName = '';
        let isFirstNameErr = false;

        if(value !== ''){

            signupFirstName.current.style.fontSize = `10px`;
            signupFirstName.current.style.opacity = `1`;
            signupFirstName.current.style.transition = `all 0.2s linear`;
            signupFirstName.current.style.transform = `translateY(20px)`;

            isFirstNameErr = false;
            msgFirstName = null;

        }
        else{
            isFirstNameErr = true;
            msgFirstName = '이 입력란을 작성하세요.';

            signupFirstName.current.style.fontSize = `16px`;
            signupFirstName.current.style.opacity = `0`;
            signupFirstName.current.style.transition = `all 0.2s linear`;
            signupFirstName.current.style.transform = `translateX(0vh)`;
        }

        setState({
            ...state,
            userFirstName: value,
            msgFirstName: msgFirstName,
            isFirstNameErr: isFirstNameErr
        });
    };

    // 영문 성 입력 이벤트
    const onChangeUserLastName = (e) => {
        const {value} = e.target;
        let msgLastName = '';
        let isLastNameErr = false;

        if(value !== ''){

            signupLastName.current.style.fontSize = `10px`;
            signupLastName.current.style.opacity = `1`;
            signupLastName.current.style.transition = `all 0.2s linear`;
            signupLastName.current.style.transform = `translateY(20px)`;

            isLastNameErr = false;
            msgLastName = null;
        }
        else{
            isLastNameErr = true;
            msgLastName = '이 입력란을 작성하세요.';

            signupLastName.current.style.fontSize = `16px`;
            signupLastName.current.style.opacity = `0`;
            signupLastName.current.style.transition = `all 0.2s linear`;
            signupLastName.current.style.transform = `translateX(0vh)`;
        }

        setState({
            ...state,
            userLastName: value,
            msgLastName: msgLastName,
            isLastNameErr: isLastNameErr
        });
    };
    
    // 핸드폰번호 입력 이벤트
    const onChangeUserPh = (e) => {
        const {value} = e.target;

        if(value !== ''){
            signupPh.current.style.fontSize = `10px`;
            signupPh.current.style.opacity = `1`;
            signupPh.current.style.transition = `all 0.2s linear`;
            signupPh.current.style.transform = `translateY(20px)`;
        }
        else{
            signupPh.current.style.fontSize = `16px`;
            signupPh.current.style.opacity = `0`;
            signupPh.current.style.transition = `all 0.2s linear`;
            signupPh.current.style.transform = `translateX(0vh)`;
        }

        setState({
            ...state,
            userPh: value
        });
    };

    // 비밀번호 입력 이벤트
    const onChangeUserPw = (e) => {
        const {value} = e.target;
        const regExp1 = /^(.){6,20}$/g;
        let msgPw = '';
        let isPwErr = false;

        if(value !== ''){

            signupPw.current.style.fontSize = `10px`;
            signupPw.current.style.opacity = `1`;
            signupPw.current.style.transition = `all 0.2s linear`;
            signupPw.current.style.transform = `translateY(20px)`;

            // 유효성검사
            if(regExp1.test(value) === false){
                isPwErr = true;
                msgPw = `이 텍스트를 6자 이상으로 늘리세요(현재 ${value.length}자 사용 중).`;
            }
            else{
                isPwErr = false;
                msgPw = null;
            }
        }
        else{
            isPwErr = true;
            msgPw = '이 입력란을 작성하세요.';

            signupPw.current.style.fontSize = `16px`;
            signupPw.current.style.opacity = `0`;
            signupPw.current.style.transition = `all 0.2s linear`;
            signupPw.current.style.transform = `translateX(0vh)`;
        }

        setState({
            ...state,
            userPw: value,
            msgPw: msgPw,
            isPwErr: isPwErr
        });
    };

    // 비밀번호 확인 입력 이벤트
    const onChangeUserPwc = (e) => {
        const {value} = e.target;
        const regExp1 = /^(.){6,20}$/g;
        let msgPwc = '';
        let isPwcErr = false;

        if(value !== ''){

            signupPwc.current.style.fontSize = `10px`;
            signupPwc.current.style.opacity = `1`;
            signupPwc.current.style.transition = `all 0.2s linear`;
            signupPwc.current.style.transform = `translateY(20px)`;

            // 유효성검사
            if(regExp1.test(value) === false){
                isPwcErr = true;
                msgPwc = `이 텍스트를 6자 이상으로 늘리세요(현재 ${value.length}자 사용 중).`;
                if(state.userPw !== value){
                    msgPwc = `비밀번호가 일치하지 않습니다.`;
                }
            }
            else{
                isPwcErr = false;
                msgPwc = null;
            }
        }
        else{
            isPwcErr = true;
            msgPwc = '이 입력란을 작성하세요.';

            signupPwc.current.style.fontSize = `16px`;
            signupPwc.current.style.opacity = `0`;
            signupPwc.current.style.transition = `all 0.2s linear`;
            signupPwc.current.style.transform = `translateX(0vh)`;
        }

        setState({
            ...state,
            userPwc: value,
            msgPwc: msgPwc,
            isPwcErr: isPwcErr
        });
    };

    React.useEffect(() => {
        const emailLiSpans = emailLi.current.getElementsByTagName("span");

        if(state.isEmailErr === true){
            const emailSpan = document.createElement("span");
            const nodeEmailMsg = document.createTextNode(state.msgEmail);
            emailSpan.appendChild(nodeEmailMsg);
            if(emailLiSpans.length >=1){
                const firstEmailSpan = emailLiSpans[0];
                firstEmailSpan.remove();
                emailLi.current.appendChild(emailSpan);
            }
            else{
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
        const firstNameLiSpans = firstNameLi.current.getElementsByTagName("span");
        if(state.isFirstNameErr === true){
            const firstNameSpan = document.createElement("span");
            const firstNameNodeMsg = document.createTextNode(state.msgFirstName);
            firstNameSpan.appendChild(firstNameNodeMsg);
            if(firstNameLiSpans.length >= 1){
                const firstFirstNameSpan = firstNameLiSpans[0];
                firstFirstNameSpan.remove();
                firstNameLi.current.appendChild(firstNameSpan);
            }
            else{
                firstNameLi.current.appendChild(firstNameSpan);
            }
        }
        else{
            if(firstNameLiSpans.length >=1){
                const lastFirstNameSpan = firstNameLiSpans[firstNameLiSpans.length-1];
                lastFirstNameSpan.remove();
            }
        }
    }, [state.isFirstNameErr, state.msgFirstName]);

    React.useEffect(() => {
        const lastNameLiSpans = lastNameLi.current.getElementsByTagName("span");
        if(state.isLastNameErr === true){
            const lastNameSpan = document.createElement("span");
            const lastNameNodeMsg = document.createTextNode(state.msgLastName);
            lastNameSpan.appendChild(lastNameNodeMsg);
            if(lastNameLiSpans.length >= 1){
                const firstLastNameSpan = lastNameLiSpans[0];
                firstLastNameSpan.remove();
                lastNameLi.current.appendChild(lastNameSpan);
            }
            else{
                lastNameLi.current.appendChild(lastNameSpan);
            }
        }
        else{
            if(lastNameLiSpans.length >=1){
                const lastLastNameSpan = lastNameLiSpans[lastNameLiSpans.length-1];
                lastLastNameSpan.remove();
            }
        }
    }, [state.isLastNameErr, state.msgLastName]);

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
        else{
            if(pwLiSpans.length >=1){
                const lastPwSpan = pwLiSpans[pwLiSpans.length-1];
                lastPwSpan.remove();
            }
        }
    }, [state.isPwErr, state.msgPw]);

    React.useEffect(() => {
        const pwcLiSpans = pwcLi.current.getElementsByTagName("span");
        if(state.isPwcErr === true){
            const pwcSpan = document.createElement("span");
            const pwcNodeMsg = document.createTextNode(state.msgPwc);
            pwcSpan.appendChild(pwcNodeMsg);
            if(pwcLiSpans.length >= 1){
                const firstPwcSpan = pwcLiSpans[0];
                firstPwcSpan.remove();
                pwcLi.current.appendChild(pwcSpan);
            }
            else{
                pwcLi.current.appendChild(pwcSpan);
            }
        }
        else{
            if(pwcLiSpans.length >=1){
                const lastPwcSpan = pwcLiSpans[pwcLiSpans.length-1];
                lastPwcSpan.remove();
            }
        }
    }, [state.isPwcErr, state.msgPwc]);

    const onClickHandleTerm = (e) => {
        if(checkTerm.current){
            checkTerm.current.checked = !checkTerm.current.checked;
        }
    }

  return (
    <form name='signUp' id='signUp' method='post' action="signUpAction.jsp">
        <ul>
            <h2>회원가입</h2>
            <p>Welcome!</p>
            <li ref={emailLi}><label htmlFor="userEmail"></label><p ref={signupEmail}>이메일주소*</p><input type="email" name='userEmail' id='userEmail' onChange={onChangeUserEmail} placeholder="이메일주소*"/></li>
            <li ref={firstNameLi}><label htmlFor="userFirstName"></label><p ref={signupFirstName}>영문 이름 (예: Gildong)*</p><input type="text" name='userFirstName' id='userFirstName' onChange={onChangeUserFirstName} placeholder="영문 이름 (예: Gildong)*"/></li>
            <li ref={lastNameLi}><label htmlFor="userLastName"></label><p ref={signupLastName}>영문 성 (예: Hong)*</p><input type="text" name='userLastName' id='userLastName' onChange={onChangeUserLastName} placeholder="영문 성 (예: Hong)*"/></li>
            <li ref={phLi}><label htmlFor="userPh"></label><p ref={signupPh}>휴대폰번호 (예:01012345678)</p><input type="text" name='userPh' id='userPh' onChange={onChangeUserPh} placeholder="휴대폰번호 (예:01012345678)"/></li>
            <li ref={pwLi}><label htmlFor="userPw"></label><p ref={signupPw}>비밀번호*</p><input type="password" name='userPw' id='userPw' onChange={onChangeUserPw} placeholder="비밀번호*" /></li>
            <li ref={pwcLi}><label htmlFor="userPwc"></label><p ref={signupPwc}>비밀번호 확인*</p><input type="password" name='userPwc' id='userPwc' onChange={onChangeUserPwc} placeholder="비밀번호 확인*" /></li>
        </ul>
        <div className="term__box" onClick={onClickHandleTerm} >
            <input type="checkbox" ref={checkTerm}/>
            <span>Missing translation for customer.acceptTerms*</span>
        </div>
        <div className="signup__btn">
            <button type='submit'>회원가입</button>
        </div>
    </form>
  )
}
