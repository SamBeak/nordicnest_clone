import React from 'react';
import axios from 'axios';

export default function Section19Component() {
    const [cnt, setCnt] = React.useState(1);
    const [state, setState] = React.useState({
        feed : []
    });

    React.useEffect(() => {
        axios({
            url: './data/home/section19/section19.json',
            method: 'GET'
        })
        .then((res) => {
            if(res.status === 200){
                setState({
                   ...state,
                   feed : res.data.feed 
                });
            }
        })
        .catch((err) => {
            console.log(err);
        })
    }, [state]);

    const onClickBtn = (e) => {
        e.preventDefault();
        if(state.feed.length/12 > cnt){
            setCnt(cnt+1);
        }
    }

  return (
    <section id="section19">
        <div className="container">
            <div className="title">
                <p>인스타그램 리뷰 @NORDICNEST.KR</p>
            </div>
            <div className="content">
                <ul className="slide__container">
                    {
                        state.feed.map((item, idx) => {
                            if(idx < 12 * cnt){
                                return(
                                    <li key={idx} className="slide__content"><a href="!#"><img src={item.imgSrc} alt="유저 SNS피드 이미지" /></a></li>
                                )
                            }
                            else{
                                return '';
                            }
                        })
                    }
                </ul>
                <div className="slide-btn__box">
                    <button type='button' className='slide__btn' onClick={onClickBtn}>더 알아보기</button>
                </div>
            </div>
        </div>
    </section>
  )
}
