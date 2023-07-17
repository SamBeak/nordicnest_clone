import React from 'react'

export default function Section20Component() {
  return (
    <section id="section20">
        <div className="container">
                <div className="content">
                    <a href="!#">
                        <img src="./images/pages/section20/sec20_img01.png" alt="공간별 조명 추천 포스터" loading='lazy' />
                        <div className="inner-text__box">
                            <p className='inner-text__text'>
                                <span>Lighting by Space</span>
                                <br />
                                <span>공간별 조명 추천</span>
                            </p>
                            <div className="btn__box">
                                <button>자세히 보기</button>
                            </div>
                        </div>
                    </a>
                </div>
            <div className="content">
                <a href="!#">
                    <img src="./images/pages/section20/sec20_img02.jpg" alt="포터블 램프 모음전 포스터" />
                    <div className="inner-text__box">
                        <p className='inner-text__text'>
                            <span>어디서나 함께할 수 있는</span>
                            <br />
                            <span>포터블 램프 모음전</span>
                        </p>
                        <div className="btn__box">
                            <button>자세히 보기</button>
                        </div>
                    </div>
                </a>
            </div>
            <div className="content">
                <a href="!#">
                    <img src="./images/pages/section20/sec20_img03.png" alt="인기 소품 모음전 포스터" />
                    <div className="inner-text__box">
                        <p className='inner-text__text'>
                            <span>우리집을 더 특별하게</span>
                            <br />
                            <span>인기 소품 모음전</span>
                        </p>
                        <div className="btn__box">
                            <button>자세히 보기</button>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </section>
  )
}
