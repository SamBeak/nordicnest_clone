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
                        <span>신상품</span>
                    </p>
                </div>
            </div>
            <div className="mid-tap__container">
                <div className="mid-tap__title">
                    <h1>신상품</h1>
                </div>
                <p>인기 브랜드 신상품</p>
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
                    <span>2872 정렬 기준</span><button> 신상품순<i className="fa-solid fa-chevron-down"></i></button>
                </div>
                <div className="bot-bot__box">
                    <div className="bot-left__box">
                        <ul className="category-filter__box">
                            <li>
                                <h4>카테고리</h4>
                                <span>187<i className="fa-solid fa-chevron-down"></i></span>
                            </li>
                            <li>
                                <h4>재고있는 제품만 보기</h4>
                                <input type="checkbox" />
                            </li>
                            <li className='multi-range__box'>
                                {/* 진짜 슬라이더 */}
                                <input type="range" id="input-left" min="0" max="100"  />
                                <input type="range" id="input-right" min="0" max="100"  />
                                {/* 커스텀 슬라이더 */}
                                <div className="slider">
                                    <div className="track"></div>
                                    <div className="range"></div>
                                    <div className="thumb left"></div>
                                    <div className="thumb right"></div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="bot-right__box">
                        <ul className="item__container">
                            <li className="item__box">
                                <div className="item-sale__box">
                                    <span>SALE</span>
                                </div>
                                <div className='item-img__box'>
                                    <a href="!#">
                                        <img src="./images/pages/section6/item_img01.jpg" alt="Gense | 겐세" />
                                        <div className='item-brand__box'>Gense | 겐세 <br /><span>포커스디럭스 커트러리 12 pcs, stainless steel</span></div>
                                        <div className='item-price__box'><span>￦{commaPrice(14000)}</span><span>￦{commaPrice(18000)}</span></div>
                                    </a>
                                </div>
                                <div className='item-nums__box'>
                                    <i className="fa-solid fa-circle fa-2xs"></i>
                                    <span>재고 있음</span>
                                </div>
                                <div className="item-icon__box">
                                    <button className="item-icon"><img src="./images/heart.svg" alt="좋아요" /></button>
                                    <button className="item-icon"><img src="./images/wishList.svg" alt="장바구니 담기" /></button>
                                </div>
                            </li>
                            <li className="item__box">
                                <div className="item-sale__box">
                                    <span>SALE</span>
                                </div>
                                <div className='item-img__box'>
                                    <a href="!#">
                                        <img src="./images/pages/section6/item_img01.jpg" alt="Gense | 겐세" />
                                        <div className='item-brand__box'>Gense | 겐세 <br /><span>포커스디럭스 커트러리 12 pcs, stainless steel</span></div>
                                        <div className='item-price__box'><span>￦{commaPrice(14000)}</span><span>￦{commaPrice(18000)}</span></div>
                                    </a>
                                </div>
                                <div className='item-nums__box'>
                                    <i className="fa-solid fa-circle fa-2xs"></i>
                                    <span>재고 있음</span>
                                </div>
                                <div className="item-icon__box">
                                    <button className="item-icon"><img src="./images/heart.svg" alt="좋아요" /></button>
                                    <button className="item-icon"><img src="./images/wishList.svg" alt="장바구니 담기" /></button>
                                </div>
                            </li>
                            <li className="item__box">
                                <div className="item-sale__box">
                                    <span>SALE</span>
                                </div>
                                <div className='item-img__box'>
                                    <a href="!#">
                                        <img src="./images/pages/section6/item_img01.jpg" alt="Gense | 겐세" />
                                        <div className='item-brand__box'>Gense | 겐세 <br /><span>포커스디럭스 커트러리 12 pcs, stainless steel</span></div>
                                        <div className='item-price__box'><span>￦{commaPrice(14000)}</span><span>￦{commaPrice(18000)}</span></div>
                                    </a>
                                </div>
                                <div className='item-nums__box'>
                                    <i className="fa-solid fa-circle fa-2xs"></i>
                                    <span>재고 있음</span>
                                </div>
                                <div className="item-icon__box">
                                    <button className="item-icon"><img src="./images/heart.svg" alt="좋아요" /></button>
                                    <button className="item-icon"><img src="./images/wishList.svg" alt="장바구니 담기" /></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
