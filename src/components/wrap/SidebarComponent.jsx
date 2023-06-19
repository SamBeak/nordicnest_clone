import React from 'react'

export default function SidebarComponent({sidebar}) {
  return (
    <aside id="sidebar" ref={sidebar}>
        <div className="siderbar__left">
            <div className="title">
                <p>메뉴</p>
            </div>
            <div className="content">
                <ul className="category__box">
                    <li><a href="!#">신상품</a></li>
                    <li><a href="!#">브랜드</a></li>
                    <li><a href="!#">기획전</a></li>
                    <li><a href="!#">매거진</a></li>
                    <li><a href="!#">베스트셀러</a></li>
                </ul>
                <ul className="user__box">
                    <li>
                        <a href="!#">
                            <img src="./images/user.svg" alt="유저 아이콘" />
                            <span>마이페이지</span>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="./images/heart.svg" alt="위시리스트 아이콘" />
                            <span>위시리스트</span>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="./images/comment.svg" alt="고객서비스 아이콘" />
                            <span>고객서비스</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="sidebar__right">
            <ul className="item-category__box">
                <li><a href="!#">모든 테이블웨어</a></li>
                <li><a href="!#">접시 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">머그컵 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">볼 & 면기 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">유리잔 & 글래스 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">서빙용 주방용품 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">저그 & 카라페 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">커트러리 <i className="fa-solid fa-chevron-right"></i></a></li>
                <li><a href="!#">와인 & 칵테일 <i className="fa-solid fa-chevron-right"></i></a></li>
            </ul>
        </div>
    </aside>
  )
}
