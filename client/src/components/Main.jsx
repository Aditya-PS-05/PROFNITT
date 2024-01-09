const Main = () => {
    return (
        <main className='h-[80%] md:flex justify-between items-center'>
            <div className='text-white h-full w-[50%] flex justify-center items-center'>
                <div className='h-[60%] w-[55%]'>
                    <h1 className='text-[90px] ml-[-5px]'>ProfNITT</h1>
                    <p className='text-3xl mt-[-20px]'>The Finance and Investments club of NIT Trichy</p>
                    <div className='flex h-[15%] w-[80%] mt-5 justify-between'>
                        <button className='cursor-pointer w-[40%] border-none rounded bg-[#0328EE] hover:bg-white hover:text-black'>Download App</button>
                        <button className='cursor-pointer w-[40%] border-none rounded bg-[#0328EE] hover:bg-white hover:text-black'>View Pricing</button>
                    </div>
                </div>
            </div>
            <div className='h-full border-2'>
                <div className="bg-[url('/images/laptop_body.svg')] h-[90%] ml-[130px] flex bg-no-repeat justify-end bg-right border-none rounded-t-[10px] bg-cover">
                    <div>
                        <img src="/images/laptop_screen.svg" alt="laptop screen" className="w-full h-full" id="laptopScreen"/>
                    </div>
                </div>
                <div>
                    <div>
                    <img src="/images/BaseBody.svg" alt="Base body" className='ml-10' />
                    <img src="/images/FootBase.svg" alt="laptop" className='ml-16' />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Main