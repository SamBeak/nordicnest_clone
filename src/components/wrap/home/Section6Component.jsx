import React from 'react'
import axios from 'axios';

export default function Section6Component() {

    const itemContainer = React.useRef();
    const [cnt, setCnt] = React.useState(0);

    const [ state, setState ] = React.useState({
        itemList: [],
        n: 0,
        isBtnClick: false
    });

    React.useEffect(() => {
        axios({
            url: './data/home/section6/section6.json',
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

    React.useEffect(()=>{
        itemContainer.current.style.transition = `all 0.6s ease-in-out`;
        itemContainer.current.style.left = `${-100*cnt}%`;
        // 오른쪽 끝 정지
        if(cnt>(state.n/4-2)){ // 20/4=5 => 0 1 2 3 4
            setCnt(state.n/4-2);
            itemContainer.current.style.left = `${-100*(state.n/4-2)}%`; 
        }

        // 왼쪽 끝 정지
        if(cnt<=0){ //
            setCnt(0);
            itemContainer.current.style.left = `${-100*0}%`; 
        }

    },[cnt, state.n]);

    const onClickNext=(e)=>{
        e.preventDefault();
        setCnt(cnt+1);
        console.log(cnt);
    }
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
    <section id="section6">
        <div className="container">
            <div className="gap">
                <div className="title">
                    <p>여름 테이블웨어 BEST</p>
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
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="item-slide__dot">
                        <button type='button' className='item-slide__btn on' onClick={onClickPrev}></button>
                        <button type='button' className='item-slide__btn' onClick={onClickNext}></button>
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
