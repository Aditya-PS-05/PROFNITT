const Main = () => {
    return (
        <main className='h-[50%] flex justify-between items-center'>
            <div className='text-white h-full w-[50%] flex justify-center items-center'>
                <div className='h-[60%] w-[55%] mt-'>
                    <h1 className='text-[90px] ml-[-5px]'>ProfNITT</h1>
                    <p className='text-3xl mt-[-20px]'>The Finance and Investments club of NIT Trichy</p>
                    <div className='flex h-[15%] w-[80%] mt-5 justify-between'>
                        <button className='cursor-pointer w-[40%] border-none rounded bg-[#0328EE] hover:bg-white hover:text-black'>Download App</button>
                        <button className='cursor-pointer w-[40%] border-none rounded bg-[#0328EE] hover:bg-white hover:text-black'>View Pricing</button>
                    </div>
                </div>
            </div>
            <div className='bg-white text-black border-2 border-red-600 relative'>
                <img src="/laptop_body.svg" alt="laptop body" className='absolute' />
                <img src="/laptop_screen.svg" alt="laptop screen" className="absolute"/>
                <img src="/BaseBody.svg" alt="Base body" className='absolute' />
                <img src="/Trackpad.svg" alt="laptop model" className='absolute' />
                <img src="/FootBase.svg" alt="laptop" className='absolute' />
            </div>
        </main>
    )
}

export default Main