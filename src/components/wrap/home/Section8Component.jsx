import React from 'react';
import axios from 'axios';

export default function Section8Component() {

    const itemContainer = React.useRef();
    const [cnt, setCnt] = React.useState(0);
    const [isBtn, setIsBtn] = React.useState(false);

    const [ state, setState ] = React.useState({
        itemList: [],
        n: 0
    });

    React.useEffect(() => {
        axios({
            url: './data/home/section8/section8.json',
            method: 'GET'
        })
        .then((res) => {
            if(res.status===200){
                setState({
                    ...state,
                    itemList: res.data.itemList,
                    n: res.data.itemList.length
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });
    }, [state]);

    React.useEffect(() => {
        itemContainer.current.style.transition = `all 0.3s ease-in-out`;
        itemContainer.current.style.transform = `translate(${-100*cnt}%)`;

        if(cnt <= 0){
            setCnt(0);
            itemContainer.current.style.transform = `translate(${-100*0}%)`;
        }
        else if(cnt > state.n/4-1){
            setCnt(state.n/4-1);
            itemContainer.current.style.transform = `translate(${-100*state.n/4-1})`;
        }

        if(cnt === 0){
            setIsBtn(false);
        }
        else if(cnt === 1){
            setIsBtn(true);
        }

    }, [cnt, state.n]);

    // 슬라이드 이동 버튼
    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
        console.log(cnt);
    }

    // 슬라이드 이동 버튼
    const onClickPrev=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
        console.log(cnt);
    }

    // 판매가 콤마
    const commaPrice=(price)=>{
        let value = price.toString();
        const regExp = /(^\d+)(\d{3})/g;
        while( regExp.test(value) ){
            return  value.replace(regExp, '$1,$2');
        }        
    }

  return (
    <section id="section8">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <p>북유럽 감성조명 특가 모음</p>
                </div>
                <div className="content">
                    <ul ref={itemContainer} className="item__container">
                        {
                            state.itemList.map((item, idx) => {
                                return(
                                    <li key={idx} className="item__box">
                                        <div className="item-sale__box">
                                            <span>SALE</span>
                                        </div>
                                        <div className='item-img__box'>
                                            <a href="!#">
                                                <img src={item.imgSrc} alt={item.brand} />
                                                <div className='item-brand__box'>{item.brand} <br /><span>{item.product}</span></div>
                                                <div className='item-price__box'><span>￦{commaPrice(item.salePrice)}</span><span>￦{commaPrice(item.price)}</span></div>
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
                                )
                            })
                        }
                    </ul>
                    <div className="item-slide__dot">
                        <button type='button' className={isBtn ? 'item-slide__btn' : 'item-slide__btn on'} onClick={onClickPrev}></button>
                        <button type='button' className={isBtn ? 'item-slide__btn on' :'item-slide__btn'} onClick={onClickNext}></button>
                    </div>
                    <div className="item-more__box">
                        <a href="!#">
                            테이블웨어 더보기
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
