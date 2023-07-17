import React from 'react'

export default function Section5Component() {
  return (
    <section id="section5">
            <div className="container">
                <a href="!#">
                    <div className="content">
                        <img src="./images/pages/section5/sec5_img01.jpg" alt="테이블웨어 사진" loading='lazy'/>
                        <div className="sales-text__box">
                            <p className='sales-text__text'>
                                <span>여름의 청량함을 닮은</span>
                                <br />
                                <span>테이블 웨어</span>
                                <br />
                                <span>최대 50% OFF*</span>
                            </p>
                            <div className="btn__box">
                                <button>자세히 보기</button>
                            </div>
                        </div>
                        <p className='sales-end__text'>*본 기획전은 2023년 6월 18일 일요일까지 진행됩니다.</p>
                    </div>
                </a>
            </div>
    </section>
  )
}
