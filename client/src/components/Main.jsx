// Main.js

import React from 'react';
import './Main.css';

const Main = () => {
    return (
        <main className='h-[80%] flex justify-between items-center'>
            <div className='text-white h-full w-[50%] flex justify-center items-center'>
                <div className='h-[60%] w-[55%]'>
                    <h1 className='text-[90px] ml-[-5px]'>ProfNITT</h1>
                    <p className='text-3xl mt-[-20px]'>The Finance and Investments club of NIT Trichy</p>
                    
                    <p className='text-3xl mt-[-20px]'>
                        <span className='animation-container'>
                            <span className="content__container__text">We are </span>
                            <ul className="content__container__list">
                                <li className="content__container__list__item">Profit !</li>
                                <li className="content__container__list__item">Research !</li>
                                <li className="content__container__list__item">Quant !</li>
                                <li className="content__container__list__item">Finance !</li>
                            </ul>
                        </span>
                    </p>
                </div>
            </div>
            <div className=' h-full'>
                <div className="bg-[url('/images/laptop_body.svg')] h-[90%] ml-20 flex bg-no-repeat justify-end bg-right">
                    <div>
                        <img src="/images/laptop_screen.svg" alt="laptop screen" className="w-full h-full" />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/BaseBody.svg" alt="Base body" className='' />
                        <img src="/images/FootBase.svg" alt="laptop" className='ml-16' />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
