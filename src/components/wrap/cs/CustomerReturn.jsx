import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerReturn() {
    const tapOrderNum = React.useRef();
    const tapUserEmail = React.useRef();
    const tapSubmitBtn = React.useRef();
    const [state,setState] = React.useState({
        orderNum: '',
        userEmail: ''
    });

    // 주문번호 체인지 이벤트
    const onChangeOrderNum = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            orderNum: value
        });
    }

    // 이메일 체인지 이벤트
    const onChangeUserEmail = (e) => {
        const { value } = e.target;

        setState({
            ...state,
            userEmail: value
        });
    }

    // 주문번호 포커스 이벤트
    const onFocusOrderNum = (e) => {

        tapOrderNum.current.style.fontSize = `10px`;
        tapOrderNum.current.style.transition = `all 0.3s ease-in-out`;
        tapOrderNum.current.style.transform = `translateY(-3vh)`;
    };

    // 이메일 포커스 이벤트
    const onFocusUserEmail = (e) => {
        tapUserEmail.current.style.fontSize = `10px`;
        tapUserEmail.current.style.transition = `all 0.3s ease-in-out`;
        tapUserEmail.current.style.transform = `translateY(-3vh)`;
    };

    // 주문번호 포커스아웃 이벤트
    const onBlurOderNum = (e) => {
        const { value } = e.target;

        if( value === ''){
            tapOrderNum.current.style.fontSize = `15px`;
            tapOrderNum.current.style.transition = `all 0.3s ease-in-out`;
            tapOrderNum.current.style.transform = `translateY(0)`;
        }
    }

    // 이메일 포커스아웃 이벤트
    const onBlurUserEmail = (e) => {
        const { value } = e.target;

        if( value === ''){
            tapUserEmail.current.style.fontSize = `15px`;
            tapUserEmail.current.style.transition = `all 0.3s ease-in-out`;
            tapUserEmail.current.style.transform = `translateY(0)`;
        }
    }

    // 버튼 변화 이벤트
    React.useEffect(() => {
        if(state.orderNum !== '' && state.userEmail !== ''){
            tapSubmitBtn.current.style.cursor = `pointer`;
            tapSubmitBtn.current.style.color = `#212529`;
            tapSubmitBtn.current.style.border = `1px solid #212529`;
        }
        else{
            tapSubmitBtn.current.style.cursor = `default`;
            tapSubmitBtn.current.style.color = `#bbbcbc`;
            tapSubmitBtn.current.style.border = `1px solid #bbbcbc`;
        }
    });

  return (
    <div id="customer">
        <Section1Component />
        <div className="container">
            <div className="top-tap__container">
                <div className="top-tap__left">
                    <Link to="/"><img src="./images/cs/house.svg" alt="메인으로" /></Link>
                </div>
                <div className="top-tap__right">
                    <p>
                        <Link to='/cs'>고객서비스</Link>
                        <span> / 반품 요청 및 클레임 등록 </span>
                    </p>
                </div>
            </div>
            <div className="tap-btn__container">
                <ul className="tap-btn__box">
                    <li><Link to='/contact' className="tap__btn">연락처 & 영업시간</Link></li>
                    <li><Link to='/track-trace' className="tap__btn">배송 조회</Link></li>
                    <li><Link to='/shop-info' className="tap__btn">배송 정보</Link></li>
                    <li><Link to='/return-policy' className="tap__btn">교환 & 환불 안내</Link></li>
                    <li><Link to='/return' className="tap__btn">반품 요청 및 클레임 등록</Link></li>
                    <li><Link to='/terms-conditions' className="tap__btn">사이트 이용 약관</Link></li>
                    <li><Link to='/privacy-policy' className="tap__btn">개인 정보 보호 정책</Link></li>
                    <li><Link to='/cookies' className="tap__btn">쿠키에 대하여</Link></li>
                    <li><Link to='/faq' className="tap__btn">FAQ - 자주묻는질문</Link></li>
                </ul>
            </div>
            <div className="tap-inner__container">
                <div className="tap-inner__box">
                    <div className="tap-inner__title">
                        <p>반품 요청 및 클레임 등록</p>
                    </div>
                    <div className="tap-inner__content">
                        <form action="" className="tap-inner__form">
                            <label htmlFor="orderNum"></label>
                            <div className='tap-inner__input'>
                                <p ref={tapOrderNum}>주문번호*</p>
                                <input type="text" name='order_num' id='orderNum' onChange={onChangeOrderNum} onFocus={onFocusOrderNum} onBlur={onBlurOderNum} autoComplete="off"/>
                            </div>
                            <label htmlFor="userEmail"></label>
                            <div className="tap-inner__input">
                                <p ref={tapUserEmail}>이메일*</p>
                                <input type="email" name='user_email' id='userEmail' onChange={onChangeUserEmail} onFocus={onFocusUserEmail} onBlur={onBlurUserEmail} autoComplete="off"/>
                            </div>
                        </form>
                        <div className="tap-inner__btn" >
                            <button type='submit' ref={tapSubmitBtn}><i className="fa-solid fa-right-to-bracket"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
