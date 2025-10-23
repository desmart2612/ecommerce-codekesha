import React from 'react'

function HeroSection() {
    return (
        <div className='heroSection'>
            <div className='heroText'>
                <h2>Shop</h2>
                <p>
                    <span id='previous'>Home</span>
                    <span><svg xmlns="http://www.w3.org/2000/svg" fill="none" width={15} height={15} viewBox="0 0 24 24" strokeWidth={1.5} stroke="#888888" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                    </span>
                    <span id='current'>Shop</span>
                </p>
            </div>
            <img src="/images/hoodies2.png" alt="Hero Image" style={{width: "70%", height: "90%"}} />
        </div>
    )
}

export default HeroSection
