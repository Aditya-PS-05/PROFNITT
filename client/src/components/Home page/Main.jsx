"use client";
// import { useEffect } from 'react';
import './Main.css';

const Main = () => {
    // useEffect(() => {
    //     let index = 0;
    //     const laptopImages = ["/images/3 (1).jpg", "/images/4 (1).jpg", "/images/5 (1).jpg", "/images/6 (1).jpg"];
    //     let laptopScreen = document.getElementById('laptop-screen');
    //     function setImage() {
    //         let indexValue = index % 4;
    //         laptopScreen.src = laptopImages[indexValue];
    //         console.log(indexValue)
    //         index++;
    //     }
    //     setInterval(() => {
    //         setImage();
    //     }, 3000);
    // }, []);

    return (
        <main className=' md:flex justify-between items-center border-2 border-red-500 relative z-[1000] mb-12' style={{ paddingTop: '95px' }}>
            <div className='h-[550px] w-[550px] rounded-[50%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-indigo-900 to-[#010725] absolute bottom-[-20%] right-[20%] z-0 shadow-2xl shadow-[#010725] blur-[150px] border-2 border-red-500' />
            <div className='text-white h-full md:w-[50%] sm:w-full flex justify-center items-center border-2 border-green-500 z-[2000000]'>
                <div className='h-[60%] w-[55%] border-2 border-red-500 mt-6 md:mt-0 md:ml-0 ml-[-190px] z-[100000]'>
                    <img src="/images/ProfNITT_text.svg" alt="ProfNITT text image" />
                    <p className='text-2xl font-thin font-PPSupplyMono mt-4'>The Finance and Investments club of NIT Trichy</p>
                    <div className='text-3xl font-PPSupplyMono font-thin border-2 border-red-600'>
                        <span className='animation-container'>
                            <span className="content__container__text">We are   </span>
                            <ul className="content__container__list">
                                <li className="content__container__list__item">Profit !</li>
                                <li className="content__container__list__item">Research !</li>
                                <li className="content__container__list__item">Quant !</li>
                                <li className="content__container__list__item">Finance !</li>
                            </ul>
                        </span>
                    </div>
                </div>
            </div>
            <div className='h-full border-2 border-green-500 w-full sm:mt-10 md:w-[48%] z-[2000000]'>
                <div className="bg-[url('/images/laptop_body.svg')] h-[90%] ml-[130px] flex bg-no-repeat justify-end bg-right border-none rounded-t-[10px] bg-cover relative z-[1000] mt-4">
                    <div className='h-full w-full'>
                        <img src="/images/laptop.svg" alt="laptop screen" className="w-full border-2 border-red-500" id='laptop-screen' />
                    </div>
                </div>
                <div>
                    <div>
                        <img src="/images/BaseBody.svg" alt="Base body" className='md:ml-10' />
                        <img src="/images/FootBase.svg" alt="laptop" className='md:ml-16' />
                        <div></div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;