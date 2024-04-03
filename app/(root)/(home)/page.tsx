import { Metadata } from 'next';
import React from 'react'
export const metadata: Metadata = {
    title: "WOOM | HOME",
    description: " Zoom Clone",
};
const Home = () => {
    return (
        <section className='flex size-full flex-col gap-10 text-white'>
            <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
                <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11 ">
                    <h2 className='glassmorphism max-w-[270px] rounded py-2 text-center text-base font-normal'> Upcomeing Meeting at : <span className='font-bold'>12:30 PM</span></h2>
                    <div className="flex flex-col gap-2">
                        <h1 className='text-4xl font-extrabold lg:text-7xl '  > 11:30 AM</h1>
                        <p className='text-lg font-medium text-[#c9ddff] lg:text-2xl'>Wednesdat, April 3, 2024</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Home