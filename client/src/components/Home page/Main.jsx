"use client";
import React, { useEffect } from 'react';
import './Main.css';

const Main = () => {
    useEffect(()=>{
        let index = 0;
        const laptopImages = ["/images/3 (1).jpg", "/images/4 (1).jpg","/images/5 (1).jpg","/images/6 (1).jpg"];
        let laptopScreen = document.getElementById('laptop-screen');
        function setImage(){
            let indexValue = index%4;
            laptopScreen.src = laptopImages[indexValue];
            console.log(indexValue)
            index ++;
        }
        setInterval(() => {
            setImage();
        }, 3000);
    }, []);

    return (
        <main className='mt-10 md:flex justify-between items-center border-2 border-red-500 relative z-[1000]'>
            <div className='text-white h-full md:w-[50%] sm:w-full flex justify-center items-center border-2 border-green-500'>
                <div className='h-[60%] w-[55%] border-2 border-red-500'>
                    <h1 className='text-[90px] font-clashDisplay'>ProfNITT</h1>
                    <p className='text-2xl mt-[-20px] font-thin font-PPSupplyMono'>The Finance and Investments club of NIT Trichy</p>
                    <div className='text-3xl font-PPSupplyMono font-thin'>
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
            <div className='h-full border-2 border-red-500 w-full sm:mt-10 md:w-[48%] relative'>
                <div className="bg-[url('/images/laptop_body.svg')] h-[90%] ml-[130px] flex bg-no-repeat justify-end bg-right border-none rounded-t-[10px] bg-cover z-[1000]">
                    <div className='h-full'>
                        <div className='h-[380px] w-[380px] border-0 rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] relative bottom-0 right-[40%] z-[10]'>
                        </div>
                        <img src="/images/3 (1).jpg" alt="laptop screen" className="w-full h-full relative z-[1000]" id='laptop-screen'/>
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/BaseBody.svg" alt="Base body" className='ml-10 z-[1000]' />
                        <img src="/images/FootBase.svg" alt="laptop" className='ml-16 z-[1000]' />
                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
