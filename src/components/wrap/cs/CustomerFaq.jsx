import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Section1Component from '../home/Section1Component';

export default function CustomerFaq() {
    const chevIcon = React.useRef();
    const [isClick,setIsClick] = React.useState(false);
    const [state,setState] = React.useState({
        faq: []
    });

    React.useEffect(() => {
        axios({
            url: './data/cs/faq.json',
            method: 'GET'
        })
        .then((res) => {
            if(res.status === 200){
                setState({
                    ...state,
                    faq: res.data.faq
                });
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, []);
    
    // 자주하는 질문상자 클릭 이벤트
    const onClickFaq =(e) => {
        e.preventDefault();
        console.log(e);
        if(isClick === false) {
            chevIcon.current.style.transition = `all 0.3s ease-in-out`;
            chevIcon.current.style.transform = `scaleY(-1)`;
            setIsClick(true);
        }
        else if(isClick === true) {
            chevIcon.current.style.transition = `all 0.3s ease-in-out`;
            chevIcon.current.style.transform = `scaleY(1)`;
            setIsClick(false);
        }
    };


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
                        <span> / FAQ - 자주묻는질문 </span>
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
                <div className="tap-inner__text">
                    <p>
                        <h1>FAQ - 자주 묻는 질문</h1>
                        <p>이곳에서 자주묻는질문을 확인해보세요. 만약 원하는 답변을 찾지 못한 경우 고객센터로 연락 부탁드립니다.</p>
                    </p>
                    <p>- 이메일 고객센터: info@nordicnest.kr - 카카오톡 고객센터: [<a href="!#">상담 바로가기</a>]</p>
                </div>
            </div>
            <div className="tap-faq__container">
                {
                    state.faq.map((item,idx) => {
                        return(
                            <div className="tap-faq__box" onClick={onClickFaq} key={idx}>
                                <div className="tap-faq__top">
                                    <span>{item.question}</span>
                                    <i className="fa-solid fa-chevron-down" ref={chevIcon}></i>
                                </div>
                                <div className="tap-faq__bottom">
                                    <span>{isClick ? item.answer : ''}</span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}
