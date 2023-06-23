import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerTrack() {
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
                        <span> / 배송 조회 </span>
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
                        <b>배송 조회</b>
                        <span>주문하신 제품이 출고되면 운송장 번호와 함께 배송 확인 이메일을 보내드립니다. 보내드린 운송장 번호로 각 배송사 배송추적 페이지에서 배송 조회가 가능합니다.</span>
                    </p>
                    <p>고객님의 주문은 선택하신 배송방법을 통해 스웨덴에서 한국으로 바로 발송됩니다. 한국에 주문이 도착하면 우체국 또는 해당 운송사로 인계됩니다. </p>
                    <p><a href="!#">ECMS 배송조회</a></p>
                    <p><a href="!#">FEDEX (페덱스) 배송조회</a></p>
                </div>
                <div className="tap-inner__img">
                    <img src="./images/cs/faq.jpg" alt="FAQ" />
                </div>
            </div>
        </div>
    </div>
  )
}
