import React from 'react';
import axios from 'axios';
import SidebarComponent from './SidebarComponent';

export default function HeaderComponent() {
  const sidebar = React.useRef();
  const [ isNavBar, setIsNavBar ] = React.useState(false);
  const [ state, setState ] = React.useState({
    isSearch: false,
    name: '',
    category: [],
    sort: []
  });

  React.useEffect(() => {
    axios({
      url: './data/nav/navigation.json',
      method: 'GET'
    })
    .then((res) => {
      if(res.status === 200){

        setState({
          ...state,
          category: res.data.category
        });
        
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }, []);
  
  // 검색창 변화 이벤트
  const onChangeSearching =(e) => {
    const { value } = e.target;
    let isSearch = false;

    if( value !== ''){
      isSearch = true;
      setState({
        ...state,
        isSearch: isSearch
      });
    }
    else{
      isSearch = false;
      setState({
        ...state,
        isSearch: isSearch
      })
    }
  };

  // 네비게이션 모덜창 이벤트
  React.useEffect(() => {
    if(isNavBar === true){
      sidebar.current.style.transition = `all 0.3s ease-in-out`;
      sidebar.current.style.transform = `translateX(0)`;
    }
  });

  // 네비게이션바 열기 클릭 이벤트
  const onClickNavBar = (e) => {
    e.preventDefault();
    setIsNavBar(true);
    const {value} = e.target;
    setState({
      ...state,
      name: value
    });
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
            <li><button type='button' onClick={onClickNavBar} value="테이블웨어">테이블웨어</button></li>
            <li><button type='button' onClick={onClickNavBar} value="인테리어소품">인테리어소품</button></li>
            <li><button type='button' onClick={onClickNavBar} value="주방">주방</button></li>
            <li><button type='button' onClick={onClickNavBar} value="조명">조명</button></li>
            <li><button type='button' onClick={onClickNavBar} value="러그 & 패브릭">러그 & 패브릭</button></li>
            <li><button type='button' onClick={onClickNavBar} value="수납 & 가구">수납 & 가구</button></li>
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
      {
        isNavBar === true ? <SidebarComponent sidebar={sidebar} setIsNavBar={setIsNavBar} category={state.category} name={state.name}/> : null
      }
    </header>
  )
}
