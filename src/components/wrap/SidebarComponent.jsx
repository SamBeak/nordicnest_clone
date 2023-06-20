import React from 'react';

export default function SidebarComponent({sidebar, setIsNavBar, category, name}) {

    

//    React.useEffect(() => {
//     console.log(category);
//     console.log(name);
//    });


    // 네비게이션바 닫기 클릭 이벤트
    const onClickClose = (e) => {
        e.preventDefault();
        if( e.target === sidebar.current){
            setIsNavBar(false);
            sidebar.current.style.transform = `translateX(-100vh)`;
            sidebar.current.style.backgroundColor = `rgba(0, 0, 0, 0)`;
        }
    };

  return (
    <aside id="sidebar" ref={sidebar} onClick={onClickClose}>
        <div className="sidebar__container">
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
                    {
                        category.map((item, idx) => {
                            if(item.name === name){
                                return(
                                    <div key={idx}>
                                        <li><a href="!#">모든 {name}</a></li>
                                        {
                                            item.sort.map((sort, num) => {
                                                return(
                                                    <li key={num}><a href="!#">{sort.kind} <i className="fa-solid fa-chevron-right"></i></a></li>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            }
                        })
                    }
                    {/* <li><a href="!#">접시 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">머그컵 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">볼 & 면기 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">유리잔 & 글래스 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">서빙용 주방용품 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">저그 & 카라페 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">커트러리 <i className="fa-solid fa-chevron-right"></i></a></li>
                    <li><a href="!#">와인 & 칵테일 <i className="fa-solid fa-chevron-right"></i></a></li> */}
                </ul>
            </div>
        </div>
    </aside>
  )
}
