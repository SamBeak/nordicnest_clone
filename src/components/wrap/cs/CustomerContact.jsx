import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerContact() {
  return (
    <div id="customer">
        <Section1Component />
        <div className="container">
            <div className="top-tap__container">
                <div className="top-tap__left">
                    <Link to='/'><img src="./images/cs/house.svg" alt="메인으로" /></Link>
                </div>
                <div className="top-tap__right">
                    <p>
                        <Link to='/cs'>고객서비스</Link>
                        <span> / 연락처 & 영업시간 </span>
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
                        <b>연락처</b>
                        <strong>한국고객 전용 고객센터</strong>
                    </p>
                    <p>노르딕네스트는 고객님께 최상의 서비스를 제공하기 위해 노력하고 있습니다. 고객센터에서는 주말 및 공휴일을 제외하고 모든 문의 메일에 대해 영업일 기준 24시간 내 회신을 드리는 것을 목표로 합니다.</p>
                    <p>- 고객센터 이메일주소: <a href="!#">info@nordicnest.kr</a> - 카카오톡 1:1 채팅문의: <a href="!#">클릭하고 바로가기</a></p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>주소</strong></p>
                    <p>Nordic Nest AB<br />Stämpelvägen 3, SE-394 70 KALMAR, SWEDEN</p>
                    <p>Org.nr: 556628-1597 VAT: SE556628159701 고객서비스 휴무일은 아래와 같습니다.</p>
                    <p>이메일 고객센터에 한해 휴무일에도 신규 문의 접수는 가능하며, 영업일 중 모든 문의에 순차적으로 답변 드리겠습니다. </p>
                    <p>스웨덴 공휴일 중 주문 상품의 발송 등 일부 업무가 중단됨에 따라 문의 및 클레임 처리에 영향이 있을 수 있는 점 많은 양해 부탁드립니다</p>
                </div>
                <div className="tap-inner__text">
                    <p>( 스웨덴의 공휴일: 5월 1일/5월 18일/6월 6일/6월 23일/12월 25일/12월 26일)</p>
                    <p><em>이메일 고객센터:</em><span> 한국의 공휴일과 스웨덴의 공휴일</span></p>
                    <p><em>홈페이지 및 카카오톡 채팅상담:</em><span> 한국의 공휴일</span></p>
                    <p>문의사항이 있으시면 언제든지 연락해주시기 바랍니다.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
