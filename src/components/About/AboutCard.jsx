import React from 'react'

const AboutCard = ({ icon, title, description }) => {
    return (
        <div className=''>
            <div className="w-full md:w-4/5 md:mx-auto lg:mx-0 flex space-x-6 items-start lg:justify-center justify-around lg:px-14 px-8 mb-4 lg:mb-0">
                <img src={icon} alt="" className="lg:w-12 lg:h-12 w-8 h-8 md:h-24 md:w-24" />
                <div className='w-full flex flex-col items-start justify-center lg:space-y-2 space-y-1'>
                    <h2 className="lg:text-xl text-md md:text-2xl font-semibold">{title}</h2>
                    <p className="text-[11px] text-secondary sm:text-[13px] text-justify lg:w-[100%] w-full">{description}</p>
                </div>
            </div>
        </div >
    );
};


export default AboutCard