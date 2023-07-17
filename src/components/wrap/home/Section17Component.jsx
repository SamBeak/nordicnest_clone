import React from 'react';
import axios from 'axios';

export default function Section17Component() {
    const itemContainer = React.useRef();
    const [cnt, setCnt] = React.useState(0);
    const [num, setNum] = React.useState(0);

    const [ state, setState ] = React.useState({
        itemList: [],
        n: 0
    });

    React.useEffect(() => {
        axios({
            url: './data/home/section17/section17.json',
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
            setNum(0);
        }
        else if(cnt === 1){
            setNum(1);
        }
        else if(cnt === 2){
            setNum(2);
        }

    }, [cnt, state.n]);
    
    // 슬라이드 이동 버튼
    const onClickCnt1=(e)=>{
        e.preventDefault();
        setCnt(cnt-1);
        console.log(cnt);
    }
    // 슬라이드 이동 버튼
    const onClickCnt2=(e)=>{
        e.preventDefault();
        if(cnt > 1){
            setCnt(cnt-1);
        }
        else{
            setCnt(cnt+1);
        }
        console.log(cnt);
    }
    // 슬라이드 이동 버튼
    const onClickCnt3=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
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
    <section id="section17">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <div></div>
                    <p>취향저격 예상되는 신상품 추천</p>
                    <div className="item-more__box">
                        <a href="!#">
                            인기 신상품 보러가기
                            <i className="fa-solid fa-chevron-right"></i>
                        </a>
                    </div>
                </div>
                <div className="content">
                    <ul ref={itemContainer} className="item__container">
                        {
                            state.itemList.map((item, idx) => {
                                return(
                                    <li key={idx} className="item__box">
                                        <div className="item-sale__box">
                                            <span className={item.state === 'SALE' ? '' : 'on'}>{item.state}</span>
                                        </div>
                                        <div className='item-img__box'>
                                            <a href="!#">
                                                <img src={item.imgSrc} alt={item.brand} loading="lazy" />
                                                <div className='item-brand__box'>{item.brand} <br /><span>{item.product}</span></div>
                                                <div className='item-price__box'><span className={item.salePrice === '' ? 'on' : ''}>￦{item.salePrice !== '' ? commaPrice(item.salePrice) : commaPrice(item.price) }</span><span>{item.salePrice === '' ? '' : commaPrice(item.price)}</span></div>
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
                        <button type='button' className={num === 0 ? 'item-slide__btn on' : 'item-slide__btn'} onClick={onClickCnt1}></button>
                        <button type='button' className={num === 1 ? 'item-slide__btn on' : 'item-slide__btn'} onClick={onClickCnt2}></button>
                        <button type='button' className={num === 2 ? 'item-slide__btn on' : 'item-slide__btn'} onClick={onClickCnt3}></button>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
