import React from 'react'

export default function FooterComponent() {
  return (
    <footer id="footer">
      <div className="brid__box">
          <img src="./images/first_bird.svg" alt="첫번째 새" />
          <img src="./images/second_bird.svg" alt="두번째 새" />
      </div>
      <div className="news__container">
        <div className="title">
          <p>뉴스레터 구독하고 5% 할인코드 받기</p>
        </div>
        <div className="content">
          <form action="" method='POST'>
            <input type="email" placeholder='이메일주소' autoComplete='off' className='subsEmail' name='subsEmail'/>
            <button type='submit' className='subsEmailBtn'>구독하기</button>
          </form>
          <div className="notice__box">
            <span>
            뉴스레터를 구독하시면 5% 할인코드가 포함된 웰컴메일이 고객님의 이메일주소로 발송됩니다. 노르딕네스트 뉴스레터에서는 최신 북유럽 디자인 트렌드와 맞춤 세일 정보를 매주 확인할 수 있습니다. 다채로운 정보가 가득한 뉴스레터를 지금 바로 구독해보세요.
            </span>
          </div>
        </div>
      </div>
      <div className="foot-brand__container">
        <div className="foot-brand__logo">
          <a href="!#">
            <img src="./images/logo.svg" alt="NORDICNEST 로고" />
          </a>
          <p>북유럽을 만나는 가장 쉬운 방법 - 노르딕네스트</p>
        </div>
      </div>
      <div className="service-category__container">
        <div className="service-category__ground">
          <div className="service-category__box">
            <div className="title">
              <p>고객서비스</p>
            </div>
            <div className="content">
              <ul className="service-category__list">
                <li><a href="!#">고객서비스</a></li>
                <li><a href="!#">연락처 & 영업시간</a></li>
                <li><a href="!#">배송 정보</a></li>
                <li><a href="!#">FAQ - 자주묻는질문</a></li>
                <li><a href="!#">배송 조회</a></li>
                <li><a href="!#">교환 & 환불 안내</a></li>
                <li><a href="!#">개인 정보 보호 정책</a></li>
                <li><a href="!#">반품 요청 및 클레임 등록</a></li>
                <li><a href="!#">사이트 이용 약관</a></li>
                <li><a href="!#">쿠키에 대하여</a></li>
              </ul>
            </div>
          </div>
          <div className="service-category__box">
            <div className="title">
              <p>제품 카테고리</p>
            </div>
            <div className="content">
              <ul className="service-category__list">
                <li><a href="!#">테이블웨어</a></li>
                <li><a href="!#">주방</a></li>
                <li><a href="!#">인테리어소품</a></li>
                <li><a href="!#">조명</a></li>
                <li><a href="!#">러그 & 패브릭</a></li>
                <li><a href="!#">수납 & 가구</a></li>
                <li><a href="!#">야외 가구 및 정원용 가구</a></li>
                <li><a href="!#">기프트 카드</a></li>
              </ul>
            </div>
          </div>
          <div className="service-category__box">
            <div className="title">
              <p>쇼핑 정보</p>
            </div>
            <div className="content">
              <ul className="service-category__list">
                <li><a href="!#">매거진</a></li>
                <li><a href="!#">브랜드</a></li>
                <li><a href="!#">디자이너</a></li>
                <li><a href="!#">진행 중인 기획전 및 혜택</a></li>
                <li><a href="!#">SALE</a></li>
                <li><a href="!#">할인코드</a></li>
                <li><a href="!#">신상품</a></li>
                <li><a href="!#">선물 추천</a></li>
                <li><a href="!#">시즌 이벤트</a></li>
                <li><a href="!#">A-Z</a></li>
                <li><a href="!#">베스트셀러</a></li>
                <li><a href="!#">2023 Nordic Design Festa</a></li>
              </ul>
            </div>
          </div>
          <div className="service-category__box">
            <div className="title">
              <p>노르딕네스트</p>
            </div>
            <div className="content">
              <ul className="service-category__list">
                <li><a href="!#">노르딕네스트 소개</a></li>
                <li><a href="!#">기업의 사회적 책임</a></li>
                <li><a href="!#">채용 정보</a></li>
                <li><a href="!#">미디어</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sns__container">
        <div className="sns__ground">
          <div className="sns__box">
            <a href="!#"><img src="./images/footer/nn-icon-facebook.svg" alt="페이스북 아이콘" /></a>
          </div>
          <div className="sns__box">
            <a href="!#"><img src="./images/footer/nn-icon-instagram.svg" alt="인스타그램 아이콘" /></a>
          </div>
        </div>
      </div>
      <div className="info__container">
        <div className="info-img__box">
          <img src="./images/footer/KCP.png" alt="KCP 마크" />
          <img src="./images/footer/PAYCO.png" alt="PAYCO 마크" />
        </div>
        <div className="info-msg__box">
          <p>Nordic Nest AB (EU-VAT-Number: SE556628159701), Stämpelvägen 3, 394 70 Kalmar, Sweden 고객센터: info@nordicnest.kr, 카카오톡 채널: @노르딕네스트</p>
          <br />
          <p>&copy; 2003 - 2023 Copyright Nordic Nest AB</p>
        </div>
      </div>
    </footer>
  )
}
