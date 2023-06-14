import React from 'react';
import axios from 'axios';
import $ from 'jquery';

export default function OnTopComponent() {

    const [ state, setState ] = React.useState({
        onTopText : []
    });

    React.useEffect(() => {
        axios({
            url: './data/onTop/onTop.json',
            method: 'GET'
        })
        .then((res) => {
            if(res.status===200){
                setState({
                    ...state,
                    onTopText : res.data.onTopText
                })
            }
        })
        .catch((err) => {
            console.log(err);
        });
    },[]);

    React.useEffect(() => {
        const $onTopPointer = $('#onTop .onTop__pointer:first-child');
        const $onTopPointer2 = $('#onTop .onTop__pointer:nth-child(2)');
        const $onTopPointer3 = $('#onTop .onTop__pointer:nth-child(3)');
        const $onTopPointer4 = $('#onTop .onTop__pointer:last-child');

        let cnt = 0;
        let boxCnt = 0;
        let setId = 0;

        function slidePointer(){
            if(cnt === 1){
                if(boxCnt === 1){
                    $onTopPointer.css({
                        pointerEvents: "auto",
                        transform: "translateY(0%)",
                        transition: "transfrom 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1",
                        display: "block"
                    });
                    $onTopPointer2.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                    $onTopPointer3.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                    $onTopPointer4.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                }
                else if(boxCnt === 2){
                    $onTopPointer2.css({
                        pointerEvents: "auto",
                        transform: "translateY(-150%)",
                        transition: "transform 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1"
                    });
                }
                else if(boxCnt === 3){
                    $onTopPointer3.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                    $onTopPointer4.css({
                        pointerEvents: "auto",
                        transform: "translateY(0%)",
                        transition: "transfrom 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1",
                        display: "block"
                    });
                }
            }
            else if(cnt === 2){
                if( boxCnt === 1){
                    $onTopPointer.css({
                        pointerEvents: "auto",
                        transform: "translateY(-150%)",
                        transition: "transform 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1"
                    });
                }
                else if(boxCnt === 2){
                    $onTopPointer2.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                    $onTopPointer3.css({
                        pointerEvents: "auto",
                        transform: "translateY(0%)",
                        transition: "transfrom 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1",
                        display: "block"
                    });
                }
                else if(boxCnt === 3){
                    $onTopPointer4.css({
                        pointerEvents: "auto",
                        transform: "translateY(-150%)",
                        transition: "transform 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1"
                    });
                }
            }
            else if(cnt === 3){
                if(boxCnt === 1){
                    $onTopPointer.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                    $onTopPointer2.css({
                        pointerEvents: "auto",
                        transform: "translateY(0%)",
                        transition: "transfrom 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1",
                        display: "block"
                    });
                }
                else if(boxCnt === 2){
                    $onTopPointer3.css({
                        pointerEvents: "auto",
                        transform: "translateY(-150%)",
                        transition: "transform 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1"
                    });
                }
                else if(boxCnt === 3){
                    $onTopPointer4.css({
                        pointerEvents: "none",
                        transform: "",
                        transition: "",
                        opacity: "",
                        display: "none"
                    });
                    $onTopPointer.css({
                        pointerEvents: "auto",
                        transform: "translateY(0%)",
                        transition: "transfrom 700ms ease 0s, opacity 700ms ease 0s",
                        opacity: "1",
                        display: "block"
                    });
                }
            }
        }

        function slideCnt(){
            if(cnt >= 3){ 
                cnt = 0 ;
                cnt++;
                if(boxCnt > 3){
                    boxCnt = 0;
                }
                else{
                    boxCnt++;
                }
                slidePointer();
            }
            else{
                cnt++;
                slidePointer();
            }
        }

        function autoTimer(){
            clearInterval(setId);
            setId = setInterval(slideCnt, 1000);
        }
        autoTimer();
    });

  return (
    <div id="onTop">
        <div className="onTop__container">
            <div>
                <p></p>
            </div>
            <div className="onTop__center">
                {
                    state.onTopText.map((item, idx) => {
                        if(idx === 0){
                            return(
                                <div key={idx} className="onTop__pointer">
                                    <p>
                                        <span>{item.msg}</span>
                                        <b>{item.msg2}</b>
                                        <span>{item.msg3}</span>
                                    </p>
                                </div>
                            )
                        }
                        else{
                            return(
                                <div key={idx} className="onTop__pointer">
                                    <p>{item.msg}</p>
                                </div>
                            )
                        }
                    })
                }
            </div>
            <div className="onTop__right">
                <span className="onTop__lang">
                    <div className="lang__box">
                        <img src="./images/kor.svg" alt="한국 국기" />
                        <span>한국어</span>
                    </div>
                </span>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
        </div>
    </div>
  )
}
