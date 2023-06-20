import React from 'react'
import Section1Component from '../home/Section1Component'

export default function CustomerService() {
  return (
    <div id="customer">
        <Section1Component />
        <div className="container">
            <div className="top-tap__container">
                <div className="top-tap__left">
                    <a href="!#"><img src="./images/cs/house.svg" alt="메인으로" /></a>
                </div>
                <div className="top-tap__right">
                    <p>
                        <a href="!#">고객서비스</a>
                    </p>
                </div>
            </div>
            <div className="tap-btn__container">
                <ul className="tap-btn__box">
                    <li><button className="tap__btn">연락처 & 영업시간</button></li>
                    <li><button className="tap__btn">배송 조회</button></li>
                    <li><button className="tap__btn">배송 정보</button></li>
                    <li><button className="tap__btn">교환 & 환불 안내</button></li>
                    <li><button className="tap__btn">반품 요청 및 클레임 등록</button></li>
                    <li><button className="tap__btn">사이트 이용 약관</button></li>
                    <li><button className="tap__btn">개인 정보 보호 정책</button></li>
                    <li><button className="tap__btn">쿠키에 대하여</button></li>
                    <li><button className="tap__btn">FAQ - 자주묻는질문</button></li>
                </ul>
            </div>
            <div className="tap-inner__container">
                <div className="tap-inner__text">
                    <p>고객서비스 운영안내</p>
                    <span>어떤 색상이 여러분의 집에 가장 잘 어울릴 지, 주문한 물건이 언제 도착할 지 등 저희 고객센터는 노르딕네스트와의 경험의 시작부터 끝까지 모든 과정에서 도움을 드리고 있습니다. 언제든 도움이 필요하실 때 연락 부탁드립니다.</span>
                </div>
                <div className="tap-inner__text">
                    <p>카카오톡 문의</p>
                    <span>노르딕네스트 카카오톡 채널 추가 후 챗봇 또는 1:1 상담 기능을 이용해보세요! <a href="!#">(바로가기)</a></span>
                </div>
                <div className="tap-inner__text">
                    <p>사이트 내 채팅문의</p>
                    <span>사이트 내 쇼핑 중 문의사항이 있는 경우 우측 하단의 채팅버튼을 클릭하거나 여기를 눌러 바로 1:1 상담 기능을 이용해보세요!<br /><br /><br />※채팅 운영시간: 평일 10시 ~ 16시</span>
                </div>
                <div className="tap-inner__text">
                    <p>한국어 이메일문의</p>
                    <span>이메일문의의 경우 영업일 기준 24시간 내 회신을 드리는 것을 목표로 합니다. <br /><br /><br /><a href="!#">info@nordicnest.kr <br /><br /><br /></a> 제품의 파손, 하자 등으로 인한 교환 및 환불 요청은 <a href="!#">여기</a>를 클릭해 등록하실 수 있습니다.</span>
                </div>
            </div>
        </div>
    </div>
  )
}
