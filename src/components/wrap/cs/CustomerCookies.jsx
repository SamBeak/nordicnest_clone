import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerCookies() {
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
                        <span> / 쿠키에 대하여 </span>
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
                        <b>쿠키에 대하여</b>
                        <span>노르딕네스트는 당사의 웹 사이트에서 쿠키라고 불리는 기술을 사용하고 있습니다. 쿠키는 고객님이 웹사이트를 방문 할 때 고객님의 인터넷 브라우저에 자동으로 보내지는 일련의 텍스트로, 일종의 정보 파일입니다. 이후 고객님께서 저희 웹 사이트를 다시 방문하실 때 브라우저는 그 일련의 텍스트를 저희에게 전송하고, 이를 이용하여 특정 컴퓨터에서 웹 사이트에 방문하는 횟수를 기록합니다. 이 기술로 웹 사이트의 방문자 수와 방문자들이 얼마 동안 웹 사이트를 이용하는지 측정할 수 있습니다. 또한 방문자는 같은 정보를 계속 입력할 필요가 없습니다. 이러한 기술은 은행을 비롯한 대부분의 웹사이트에서 쓰이는 기술입니다.</span>
                    </p>
                    <p>쿠키에는 어떠한 개인정보도 포함되어있지 않으며, 이를 이용하여 특정인을 추적하는 것은 불가능합니다. 쿠기 기술을 원하지 않으시면, 브라우저의 환경설정에서 쿠키를 받지 않도록 설정하실 수 있습니다. 인터넷 익스플로러의 경우 “도구” 메뉴에서 이에 대한 더 자세한 정보를 얻으실 수 있습니다. 쿠키를 받지 않기로 설정하시면 노르딕네스트는 nordicnest.kr 웹 사이트의 정확성을 보증할 수 없습니다.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
