"use client";
// import { useEffect } from 'react';
import './Main.css';

const Main = () => {

    return (
        <main className='md:flex justify-between items-center relative z-[1000]'>
            <div className='h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute bottom-[-20%] right-[20%] z-0 shadow-2xl shadow-[#010725] blur-[150px] border-2 border-red-500' />
            <div className='md:flex justify-between items-center w-full h-[90%]'>
            <div className='text-white h-full ml-[6vw] md:w-[40%] sm:w-full flex justify-start items-center z-[2000000] '>
                <div className='w-[75%] sm:mt-10 mt-6 md:mt-0 md:ml-0 z-[100000]'>
                    <img src="/images/ProfNITT_text.svg" alt="ProfNITT text image" />
                    <p className='text-2xl font-thin font-PPSupplyMono mt-4'>The Finance and Investments club of NIT Trichy</p>
                    <div className='text-3xl font-PPSupplyMono font-thin'>
                        <span className='animation-container'>
                            <span className="content__container__text">We are</span>
                            <ul className="content__container__list ml-3">
                                <li className="content__container__list__item">Profit !</li>
                                <li className="content__container__list__item">Research !</li>
                                <li className="content__container__list__item">Quant !</li>
                                <li className="content__container__list__item">Finance !</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className='w-full h-full md:w-[45%] relative z-[2000000]'>
                <div className="bg-[url('/images/laptop_body.svg')] h-[83%] ml-[130px] flex bg-no-repeat justify-end bg-right border-none rounded-t-[10px] bg-cover relative z-[1000] mt-8">
                    <div className='h-full w-full '>
                        <img src="/images/laptop.svg" alt="laptop screen" className="w-full" id='laptop-screen' />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/BaseBody.svg" alt="Base body" className='md:m-auto' />
                        <img src="/images/FootBase.svg" alt="laptop" className='md:m-auto' />
                    </div>
                </div>
            </div>
            </div>
        </main>
    );
};

export default Main;