import React from 'react'
import { ABOUT_ITEMS } from '../../constants/About'
import AboutCard from './AboutCard.jsx'

const About = () => {
    return (
        <div className="w-full h-screen lg:flex flex-col lg:flex-row" id='about'>
            <div className="lg:w-1/2 w-full h-1/2 lg:h-full md:h-3/5">
                <img src="/images/about.png" alt="" className="w-full h-full md:object-cover" />
            </div>
            <div className="lg:w-1/2 w-full sm:max-h-1/2 md:h-2/5 h-[50vh] md:py-14 py-20 lg:h-full bg-bg-1 flex flex-col items-center lg:justify-center md:justify-evenly lg:space-y-16 space-y-2">
                {ABOUT_ITEMS.map((item) => (
                    <AboutCard
                        key={item.id}
                        icon={item.icon}
                        title={item.title}
                        description={item.description}
                    />
                ))}

            </div>
        </div>
    )
}

export default About