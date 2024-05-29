import '../App.css'

function Hero() {
    return(
        <div className='body-comp h-[90vh]'>
            <div className='flex flex-col gap-4 items-center justify-center h-full'>
                <p className='text-5xl text-white'>Think Health. Think Massage.</p>
                <p className='text-white w-[60%] text-center'>We are open 9am to 6pm; Monday through Sunday. If you would like to schdule an appointment with us, please call us at 987-654-3210 today!</p>
                <div>
                    <button className='hero-btn border border-pink-950 hover:bg-transparent text-xl px-8 py-3 mx-2 text-white bg-pink-950'>LEARN MORE ABOUT US</button>
                    <button className='hero-btn border border-pink-950 hover:bg-transparent text-xl px-8 py-3 mx-2 text-white bg-pink-950'>CONTACT US TODAY</button>
                </div>
            </div>
        </div>
    )
}

export default Hero;
