import React from 'react'

export default function HeaderComponent() {
  const [ state, setState ] = React.useState({
    isSearch: false
  });

  const onChangeSearching =(e) => {
    const { value } = e.target;
    let isSearch = false;

    if( value !== ''){
      isSearch = true;
      setState({
        ...state,
        isSearch: isSearch,
        searchMsg: value
      });
    }
    else{
      isSearch = false;
      setState({
        ...state,
        isSearch: isSearch,
        searchMsg: value
      })
    }
  };

  return (
    <header id="header">
      <div className="container">
        <div className="left-box">
          <div className={state.isSearch ? 'search__box on' : 'search__box'}>
            <input type="text" placeholder='검색' name='searching_input' id='searchingInput' autoComplete='off' onChange={onChangeSearching}/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="right-box">
          <div className="logo__box">
            <a href="!#">
              <img src="./images/header/logo.svg" alt="브랜드 로고" />
            </a>
          </div>
          <div className="user__box">
            <a href="!#"><img src="./images/header/comment.svg" alt="" /></a>
            <a href="!#"><img src="./images/header/user.svg" alt="" /></a>
            <a href="!#"><img src="./images/header/heart.svg" alt="" /></a>
            <button type='button'></button>
          </div>
        </div>
      </div>
      <nav className="nav__container">
        <div className="nav__sort">
          <ul className="sort__list">
            <li><a href="!#">테이블웨어</a></li>
            <li><a href="!#">인테리어소품</a></li>
            <li><a href="!#">주방</a></li>
            <li><a href="!#">조명</a></li>
            <li><a href="!#">러그 & 패브릭</a></li>
            <li><a href="!#">수납 & 가구</a></li>
          </ul>
        </div>
        <div className="nav__brand">
          <ul className="brand__list">
            <li><a href="!#">신상품</a></li>
            <li><a href="!#">브랜드</a></li>
            <li><a href="!#">기획전</a></li>
            <li><a href="!#">매거진</a></li>
            <li><a href="!#">아울렛</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
