import React from 'react'

const ContactAlert = () => {
    return (
        <div className='w-full flex items-center justify-center bg-accent px-4 py-3'>
            <div className='w-full max-w-5xl min-w-lg flex justify-between items-center bg-accent text-white'>
                <p className='lg:text-sm text-xs'>
                    Consulting And Estimate For Your Project, <a href="#contact" className='text-primary font-semibold underline'>Contact Us Today</a>
                </p>

                <a href="#contact" className="bg-white text-primary lg:px-8 px-2 lg:py-2.5 py-2 lg:text-sm text-xs font-semibold transition-colors">
                    Get A Quote
                </a>
            </div>
        </div >
    )
}

export default ContactAlert