import React from 'react';
import { Link } from 'react-router-dom';
import Section17Component from '../home/Section17Component';
import Section1Component from '../home/Section1Component';

export default function NewArrivalsComponent() {
  return (
    <div id="newArrivals">
        <Section1Component />
        <div className="container">
            <div className="top-tap__container">
                <div className="top-tap__left">
                    <Link to='/'><img src="./images/new/house.svg" alt="메인으로" /></Link>
                </div>
                <div className="top-tap__right">
                    <p>
                        <Link to='/new'>신상품</Link>
                    </p>
                </div>
            </div>
            <div className="mid-tap__container">
                <div className="mid-tap__title">
                    <h2>신상품</h2>
                </div>
                <span>인기 브랜드 신상품</span>
                <div className="mid-tap__content">
                    <div className="img__box">
                        <img src="./images/new/category01.png" alt="이탈라" />
                        <div className="text__box">
                            <p>Iittala</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category02.png" alt="스타우브" />
                        <div className="text__box">
                            <p>STAUB</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category03.jpeg" alt="쿠이디자인" />
                        <div className="text__box">
                            <p>Cooee Design</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category04.jpg" alt="스텔톤" />
                        <div className="text__box">
                            <p>Stelton</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category05.jpg" alt="하이롤" />
                        <div className="text__box">
                            <p>Heirol</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category06.jpg" alt="하우스닥터" />
                        <div className="text__box">
                            <p>House Doctor</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category07.jpg" alt="오이오이" />
                        <div className="text__box">
                            <p>OYOY</p>
                        </div>
                    </div>
                    <div className="img__box">
                        <img src="./images/new/category08.jpg" alt="블루밍빌" />
                        <div className="text__box">
                            <p>Bloomingville</p>
                        </div>
                    </div>
                </div>
            </div>
            <Section17Component />
            <div className="bot-tap__container">
                <div className="bot-top__box">
                    <button>2872 정렬 기준 신상품순<i></i></button>
                </div>
                <div className="bot-bot__box">
                    <div className="bot-left__box"></div>
                    <div className="bot-right__box"></div>
                </div>
            </div>
        </div>
    </div>
  )
}
