import React from 'react'

export default function OnTopComponent() {
    // const [ state, setState ] = React.useState({
    //     isPointer: false
    // });
  return (
    <div id="onTop">
        <div>
            <p></p>
        </div>
        <div className="onTop__center">
            <div className="onTop__pointer">
                <p>
                    <span> 👍북유럽 </span>
                    <b>최대</b>
                    <span> 리빙 인테리어 셀렉트샵</span>
                </p>
            </div>
            {/* <div className="onTop__pointer">
                <p>✈ 18만원 이상 한국무료직배송</p>
            </div>
            <div className="onTop__pointer">
                <p>🎁 매일 진행되는 세일</p>
            </div>
            <div className="onTop__pointer">
                <p>🛒 카드사별 무이자할부 혜택</p>
            </div>
            <div className="onTop__pointer">
                <p>💻 이 사이트는 크롬 & 엣지 브라우저에 최적화되어 있습니다.</p>
            </div> */}
        </div>
        <div className="onTop__right">
            <span className="onTop__lang">
                <div className="lang__box">
                    <img src="./images/kor.svg" alt="한국 국기" />
                    <span>한국어</span>
                </div>
            </span>
            <i class="fa-solid fa-chevron-down"></i>
        </div>
    </div>
  )
}
