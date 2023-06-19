import React from 'react'

export default function SidebarComponent() {
  return (
    <aside id="sidebar">
        <div className="first">
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
                            <img src="" alt="" />
                            <span>마이페이지</span>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="" alt="" />
                            <span>위시리스트</span>
                        </a>
                    </li>
                    <li>
                        <a href="!#">
                            <img src="" alt="" />
                            <span>고객서비스</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div className="second">
            <ul className="item-category__box">
                <li><a href="!#">모든 테이블웨어</a></li>
                <li><a href="!#">접시</a></li>
            </ul>
        </div>
    </aside>
  )
}
