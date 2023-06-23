import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerShopingInfo() {
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
                        <span> / 배송 정보 </span>
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
                <div className="tap-inner__img">
                    <img src="./images/cs/faq.jpg" alt="FAQ" />
                </div>
                <div className="tap-inner__text">
                    <p><i>*영업일은 공휴일, 주말을 제외한 평일을 의미합니다. 상기 배송기일은 예상치이며 현지 배송사정 및 통관 상황에 따라 보장되지 않을 수 있습니다.</i></p>
                    <p><i>**고객님의 상품이 한국에 도착하면 통관 과정을 거친 뒤 국내 배송이 시작됩니다. 통관 과정에서 고객님의 확인이 필요할 수 있습니다.</i></p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>상품이 준비되고 출고되는 기간</strong></p>
                    <p>
                        <span>- 상품의 출고일은 상품의 준비 상태 및 재고 상태에 따라 달라집니다.</span>
                        <span>- 상품의 재고가 있는 경우 출고 준비를 위해 보통 1-2 영업일이 소요됩니다.</span>
                        <span>- 상품의 재고가 없는 경우에는 통상적으로 9 영업일 이상 소요되며, 공급사의 스케쥴 마다 달라집니다. 대략적인 재입고 예정일은 상품 구매 페이지에서 확인하실 수 있습니다.</span>
                    </p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>출고 후 배송완료까지 걸리는 기간</strong></p>
                    <p>
                        <span>주문 시 선택하신 배송옵션 마다 소요되는 기간이 다릅니다. 배송옵션별 기간은 아래 정보를 참고해주세요.</span>
                    </p>
                </div>
                <div className="tap-inner__text">
                    <p><em>배송옵션</em></p>
                    <ul>
                        <li>ECMS 익스프레스: 약 6-10 영업일 소요, 기본 배송료 ₩19,800</li>
                        <li>FEDEX (페덱스): 약 3-7 영업일 소요, 기본 배송료 ₩22,800</li>
                    </ul>
                    <p><i>* 주문 상품의 무게나 크기에 따라 특정 배송옵션 선택이 불가능할 수 있습니다. * 영업일: 공휴일, 주말을 제외한 평일. * 위 배송 기간은 통관에 소요되는 시간을 제외한 '출고 이후 예상 배송 기간'입니다. 배송 기간은 상품의 크기와 종류 및 배송사 사정에 의해 다소 달라질 수 있습니다. 통관에 소요되는 기간은 배송 기간에 포함되지 않으며, 통관에서 문제 및 지연 발생시 당사 노르딕네스트에서는 책임지지 않습니다. 또한 위 예상 배송 기간은 예상치로 당사 노르딕네스트에서 보장하지 않습니다.</i></p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>주문 후 배송 처리 과정</strong></p>
                    <p>주문 접수부터 포장, 출고 후 배송까지의 과정을 참고해주세요:</p>
                    <ul>
                        <li>주문확인서가 이메일로 발송됩니다. 기입하신 주소와 연락처 등을 꼼꼼하게 확인해주세요</li>
                        <li>주문 접수 후 포장이 시작됩니다. 두 개 이상의 물품을 구입하셨다면 모든 제품의 재고가 있을 시에 출고됩니다. </li>
                        <li>안전하게 포장되어 스웨덴 창고에서 국제 배송을 위해 출고됩니다. 출고 직후 배송확인서가 이메일로 발송됩니다. </li>
                        <li>고객님의 상품이 한국에 도착하면 통관 과정을 거친 뒤 국내 배송이 시작됩니다.</li>
                        <li>통관 과정에서 고객님의 확인이 필요할 수 있습니다. 통관 과정에 대한 자세한 내용은 페이지 하단을 참고해주세요.</li>
                        <li>배송 및 통관 관련 정보는 각 배송사에서 카카오톡 알림톡 또는 문자 메세지로 안내드립니다.</li>
                        <li>배송이 완료됩니다. 수령인 부재로 미배달 시 관할 배송 업체로 반드시 연락해주시기 바랍니다.</li>
                    </ul>
                </div>
                <div className="tap-inner__text">
                    <p><strong>주문 상품 통관</strong></p>
                    <ul>
                        <li>ECMS익스프레스</li>
                        <ul>
                            <li>롯데 글로벌로지스에서 통관 및 국내배송을 대행합니다.</li>
                            <li>총 상품가액이 $150을 초과할 시 통관 과정에서 관부가세가 발생할 수 있습니다.</li>
                            <li>통관 및 국내배송과 관련한 자세한 정보는 고객님의 카카오톡으로 발송되는 알림톡 메시지를 참조해주시기 바랍니다.</li>
                        </ul>
                        <li>FEDEX (페덱스)</li>
                        <ul>
                            <li>상품이 출고되면 고객님께 배송 관련 정보를 이메일 또는 문자메시지로 안내드립니다.</li>
                            <li>총 상품가액이 $150을 초과하는 경우 통관 과정에서 관부가세가 발생할 수 있습니다.</li>
                            <li>통관 및 국내배송과 관련한 자세한 정보는 고객님의 카카오톡으로 발송되는 알림톡 메시지를 참조해주시기 바랍니다.</li>
                        </ul>
                    </ul>
                    <p>이 외에 더 자세한 정보를 원하신다면 <a href="!#">사이트 이용약관</a>을 참고해주세요.</p>
                    <p>빠르고 편리하게, 즐거운 쇼핑 하시기 바랍니다.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
