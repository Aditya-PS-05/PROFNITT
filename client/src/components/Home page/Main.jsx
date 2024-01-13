// Main.js
"use client";
import React, { useEffect } from 'react';
import './Main.css';

const Main = () => {
    useEffect(()=>{
        let index = 0;
        const laptopImages = ["/images/2.jpg", "/images/3.jpg", "/images/4.jpg", "/images/5.jpg","/images/6.jpg", "/images/laptop_screen.svg"];
        let laptopScreen = document.getElementById('laptop-screen');
        function setImage(){
            let indexValue = index%6;
            laptopScreen.src = laptopImages[indexValue];
            console.log(indexValue)
            index ++;
        }
        setInterval(() => {
            setImage();
        }, 5000);
    }, []);

    return (
        <main className='h-[80%] md:flex justify-between items-center'>
            <div className='text-white h-full w-[50%] flex justify-center items-center'>
                <div className='h-[60%] w-[55%]'>
                    <h1 className='text-[90px]'>ProfNITT</h1>
                    <p className='text-2xl mt-[-20px]'>The Finance and Investments club of NIT Trichy</p>
                    <div className='text-3xl'>
                        <span className='animation-container'>
                            <span className="content__container__text">We are   </span>
                            <ul className="content__container__list ">
                                <li className="content__container__list__item">Profit !</li>
                                <li className="content__container__list__item">Research !</li>
                                <li className="content__container__list__item">Quant !</li>
                                <li className="content__container__list__item">Finance !</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className='h-full'>
                <div className="bg-[url('/images/laptop_body.svg')] h-[90%] ml-[130px] flex bg-no-repeat justify-end bg-right border-none rounded-t-[10px] bg-cover">
                    <div>
                        <img src="/images/laptop_screen.svg" alt="laptop screen" className="w-full h-full" id='laptop-screen'/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/BaseBody.svg" alt="Base body" className='ml-10' />
                        <img src="/images/FootBase.svg" alt="laptop" className='ml-16' />
                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
