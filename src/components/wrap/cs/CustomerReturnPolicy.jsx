import React from 'react';
import { Link } from 'react-router-dom';
import Section1Component from '../home/Section1Component';

export default function CustomerReturnPolicy() {
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
                        <span> / 교환 & 환불 안내 </span>
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
                        <b>교환 & 환불 안내</b>
                        <strong>반품 & 환불 정책</strong>
                    </p>
                    <p>제품이 만족스럽지 않으시다면 당사로 반품 가능합니다. 노르딕네스트는 EU 전자상거래지침(E-commerce Directive)을 준수합니다. 고객님께서 제품을 수령하신 날로부터 14일 이내(고객님 혹은 제 3자가 모든 물품을 실제 수령한 시점 기준)에 특별한 사유 없이도 주문을 반품 후 취소하실 수 있습니다. 14일이 지난 이후에는 반품과 취소가 불가능합니다.</p>
                    <p>주문 취소를 원하시면 당사로 연락 주셔서 반품 후 취소 의사를 전달해주시기 바랍니다(info@nordicnest.kr). 고객센터로 연락하실 수 있습니다. </p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>배송 오류 & 이슈 & 클레임</strong></p>
                    <p>주문이나 배송에 관한 문제가 발생하면 저희 고객 센터(info@nordicnest.kr)로 연락해주시기 바랍니다. 클레임은 반드시 배송완료 후 5일 이내로 접수되어야 합니다. 고객 센터에서 불만사항 접수 진행에 대해 안내를 드릴 것입니다. 배송 중 물품이 파손되었거나 물품에 하자가 있을 경우를 포함해 주문서와 일치하지 않는 사항(오배송)등에 대해 문의 가능합니다.</p>
                    <p>반품 도중 파손, 분실이 발생할 경우 당사에서는 책임을 지지 않습니다. 물품 반송 시에 배송 추적이 가능한 배송 서비스를 이용해주세요. <em>불필요한 비용이 부과되는 것을 막기 위해 반드시 박스 겉면에 ‘Return’이라고 명시하시기 바랍니다.</em></p>
                    <p>또한 반품 시에 배송 중 파손되지 않도록 물품이 안전하게 포장되었는지를 반드시 확인 부탁 드립니다. 반송 중 물품 파손 방지를 위해 기존의 포장을 사용하시거나 이에 준하는 안전한 포장을 사용하시기 바랍니다. 저희 고객센터로 반품 의사를 표시한 날로부터 14일 이내에 물품을 보내셔야 합니다. </p>
                    <p>다음의 주소로 반송 바랍니다.</p>
                    <p>
                        <span>수령인: Nordic Nest AB (Reg. no. 556628-1597)</span>
                        <span>주소: Stämpelvägen 3</span>
                        <span>우편번호: SE-394 70, 도시: Kalmar</span>
                        <span>국가: SWEDEN</span>
                    </p>
                    <p>고객님께서 반품 후 주문을 취소하시면 당사는 배송비를 포함하여 고객님께서 지불하셨던 모든 금액을 처음 주문 결제 시 사용된 지불 수단으로 환불해드립니다. 그러나 당사가 제공하는 가장 저렴한 기본 배송 옵션이 아닌 다른 배송 옵션을 선택하여 발생한 추가 요금은 환불 금액에서 제외됩니다.</p>
                    <p>환불 시에 추가 수수료를 부과하지 않습니다. 고객님께서 반품하신 물품을 당사가 수령하기 전, 또는 고객님께서 물품을 확실하게 반송하시기 전까지 당사는 환불을 지연할 수 있습니다. 반품 도중 제품이 분실되거나 훼손된 경우, 혹은 제품을 사용한 흔적이 발견된 경우 환불 금액에서 일부 또는 전체를 공제합니다.</p>
                    <p>고객님께서 주문하신 물품이 출고되기 전에 주문 취소가 가능합니다. 주문서의 세부사항을 포함하여 이메일로 취소 요청을 보내주셔야만 취소 처리가 가능합니다. 만일 이미 물품이 출고된 경우에는 주문 취소가 불가능하며 일반 환불 정책에 따라 반품이 가능합니다.</p>
                    <p>환불에 관련하여 더 궁금한 점이 있으시면 고객 센터 (<a href="!#">info@nordicnest.kr</a>)로 문의하시기 바랍니다.</p>
                </div>
                <div className="tap-inner__text">
                    <p><strong>배송 관련 법적 책임</strong></p>
                    <p>노르딕네스트는 배송 중에 물품이 파손되거나 분실될 경우 이에 대한 책임이 있습니다. 고객님께서 반품하실 경우 반송 중 물품 파손이나 분실의 경우 고객님의 책임이 있습니다.</p>
                    <p>따라서 물품을 반송하실 경우 배송 추적이 가능하며, 보험에 가입된 배송 서비스를 이용할 것을 추천 드립니다. 반송 중 물품 파손 방지를 위해 기존의 포장을 사용하시거나 이에 준하는 안전한 포장을 사용하시기 바랍니다.</p>
                    <p>명백하게 파손된 물품이 배송되거나 인지하지 못했던 손상이 발견된 경우 즉시 저희 고객센터(<a href="!#">info@nordicnest.kr</a>)로 연락 부탁드립니다.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
