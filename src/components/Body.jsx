import '../App.css';

function Body() {
    return(
        <div className='my-10'>
            <div>
                <p className='text-2xl text-center w-5/6 mx-auto text-pink-950'>Are you looking for a professional, registered massage therapist? Sample Massage Therapy has 4 registered massage therapists who can provide clinical massage.</p>
            </div>
            <div className='my-8 w-[90%] mx-auto text-lg'>
                <p className='my-4'>We are committed to your long term health and well-being. Our multi-disciplinary clinic provides a balanced approach to healthy lifestyle. Enhance your health and improve your performance with our treatments.</p>
                <p className='my-4'>We welcome you to explore all the benefits you'll enjoy as one of our valued guests. Our professional staff is committed to offering the best massage therapy in Mainland.</p>
            </div>
            <hr className='border border-neutral-700 w-[90%] mx-auto' />
            <div className='flex flex-col items-center justify-center my-10'>
                <p className='text-3xl text-pink-950'>Family Wellness Massage Therapy</p>
                <p className='text-xl mt-5'>9876 Main Street, Suite 123, Mainland, ML12345</p>
                <p>Phone: 987-654-3210</p>
            </div>
        </div>
    )
}

export default Body;
